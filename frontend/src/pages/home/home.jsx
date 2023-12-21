import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Prodcard } from '../../components/prodcard/prodcard';
import orvaImage from '../../assets/orva.png';
import { FaTruck, FaHeadset, FaShieldAlt, FaUndo } from 'react-icons/fa';

export const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [hours, setHours] = useState(19);
  const [minutes, setMinutes] = useState(48);
  const [seconds, setSeconds] = useState(38);
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  useEffect(() => {
    const getLatestProducts = async () => {
      try {
        const response = await axios.get('/api/v1/latest-products/');
        console.log('Fetched Data:', response.data);
        setLatestProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    getLatestProducts();
  }, []);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${orvaImage})`,
          backgroundSize: '400px 400px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md"></div>
        </div>
      </div>

      <div className="features-bar text-center py-4 bg-yellow-200 px-10 rounded-lg mx-4">
        <div className="container mx-auto flex justify-between items-center space-x-4">
          <FeatureItem 
            icon={<FaTruck />} 
            title="Free Shipping over Rs 999" 
            description="Enjoy free shipping on all orders over Rs 999."
            isActive={activeFeature === "truck"} 
            onMouseEnter={() => setActiveFeature("truck")}
            onMouseLeave={() => setActiveFeature(null)}
          />
          <div className="border-r border-black h-20"></div>
          <FeatureItem 
            icon={<FaHeadset />} 
            title="Customer Support 24*7" 
            description="Our team is available round the clock to assist you."
            isActive={activeFeature === "headset"} 
            onMouseEnter={() => setActiveFeature("headset")}
            onMouseLeave={() => setActiveFeature(null)}
          />
          <div className="border-r border-black h-20"></div>
          <FeatureItem 
            icon={<FaShieldAlt />} 
            title="100% Secure Payments" 
            description="Shop with confidence using our secure payment methods."
            isActive={activeFeature === "shield"} 
            onMouseEnter={() => setActiveFeature("shield")}
            onMouseLeave={() => setActiveFeature(null)}
          />
          <div className="border-r border-black h-20"></div>
          <FeatureItem 
            icon={<FaUndo />} 
            title="Refund Policy" 
            description="Hassle-free returns and refunds within 7 days. *t&c apply"
            isActive={activeFeature === "refund"} 
            onMouseEnter={() => setActiveFeature("refund")}
            onMouseLeave={() => setActiveFeature(null)}
          />
        </div>
      </div>

      <div className="deal-card text-center py-4 bg-white shadow-lg mx-4 my-4 rounded-lg">
        <h2 className="text-3xl font-bold  mb-2 bg-yellow-300 p-2">Deals of the Day</h2>
        <span className="countdown font-mono text-2xl">
  <span style={{ "--value": hours }}>{String(hours).padStart(2, '0')}</span>:
  <span style={{ "--value": minutes }}>{String(minutes).padStart(2, '0')}</span>:
  <span style={{ "--value": seconds }}>{String(seconds).padStart(2, '0')}</span>
</span>

      </div>

      <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black align-middle">Latest Products</h1>
      {latestProducts.map((product) => (
        <div key={product.id}>
          <Prodcard latestProducts={latestProducts} />
        </div>
      ))}
    </div>
  );
};

const FeatureItem = ({ icon, title, description, isActive, onMouseEnter, onMouseLeave }) => (
  <div 
    className={`flex flex-col items-center space-y-2 ${isActive ? 'text-xl' : 'text-2xl'} ${isActive ? 'text-gray-900' : 'text-gray-600'}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {icon}
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

export default Home;

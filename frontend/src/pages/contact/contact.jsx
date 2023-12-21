import React from 'react'
import { MdPlace } from 'react-icons/md'
import { MdLocalPhone } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import { MdWhatsapp } from 'react-icons/md'
import { MdFacebook } from 'react-icons/md'
import './contact.css'

const contact = () => {
    return (
        <div className='contain1'>
            <div>
                <div className='contactsection'>
                    <h2> Need Help? </h2>
                </div>

                <div className='section1'>
                    <p className='pb-10 pl-10'>Welcome to ORVA, meet the passionate team behind ORVA. Behind the scenes at ORVA is a dedicated team of University Students who are passionate about what they do. From customer service to product curation, each member of our team plays a crucial role in delivering an exceptional shopping experience.</p>
                    <p className='pb-10 pl-10'> We believe in making wholesome choices accessible and enjoyable for everyone. We love to connect people with the products they need and love, all while delivering exceptional customer service. We strive to make online shopping accessible, affordable, and enjoyable for everyone. We're dedicated to providing you with the best selection, quality, and value while ensuring a safe and secure shopping environment.</p>
                    <p className='pb-10 pl-10'>The Most commonly asked questions are covered in our <a href='#'><b>FAQs</b></a>. If you have any specific questions do not hesitate to contact us by writing us an email at <a href='#'><b>sample@orvaoils.com</b></a> or by raising a request using the form below.</p>
                </div>
            </div>
            <div className='contain2'>
                <br />
                <h2 className='card-title pl-10 subt'>Get in touch</h2>
                <br />

                <div className='contain3'>

                    <div className="card w-60 bg-base-100 shadow-xl card1">
                        <div className="card-body items-center text-center">
                            <MdPlace className='icons1' />
                            <h2 className="card-title">Visit us</h2>
                            <p>57/B,3rd Main,Hoysala Nagar<br /> Horamvu Main road, Bengaluru</p>
                        </div>
                    </div>

                    <div className="card w-60 bg-base-100 shadow-xl card1">
                        <div className="card-body items-center text-center">
                            <MdLocalPhone className='icons1' />
                            <h2 className="card-title">Call us</h2>
                            <p>+918951139800</p>
                        </div>
                    </div>

                    <div className="card w-60 bg-base-100 shadow-xl card1">
                        <div className="card-body items-center text-center">
                            <MdEmail className='icons1' />
                            <h2 className="card-title">Mail us at</h2>
                            <p>support@orvaoils.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='contain7'>
                <div className='request'>
                    <h2 className='card-title text-white'>Raise a request</h2>
                </div>
                <div className='contain4'>
                    <div className='contain5'>
                        <div class="inp">
                            <input type="text" required />
                            <label>Name</label>
                        </div>
                        <div class="inp">
                            <input type="text" required />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className='contain6'>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Subject</span>
                            </div>
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                            <div className="label">
                                <span className="label-text">Describe your issue</span>
                            </div>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                        </label>
                    </div>
                </div>
            </div>
            <div className='p-10'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Our Social Media</h2>
                        <div className='flex'>

                            <div className='card-body items-center text-center'>
                                <a href='#' className='items-center card-body'>
                                    <MdWhatsapp className='icons2' />
                                    <h2>Chat with us</h2>
                                </a>
                            </div>

                            <div className='card-body items-center text-center'>
                                <a href='#' className='items-center card-body'>
                                    <MdFacebook className='icons2' />
                                    <h2>Connect with us</h2>
                                </a>
                            </div>

                            <div className='card-body items-center text-center'>
                                <a href='#' className='items-center card-body'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                                    <h2>Connect with us</h2>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact

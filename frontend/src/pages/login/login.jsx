import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const data = { username: "", password: "" };
  const [user, setUser] = useState(data);
  const history = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history("/");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh", 
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "300px",
          textAlign: "center",
          marginTop: "-20px", 
        }}
      >
        <div style={{ marginBottom: "15px" }}>
        <label htmlFor="username" style={{ fontWeight: 'bold', fontSize: '18px' }}>
            Username
        </label>

          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Enter your username"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              marginBottom: "10px",
              

            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
        <label htmlFor="password" style={{ fontWeight: 'bold', fontSize: '18px' }}>
            Password
        </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              marginBottom: "10px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            boxSizing: "border-box",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <p style={{ marginBottom: "10px", marginTop: "10px" }}>
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "100%",
                padding: "10px",
                boxSizing: "border-box",
                background: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </button>
          </Link>
        </p>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <span>Sign up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

// src/pages/Login.js
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../Images/Logo.png';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      rememberMe: e.target.checked,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 👇 Replace with your backend API URL
      const response = await axios.post('http://localhost:5001/api/login', formData);

      console.log('Login response:', response.data);

      if (response.data.success) {
        alert('Login successful!');
        onLogin();
        navigate('/main');
      } else {
        setError(response.data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgetPassword = () => {
    alert('Password reset functionality not implemented yet.');
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={Logo} alt="Logo" style={{ width: "140px" }} />
        <div onClick={() => navigate('/SignUp')}>
          <button
            style={{
              border: "none",
              background: "orange",
              padding: '10px',
              borderRadius: "10px",
            }}
          >
            Create Account
          </button>
        </div>
      </div>

      <div className="homebody">
        <h1>Login Your Account</h1>

        <div className="Formmain">
          <form onSubmit={handleSubmit} className="FormINfo">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Input Email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              required
            />

            <div className="Formdownsection">
              <div style={{ display: 'flex' }}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleCheckboxChange}
                />
                <h3>Remember me</h3>
              </div>
              <div className="forgetpass">
                <h3 onClick={handleForgetPassword} style={{ cursor: 'pointer' }}>
                  Forget password
                </h3>
              </div>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="btnLog">
              <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

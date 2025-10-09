// src/pages/SignUp.js
import React, { useState } from 'react';
import './Login.css'; // You can keep this or switch to SignUp.css
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../Images/Logo.png';

const SignUp = ({ onSignup }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
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
      agreeTerms: e.target.checked,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.agreeTerms) {
    alert('Please agree to the Terms of Service');
    return;
  }

  setLoading(true);
  setError('');

  try {
    const response = await axios.post('http://localhost:5001/signup', formData);

    console.log('Signup response:', response.data);

    if (response.status === 200) {
      alert('Signup successful!');
      onSignup?.();
      navigate('/main');
    } else {
      setError(response.data.message || 'Something went wrong.');
    }
  } catch (err) {
    console.error('Signup error:', err);
    setError(err.response?.data?.message || 'Server error. Please try again.');
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={Logo} alt="Logo" style={{ width: "140px" }} />
        <div onClick={() => navigate('/')}>
          <button
            style={{
              border: "none",
              background: "orange",
              padding: '10px',
              borderRadius: "10px"
            }}
          >
            Login
          </button>
        </div>
      </div>

      <div className="homebody">
        <h1>Create An Account</h1>
        <div className="Formmain">
          <form onSubmit={handleSubmit} className="FormINfo">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Astrojiggabob"
              required
            />

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

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                className="chekboxxx"
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleCheckboxChange}
                style={{ marginRight: '8px' }}
              />
              <h3 style={{ fontWeight: '100', fontSize: '15px' }}>
                I agree to the Terms of Service
              </h3>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="btnLog btnSign" style={{ textWrap: 'nowrap' }}>
              <button type="submit" disabled={loading}>
                {loading ? 'Creating account...' : 'Create account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

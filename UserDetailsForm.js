import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDetailsForm.css';

function UserDetailsForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => email.includes('@');
  const validatePhone = (phone) => /^[0-9]+$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !phone) {
      alert('All fields are required!');
      return;
    }
    if (!validateEmail(email)) {
      alert('Email must include @');
      return;
    }
    if (!validatePhone(phone)) {
      alert('Phone number must contain only digits');
      return;
    }

    // Save data or log it
    console.log({ username, email, phone });

    navigate('/home'); // or your homepage route
  };

  return (
    <div className='user-form-container'>
      <form onSubmit={handleSubmit} className="user-form-box">
        <h2 style={{ textAlign: 'center' }}>Enter Your Details</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default UserDetailsForm;

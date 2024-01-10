// ForgotPassword.jsx
import React, { useState } from 'react';

const ForgotPassword = ({ setisRegistered, setShowForgotPassword }) => {
  const [email, setEmail] = useState('');
 
  const handleResetRequest = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/resetPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      setEmail('')
      if (res.status === 200) {
        console.log('Reset request sent successfully!');
        // Show success message or redirect
      } else {
        console.log('Error sending reset request');
        // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form action="submit" className="form" onSubmit={handleResetRequest}>
        <input
          type="email"
          placeholder="Email.."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Reset Password</button>
      </form>
      <p>
        New User? <button onClick={() => setisRegistered(false)}>Register</button>
      </p>
    </div>
  );
};

export default ForgotPassword;

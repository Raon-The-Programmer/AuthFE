// ResetPassword.jsx
import React, { useState } from 'react';

const ResetPassword = ({ match }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleResetSubmit = async () => {
    const resetToken = match.params.resetToken;

    try {
      const res = await fetch(`http://localhost:3001/password-reset-submit/${resetToken}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      if (res.status === 200) {
        console.log('Password reset successful!');
        // Redirect to login page or show success message
      } else {
        console.log('Error resetting password');
        // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleResetSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

// Register.js
import React, { useState } from 'react';
import '../../css/Register/register.css'
const Register = ({ onRegister }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // Kiểm tra xác nhận mật khẩu
    if (newPassword !== confirmPassword) {
      alert('Mật khẩu xác nhận không khớp');
      return;
    }

    const newUser = { username: newUsername, password: newPassword, email };
    onRegister(newUser);

    // Mở modal thành công
    setIsModalOpen(true);

    // Reset trường
    setNewUsername('');
    setNewPassword('');
    setConfirmPassword('');
    setEmail('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="form">
          <form onSubmit={handleRegister}>
            <div className="top">
              <h2>Register</h2>
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="UserName"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="input">
              <input
                type="email"
                placeholder="Gmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>

      {/* Modal thành công */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Register Successfully</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;

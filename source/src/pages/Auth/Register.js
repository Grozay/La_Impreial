// Register.js
import React, { useState } from 'react';
import Swal from 'sweetalert2' ;
import '../../css/Register/register.css'
import { useNavigate, Navigate } from 'react-router-dom';
const Register = ({ onRegister }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate('');
  const MainAlert = Swal.mixin({
    showConfirmButton: false,
    timer: 2000,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  const handleRegister = (e) => {
    e.preventDefault();
    
    // Kiểm tra xác nhận mật khẩu
    if(newUsername === '' ){
      MainAlert.fire({
        icon: "error",
        timer: 1500,
        title: "Username is required"
      });
      return;
    }else if(email === ''){
      MainAlert.fire({
        icon: "error",
        timer: 1500,
        title: "Email is required"
      });
      return;
    }else if(newPassword === ''){
      MainAlert.fire({
        icon: "error",
        timer: 1500,
        title: "Please fill the pasword"
      });
      return;
    }
    else if (newPassword !== confirmPassword ) {
      MainAlert.fire({
        icon: "error",
        timer: 1500,
        title: "Password And Confirm Password Must Be Same"
      });
      return;
    }
    
    

   
 
    const newUser = { username: newUsername, password: newPassword, email };
    onRegister(newUser);
    
   

    // Reset trường
    setNewUsername('');
    setNewPassword('');
    setConfirmPassword('');
    setEmail('');
    MainAlert.fire({
      icon: "success",
      title: "Register  successfully"
    });
    navigate('/account/')
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

     
    </div>
  );
};

export default Register;

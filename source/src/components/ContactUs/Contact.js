import '../../css/Contact/contact.css'
import { useState } from "react";
import Swal from 'sweetalert2' ;
import {useNavigate, Navigate} from 'react-router-dom';
function Contact({onAdd}){
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');



  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorContact, setErrorContact] = useState('');
  const [errorSubject, setErrorSubjiect] = useState('');
  
  const homepage = useNavigate();
  const MainAlert = Swal.mixin({
    showConfirmButton: false,
    timer: 1000,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled

    if(!name){
      setErrorName('Name is required');
  }
  else if(name){
    setErrorName('');
  }
   if(!email){
    setErrorEmail('Email is required');
  }
  else if(email){
    setErrorEmail('');
  }
  if(!contact){
    setErrorContact('Contact is required');
  }
  else if(contact){
    setErrorContact('');
  }
  if(!subject){
    setErrorSubjiect('Subject is required');
  }
  else if(subject){
    setErrorSubjiect('');
    {
      // Display an error message
      MainAlert.fire({
        icon: 'success',
        timer: 1500,
        title: 'Thank You For Your Contact',
      });
      homepage('/products')

  }
  }else{
    const contacts = { name, email, contact, subject, message };
      onAdd(contacts);
      setName('');
      setEmail('');
      setContact('');
      setSubject('');
      setMessage('');
  }
   



    // if (name && email && contact && subject) {
    //   const contacts = { name, email, contact, subject, message };
    //   onAdd(contacts);
    //   setName('');
    //   setEmail('');
    //   setContact('');
    //   setSubject('');
    //   setMessage('');
    //   alert('Your message has been sent');
    // } else {
    //   alert('Please fill in all required fields.');
    // }
  };






    return(
<div className="container1">
    {/* <div className='suon'> */}
            <div>
                      {/* Bệ Sườn trên */}
                      <h2>Contact Us</h2>
                        <h5 style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', fontWeight: 'normal' }}>La_Imperial (by Thieu Nu Group)</h5>
                 
                            <i  class="fa-solid fa-phone"  ></i>Tel: 09123456789 
                              
                       
                        <p>
                            Email: 
                            <a href="mailto:thieunu@gmail.com" style={{textDecoration: "none"}}> thieunu@gmail.com</a>
                        </p>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.302031394123!2d-2.2939150236934203!3d53.4630620659846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2zU8OibiB24bqtbiDEkeG7mW5nIE9sZCBUcmFmZm9yZA!5e0!3m2!1svi!2s!4v1701101284365!5m2!1svi!2s" width="400" height="300"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.302031394123!2d-2.2939150236934203!3d53.4630620659846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2zU8OibiB24bqtbiDEkeG7mW5nIE9sZCBUcmFmZm9yZA!5e0!3m2!1svi!2s!4v1701240441849!5m2!1svi!2s" width="550" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.266255370532!2d106.682426!3d10.790908000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529cfdaf8731f%3A0x1628c44dc1f38869!2zMzkxYSDEkC4gTmFtIEvhu7MgS2jhu59pIE5naMSpYSwgUGjGsOG7nW5nIFZUUywgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1702894416101!5m2!1svi!2sus" width="550" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

      



            <div class="container2">
            <div class="content2">
                <div class="form">
                    <form onSubmit={handleSubmit} >
                        <div class="top">
                            <h2>Contact With Us</h2>
                        </div>
                        <div class="input">
                          <h2 style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', fontWeight: 'normal' }}>Your Name</h2>
                            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <div className="Register_error">{errorName}</div>
                        </div>
                        <div class="input">
                          <h2 style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', fontWeight: 'normal' }}>Your Email</h2>
                            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div className="Register_error">{errorEmail}</div>
                        </div>
                        <div class="input">
                          <h2 style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', fontWeight: 'normal' }}>Your Contact:</h2>
                            <input type="text" placeholder="Your Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                            <div className="Register_error">{errorContact}</div>
                        </div>
                        <div class="input">
                          <h2 style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', fontWeight: 'normal' }}>Subject</h2>
                            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                            <div className="Register_error">{errorSubject}</div>
                        </div>
                        <div class="input">
                          <h2 style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', fontWeight: 'normal' }}>Your message (optional)</h2>
                          <textarea name="message"style={{ width: '585px ', height: '100px' }} value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        {/* <div class="forget">
                            <label><input type="checkbox" />Ghi Nhớ Đăng Nhập</label>
                        </div> */}
                        <div class="submit">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>


            </div>
        </div>





  {/* </div> */}

      
      
    





</div>


    
            




         







   
    );
}
export default Contact;
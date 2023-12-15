import '../../css/Contact/contact.css'
import { useState } from "react";
function Contact({ onAdd }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (name && email && contact && subject) {
      const contacts = { name, email, contact, subject, message };
      onAdd(contacts);
      setName('');
      setEmail('');
      setContact('');
      setSubject('');
      setMessage('');
      alert('Your message has been sent');
    } else {
      alert('Please fill in all required fields.');
    }
  };






  // const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     contact: '',
  //     subject: '',
  //     message: '',
  //   });

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission logic here
  //     console.log('Form data submitted:', formData);
  //     // You can add an API call or other logic for handling form data
  //   };

  return (
    <div className="container1">
      {/* <div className='suon'> */}
      <div>
        {/* Bệ Sườn trên */}
        <h2>Contact Us</h2>
        <h5>La_Imperial (by Thieu Nu Group)</h5>
        <li className='header_bavbar_item'>
          <i class="fa-solid fa-phone"></i>
          Tel: 09123456789
        </li>
        <p>
          Email
          <a href="mailto:thieunu@gmail.com">thieunu@gmail.com</a>
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.302031394123!2d-2.2939150236934203!3d53.4630620659846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2zU8OibiB24bqtbiDEkeG7mW5nIE9sZCBUcmFmZm9yZA!5e0!3m2!1svi!2s!4v1701101284365!5m2!1svi!2s" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>





      <div class="container">
        <div class="content">
          <div class="form">
            <form onSubmit={handleSubmit} >
              <div class="top">
                <h2>Contact With Us</h2>
              </div>
              <div class="input">
                <h2>Your Name</h2>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div class="input">
                <h2>Your email</h2>
                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div class="input">
                <h2>Your Contact:</h2>
                <input type="text" placeholder="Your Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
              </div>
              <div class="input">
                <h2>Subject</h2>
                <input type="text" placeholder="Subject" value={setSubject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div class="input">
                <h2>Your message (optional)</h2>
                <textarea name="message" style={{ width: '100%', height: '200px' }} />
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
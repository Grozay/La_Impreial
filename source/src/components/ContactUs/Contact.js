
import { useState } from "react";
function Contact(){
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: '',
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
        // You can add an API call or other logic for handling form data
      };

    return(
        <div>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.302031394123!2d-2.2939150236934203!3d53.4630620659846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2zU8OibiB24bqtbiDEkeG7mW5nIE9sZCBUcmFmZm9yZA!5e0!3m2!1svi!2s!4v1701101284365!5m2!1svi!2s" width="400" height="300"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>




            <div>
      <form onSubmit={handleSubmit}>
        <label>
        Your Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
        Your Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
        Your Contact:
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
        </label>
        <br />
        <label>
        Subject:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </label>
        <br />
        <label>
        Your Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>








        </div>
    );
}
export default Contact;
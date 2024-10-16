// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';
//import InstagramLogo from '.images/instagram-logo.png'; // Assuming you have a logo image file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      {/* Contact Information Section */}
      <div className="contact-info-section">
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> Shravya Yamsani</p>
        <p><strong>Email:</strong> lalithlallu123@gmail.com</p>
        <p><strong>Phone:</strong> +1-510-766-9592</p>
        <p><strong>Address:</strong> 552 Golden star drive,Bolingbrook,IL.</p>

        {/*<div className="social-media">
          <a href="https://www.instagram.com/youraccount" target="_blank" rel="noopener noreferrer">
            <img src={InstagramLogo} alt="Instagram" className="instagram-logo" />
          </a>
        </div>*/}
      </div>
    </div>
  );
};

export default Contact;

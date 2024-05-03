import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    FullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
setLoading(true)
      const response = await axios.post("https://mybland-backend-c3uv.onrender.com/contact", formData);
      toast("Form submitted successfully", response.data.message);
    
    } catch (error) {
      console.error("An error occurred during form submission:", error);
     
    } finally{
      setLoading(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form" id="myForm">
      <div style={{ display: 'flex', width: '100%', gap: '12px' }}>
        <div className="inptname">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" name="FullName" id="FullName" placeholder="Full Name" value={formData.FullName} onChange={handleChange} />
        </div>
        <div className="inptname">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
      </div>

      <label htmlFor="phone">Phone</label>
      <input type="tel" name="phone" id="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />

      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" cols="12" rows="10" placeholder="Text here" value={formData.message} onChange={handleChange}></textarea>

      <button
       className="buttonc" 
      type="submit"
       style={{ backgroundColor:"black"}}
       disabled={loading}>
      {loading ? "sending..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;

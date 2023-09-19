import React, { useState } from 'react';
import { images, data } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const res = validateForm();
    if(res===false) return;
    setLoading(true);
    await sendMail();
    setIsFormSubmitted(true);
    setLoading(false);
  };

  const validateForm = () =>{
    if(username==='' || email==='' || message==='')
    {
      toast.error("All fields are required");
      return false;
    }
    let  emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let res = emailRegex.test(email);
    if(res===false)
    {
      toast.error("Enter a valid email address");
      return false;
    }
    return true;
  }
  const sendMail = async () => {
    const templateParams = {
      username: username,
      message: message,
      email: email,
      subject: "Portfolio Contact Message",
    }

    // Create a hidden form element
    const form = document.createElement('form');
    form.style.display = 'none';
    // Add fields to the form
    for (const key in templateParams) {
      if (templateParams.hasOwnProperty(key)) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = key;
        console.log(key);
        input.value = templateParams[key];
        form.appendChild(input);
      }
    }
    // Add the form to the document body
    document.body.appendChild(form);

    try{
      
      await emailjs.sendForm('service_pzxyzpq', 'template_v0s4o91', form, process.env.REACT_APP_EMAIL_KEY);
      console.log("Message Sent");
    }
    catch(err){
      console.error("Error in Sending Email", err);
    }
  }
  
  return (
    <>
      <h2 className="head-text">Take a coffee & <span>chat with me</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href={`mailto:${data.MAIL}`} className="p-text">{data.MAIL}</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href={`tel:+91${data.MOBILE}`} className="p-text">+91 {data.MOBILE}</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input autoComplete='off' className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input autoComplete='off' className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              autoComplete='off'
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
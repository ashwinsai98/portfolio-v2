import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/themepattern.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        // setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6e62cce3-737b-4a47-a526-e6bd52f1e876");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            alert("Email sent Successfully!")
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div id ='contact' className='contact'>
        <hr />
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Let's connect and explore new possibilities together. Reach out to me at your convenience to discuss your ideas and goals.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" height='50' width='50'/>
                        <p>ashwin.prak1998@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" height='50' width='50'/>
                        <p>HYD, India</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" height='50' width='50'/>
                        <p>+91 7550262911</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Your Message</label>
                <textarea name="message" rows = "8" placeholder='Please enter your message'></textarea>
                <button type = 'submit' className="contact-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
import React, { useEffect } from "react";


function ContactMe() {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }, []);
  
    return (
      <div className="contact-me" id="ContactMe">
        <h1>Contact Me</h1>
        <p>If you would like to get in touch, please feel free to reach out!</p>
        <form action="https://formspree.io/f/xjvjlqzq" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/muthoninduta/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    );
  }

export default ContactMe;
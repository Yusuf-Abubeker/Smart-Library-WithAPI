import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    setIsSubmitted(true);
  };

  return (
    <div className={styles.contact_page}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Send us a message:</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <p className={styles.confirmation_message}>
          Thanks for contacting us! We'll get back to you soon.
        </p>
      )}
    </div>
  );
};

export default Contact;

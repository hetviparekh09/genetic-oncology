import React from 'react';

const Contact = () => {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out to us.</p>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

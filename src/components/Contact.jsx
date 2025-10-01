// src/components/Contact.jsx
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">// GET_IN_TOUCH</h2>
      <p className="contact-text">
        My inbox is always open. Whether you have a question, a proposal, or just want to say hi, I'll get back to you!
      </p>
      <a href="mailto:thekrishdshahbhs@gmail.com" className="contact-button">
        Say Hello
      </a>
    </section>
  );
}

export default Contact;
import "./Contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { SiTelegram } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lu4sb56",
      "template_kmha65w",
      form.current,
      "kKOo7Xy9PI973W1G0"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kuanysh.aptayzhanov@mail.ru</h5>
            <a href="mailto:kuanysh.aptayzhanov@mail.ru" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <SiTelegram className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Kuanysh_Aptaizhanov</h5>
            <a href="https://t.me/Kuanysh_Aptaizhanov" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+79777024276</h5>
            <a
              href="https://api.whatsapp.com/send?phone=89777024276"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

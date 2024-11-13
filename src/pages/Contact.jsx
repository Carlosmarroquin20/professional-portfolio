
import '../styles/Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <h1 className="contact-title">{t('contact.title')}</h1>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

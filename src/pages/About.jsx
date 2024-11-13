// src/pages/About.jsx
import '../styles/About.css';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <h1 className="about-title">{t('about.title')}</h1>
      <p className="about-description">{t('about.description')}</p>
    </div>
  );
}

export default About;

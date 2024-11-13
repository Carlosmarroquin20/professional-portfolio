
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <header>
      <nav>
        <Link to="/">{t('home.welcome')}</Link>
        <Link to="/about">{t('about.title')}</Link>
        <Link to="/projects">{t('projects.title')}</Link>
        <Link to="/contact">{t('contact.title')}</Link>
      </nav>
      <div className="language-switcher">
        <select onChange={changeLanguage} defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </header>
  );
}

export default Header;

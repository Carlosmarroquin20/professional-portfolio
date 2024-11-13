
import '../styles/Home.css';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <h1 className="home-title">{t('home.welcome')}</h1>
      <p className="home-description">{t('home.description')}</p>
    </div>
  );
}

export default Home;

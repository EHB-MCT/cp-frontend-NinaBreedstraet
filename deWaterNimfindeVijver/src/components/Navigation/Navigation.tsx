import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <Link to="/Home"><img src="/Logo er was eens_Versie2.png" alt="lalala" /></Link>
      </div>
        <div className={styles.rechts}>
          <Link to="/Home">LandingsPagina</Link>
          <Link to="/Making">Making of</Link>
          <Link to="/About">About us</Link>
        </div>

    </nav>
  );
};

export default Navigation;
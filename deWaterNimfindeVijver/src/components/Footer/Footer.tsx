import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import SearchFilter from "components/SearchFilter";
import { useSearch } from "Hooks/useSearch";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src="/Logo er was eens_Versie2.png" alt="" />
        </div>
        <div className={styles.aboutFooter}>
          <p>
            23 studenten van de opleiding Multimedia en Creatieve Technologie
            dien kozen voor het vak Front-End Design. Met een dosis
            creativiteit, code en een flinke scheut verbeelding verzamelden ze
            hier al hun sprookjes. Benieuwd wie ze zijn?
          </p>
          <div>
            <a className={styles.buttonFooter} href="/About">
              About us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import LandingsPagina from "./Landingspagina";
import { title } from "process";
import styles from "../Pages/Styles.module.scss";
import { IoEyeOutline } from "react-icons/io5";
import { useParams } from "react-router";
import DATA from "../data.json";

function MakingOf() {
  const { id } = useParams(); // Haal de id uit de URL
  const sprookje = DATA.find((item) => item.id === id); // Zoek het sprookje op basis van de id

  // Als het sprookje niet wordt gevonden, geef dan een foutmelding weer
  if (!sprookje) {
    return <div>Sprookje niet gevonden!</div>;
  }
  return (
    <div className={styles.titel}>
      <h2>Making off</h2>
      <div className={styles.header}>
        <img src={sprookje.picture1} alt="" />
        <div className={styles.nameAndTitle}>
          <h1>{sprookje.title}</h1>
          <p>{sprookje.name}</p>
        </div>
        <div className={styles.story}>
          <div>
            <h3>Verhaal</h3>
            <p>{sprookje.description}</p>
            <h3>Auteur</h3>
            <p>{sprookje.auteur}</p>
          </div>
          <div>
            <img src={sprookje.picture2} alt="" />
            <a href={sprookje.link}>SlArrowLeftCircle({}) View Website</a>
          </div>
        </div>
        <div className={styles.extraInfo}>
          <h2>Extra info</h2>
          <div className={styles.images}>
            <img src={sprookje.extraInfoPic1} alt="" />
            <img src={sprookje.extraInfoPic2} alt="" />
            <img src={sprookje.extraInfoPic3} alt="" />
          </div>
          <div className={styles.extraInfo}>
            <p>{sprookje.extraInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakingOf;

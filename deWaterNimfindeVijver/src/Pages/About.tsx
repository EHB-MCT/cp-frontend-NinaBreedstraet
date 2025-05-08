// import LandingsPagina from "./Landingspagina";
import { Slider } from "components/Slider";
import styles from "../Pages/Styles.module.scss";

function About() {
  return (
    <div>
      <div className={styles.titel1}>
        <h2 className={styles.titel1}>About</h2>
        <p className={styles.tekst}>
          EHB-studenten Fron-End Development werken dit semester met react aan
          een parallax websiote rond het thema sprookjes.
          <br></br>
          Ze combineren techniek en creativiteit om een interactieve webervaring
          te creëeren met diepte-effecten en animaties. Zo leren er
          React-componenten, state management en visuele effecten toepassen om
          hun sprookjeswereld tot leven te brengen.
        </p>
        <a className={styles.buttonFooter} href="/Home">
          Bekijk alle sprookjes!
        </a>
      </div>

      <div className={styles.titel2}>
        <h2>Hot Today</h2>
        <Slider />
      </div>
    </div>
  );
}

export default About;

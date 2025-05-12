// import LandingsPagina from "./Landingspagina";
import { Slider } from "components/PortaalComponents/Slider/Slider";
import styles from "../Pages/Styles.module.scss";
import DATA from "data.json";
import { useState } from "react";

function About() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSprookjes = DATA.filter((sprookjes) =>
    sprookjes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <div className={styles.titel1}>
        <h2 className={styles.titel1}>About</h2>
        <p className={styles.tekstAbout}>
          EHB-studenten Fron-End Development werken dit semester met react aan
          een parallax websiote rond het thema sprookjes.
          <br></br>
          Ze combineren techniek en creativiteit om een interactieve webervaring
          te creëeren met diepte-effecten en animaties. Zo leren er
          React-componenten, state management en visuele effecten toepassen om
          hun sprookjeswereld tot leven te brengen.
        </p>
        <a className={styles.buttonAbout} href="/Home">
          Bekijk alle sprookjes!
        </a>
      </div>

      <div className={styles.containerHotToday}>
        <h2 className={styles.titel2}>Hot Today</h2>
        <div className={styles.slider}>
          <Slider sprookjesData={filteredSprookjes} />
        </div>
      </div>
    </div>
  );
}

export default About;

import { Slider } from ".././components/PortaalComponents/Slider/Slider";
import styles from "../Pages/Styles.module.scss";
import { useState } from "react";
import ImageGrid from "../components/PortaalComponents/ImageGrid/ImageGrid";
import { FiSearch } from "react-icons/fi";
import { useFairytaleCards } from "../hooks/useFairyTales";

function About() {
  const [searchTerm] = useState("");
  const { data } = useFairytaleCards();

  const filteredSprookjes = data.filter((sprookjes) =>
    sprookjes.fairytale.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const icon = FiSearch({ size: 24, color: "black" });

  return (
    <div>
      <a className={styles.searchIcon} href="/cp-frontend-NinaBreedstraet/home">
        {icon}
      </a>
      <div className={styles.sectionAbout}>
        <div className={styles.part1}>
          <h2 className={styles.titel1}>About</h2>
          <p className={styles.tekstAbout}>
            EHB-studenten Front-End Development werken dit semester met react
            aan een parallax website rond het thema sprookjes.
            <br></br>
            <br></br>
            Ze combineren techniek en creativiteit om een interactieve
            webervaring te creëeren met diepte-effecten en animaties. Zo leren
            er React-componenten, state management en visuele effecten toepassen
            om hun sprookjeswereld tot leven te brengen.
          </p>
          <a
            className={styles.buttonAbout}
            href="/cp-frontend-NinaBreedstraet/home"
          >
            Bekijk alle sprookjes!
          </a>
        </div>
        <div className={styles.part2}>
          <ImageGrid />
        </div>
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

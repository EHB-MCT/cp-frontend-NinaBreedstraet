import { Parallax } from "components/Parallax";
import styles from "./Styles.module.scss";

function LandingsPagina() {
  return (
    <div className="App">
      <a className={styles.back} href="/Home">
        &larr;
      </a>
      <Parallax />
    </div>
  );
}

export default LandingsPagina;

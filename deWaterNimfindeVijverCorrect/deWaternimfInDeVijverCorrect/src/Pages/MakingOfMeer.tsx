import styles from "../Pages/Styles.module.scss";
import { useParams } from "react-router";
import DATA from "../data.json";

function MakingOfMeer() {
  const { id } = useParams();
  const sprookje = DATA.find((item) => item.id === id);

  if (!sprookje) {
    return <div>Sprookje niet gevonden!</div>;
  }
  return (
    <div className={styles.containerMakingOf}>
      <h2>Making off</h2>
      <div
        className={styles.header}
        style={{
          backgroundImage: `url(${sprookje.picture1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "76.8rem",
          height: "25rem",
          overflow: "hidden",
          backgroundColor: "green",
        }}
      >
        <div className={styles.nameAndTitle}>
          <h1 className={styles.title}>{sprookje.title}</h1>
          <p className={styles.name}>{sprookje.name}</p>
        </div>
      </div>
      <div className={styles.story}>
        <div>
          <h3 className={styles.storyTitle}>Verhaal</h3>
          <p className={styles.storyParagraph}>{sprookje.leesMeer}</p>
          <h3 className={styles.storyTitle}>Auteur</h3>
          <p className={styles.storyParagraph}>{sprookje.auteur}</p>
          <p className={styles.storyParagraph}>{sprookje.Genre}</p>
          <a className={styles.buttonFooter} href={`/making-of/${sprookje.id}`}>
            Lees minder
          </a>
        </div>
      </div>
      <div className={styles.extraInfo}>
        <h2>Extra info</h2>
        <div className={styles.images}>
          <img src={sprookje.extraInfoPic1} alt="" />
          <img src={sprookje.extraInfoPic2} alt="" />
          <img src={sprookje.extraInfoPic3} alt="" />
        </div>
        <div className={styles.extraInfoText}>
          <p>{sprookje.extraInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default MakingOfMeer;

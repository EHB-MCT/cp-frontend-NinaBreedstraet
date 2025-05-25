import styles from "../Pages/Styles.module.scss";
import { useParams } from "react-router";
import { useFairytaleCards } from "../hooks/useFairyTales";

function MakingOfMeer() {
  const { id } = useParams();
  const { data } = useFairytaleCards();

  const sprookje = data.find((item) => item.id === id);

  if (!sprookje) {
    return <div>Sprookje niet gevonden!</div>;
  }
  return (
    <div className={styles.containerMakingOf}>
      <h2>Making off</h2>
      <div
        className={styles.header}
        style={{
          backgroundImage: `url(${sprookje.imgBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "76.8rem",
          height: "25rem",
          overflow: "hidden",
          backgroundColor: "green",
        }}
      >
        <div className={styles.nameAndTitle}>
          <h1 className={styles.title}>{sprookje.fairytale}</h1>
          <p className={styles.name}>{sprookje.nameStudent}</p>
        </div>
      </div>
      <div className={styles.story}>
        <div>
          <h3 className={styles.storyTitle}>Verhaal</h3>
          <p className={styles.storyParagraph}>{sprookje.description}</p>
          <h3 className={styles.storyTitle}>Parallax</h3>
          <p className={styles.storyParagraph}>{sprookje.parallaxInfo}</p>
          <h3 className={styles.storyTitle}>Auteur</h3>
          <p className={styles.storyParagraph}>{sprookje.fairytaleAuthor}</p>
          <h3 className={styles.storyTitle}>Genre</h3>
          <p className={styles.storyParagraph}>{sprookje.genre}</p>
          <a
            className={styles.buttonFooter}
            href={`/cp-frontend-NinaBreedstraet/making-of/${sprookje.id}`}
          >
            Lees minder
          </a>
        </div>
      </div>
      <div className={styles.extraInfo}>
        <h2>Extra info</h2>
        <div className={styles.images}>
          <img src={sprookje.imgsExtra[0]} alt="" />
          <img src={sprookje.imgsExtra[1]} alt="" />
          <img src={sprookje.imgsExtra[2]} alt="" />
        </div>
        <div className={styles.extraInfoText}>
          <p>{sprookje.imgsInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default MakingOfMeer;

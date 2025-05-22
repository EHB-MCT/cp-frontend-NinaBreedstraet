import styles from "../Pages/Styles.module.scss";
import { IoEyeOutline } from "react-icons/io5";
import { useParams } from "react-router";
import { useFairytaleCards } from "../hooks/useFairyTales";
import { FiSearch } from "react-icons/fi";

function MakingOf() {
  const { data } = useFairytaleCards();

  const { id } = useParams();
  const sprookje = data.find((item) => item.id === id);

  if (!sprookje) {
    return <div>Sprookje niet gevonden!</div>;
  }

  const icon = FiSearch({ size: 24, color: "black" });

  return (
    <div className={styles.containerMakingOf}>
      <a className={styles.searchIcon} href="/cp-frontend-NinaBreedstraet/home">
        {icon}
      </a>
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
          <h3 className={styles.storyTitle}>Auteur</h3>
          <p className={styles.storyParagraph}>{sprookje.storyFrom}</p>
          <p className={styles.storyParagraph}>{sprookje.genre}</p>
          <a
            className={styles.buttonFooter}
            href={`/cp-frontend-NinaBreedstraet/making-of-meer/${sprookje.id}`}
          >
            Lees meer
          </a>
        </div>

        <div className={styles.pictureLink}>
          <img src={sprookje.imgsExtra[3]} className={styles.pictures} alt="" />
          <a href={sprookje.link}>{IoEyeOutline({})} View Website</a>
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
          <p>{sprookje.extraInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default MakingOf;

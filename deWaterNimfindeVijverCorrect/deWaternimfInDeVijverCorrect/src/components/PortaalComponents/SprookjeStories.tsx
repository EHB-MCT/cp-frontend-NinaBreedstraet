import styles from "../../Pages/Styles.module.scss";

type SprookjeContentProps = {
  name: String;
  genre: String;
  title: String;
  img: string;
  link: string;
};

function SprookjeStories({
  name,
  title,
  genre,
  img,
  link,
}: SprookjeContentProps) {
  return (
    <div className={styles.sprookjeStories}>
      <div className={styles.imgSprookje}>
        <img src={img} alt="Sprookje" />
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.nameSprookje}>{name}</h1>
          <p className={styles.titleSprookje}>{title}</p>
          <p className={styles.genreSprookje}>{genre}</p>
        </div>
        <div className={styles.link}>
          <a href={link}>&rarr;</a>
        </div>
      </div>
    </div>
  );
}

export default SprookjeStories;

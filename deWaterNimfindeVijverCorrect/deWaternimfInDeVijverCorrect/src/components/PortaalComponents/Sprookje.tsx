import styles from "../../Pages/Styles.module.scss";

type SprookjeContentProps = {
  img: string;
  name: String;
  genre: String;
  title: String;
};

function Sprookje({ name, title, genre, img }: SprookjeContentProps) {
  return (
    <div className={styles.sprookje}>
      <img className={styles.imgSprookje} src={img} alt="Sprookje" />
      <h1 className={styles.nameSprookje}>{name}</h1>
      <p className={styles.titleSprookje}>{title}</p>
      <p className={styles.genreSprookje}>{genre}</p>
    </div>
  );
}

export default Sprookje;

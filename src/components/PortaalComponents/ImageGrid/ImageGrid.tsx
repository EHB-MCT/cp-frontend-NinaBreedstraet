import ImageTile from "./ImageTile";
import styles from "./ImageTile.module.scss";

const images = [
  {
    src: "/ImageSchool1.jpeg",
    shape: styles.roundedBottomLeftLarge,
    x: 18,
    y: 55,
    size: 7.5,
  },
  {
    src: "/ImageSchool2.jpeg",
    shape: styles.roundedTopLeftLarge,
    x: 43,
    y: 25,
    size: 11,
  },
  {
    src: "/ImageSchool3.jpeg",
    shape: styles.roundedTopRightLarge,
    x: 45,
    y: 55,
    size: 9,
  },
  {
    src: "/ImageSchool4.jpeg",
    shape: styles.roundedFull,
    x: 70,
    y: 10,
    size: 8,
  },
  {
    src: "/ImageSchool5.jpeg",
    shape: styles.roundedBottomRightLarge,
    x: 45,
    y: 81,
    size: 7,
  },
  {
    src: "/ImageSchool6.jpeg",
    shape: styles.roundedTopLeftLarge,
    x: 20,
    y: 81,
    size: 8,
  },
  {
    src: "/ImageSchool7.jpeg",
    shape: styles.roundedTopRightLarge,
    x: 71,
    y: 37,
    size: 8.5,
  },
  {
    src: "/ImageSchool8.jpg",
    shape: styles.roundedBottomRightLarge,
    x: 72,
    y: 64,
    size: 8.8,
  },
];

export default function ImageGrid() {
  return (
    <div className={styles.gridContainer}>
      {images.map((img, i) => (
        <ImageTile
          key={i}
          src={img.src}
          shape={img.shape}
          size={img.size}
          style={{
            position: "absolute",
            top: `${img.y}%`,
            left: `${img.x}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}

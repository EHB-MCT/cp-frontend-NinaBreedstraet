import { motion } from "framer-motion";
import styles from "./ImageTile.module.scss";

type ImageTileProps = {
  src: string;
  shape?: string;
  style?: React.CSSProperties;
  size?: number;
};

export default function ImageTile({
  src,
  shape = "",
  style = {},
  size = 10,
}: ImageTileProps) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transformTemplate={({ scale }) => `translate(-50%, -50%) scale(${scale})`}
      className={`${styles.tile} ${shape}`}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        overflow: "hidden",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        ...style,
      }}
    >
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
}

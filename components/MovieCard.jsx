import Image from "next/image";
import styles from "../styles/MovieCard.module.css";

const MovieCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/i03_Troll2.jpg" alt="" width="400" height="500" />
      <h1 className={styles.title}>Movie title</h1>
      <span className={styles.genre}>Genre:</span>
      <p className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, eum
        facere.
      </p>
    </div>
  );
};

export default MovieCard;

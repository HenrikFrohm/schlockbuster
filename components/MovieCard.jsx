import Image from "next/image";
import styles from "../styles/MovieCard.module.css";
import Link from "next/link";

//using prop to fetch data from mongodb for title, genre and more.
const MovieCard = ({ movie }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${movie._id}`} passHref>
        <Image src={movie.img} alt="" width="400" height="500" />
      </Link>
      <h1 className={styles.title}>{movie.title}</h1>
      <span className={styles.price}>€{movie.prices[0]}</span>
      <span className={styles.genre}>{movie.genre}</span>
      <p className={styles.description}>{movie.description}</p>
    </div>
  );
};

export default MovieCard;

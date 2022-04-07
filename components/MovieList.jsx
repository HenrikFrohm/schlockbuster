import styles from "../styles/MovieList.module.css";
import Image from "next/image";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured movies</h1>
      <div className={styles.wrapper}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieList;

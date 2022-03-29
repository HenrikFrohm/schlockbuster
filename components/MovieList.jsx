import styles from "../styles/MovieList.module.css";
import Image from "next/image";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Movie list</h1>
      <p className={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, eum
        facere. Numquam omnis voluptates consectetur pariatur mollitia odit
        alias cupiditate, sint, modi dignissimos laboriosam dolorum possimus
        corrupti excepturi aspernatur distinctio.
      </p>
      <div className={styles.wrapper}>
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

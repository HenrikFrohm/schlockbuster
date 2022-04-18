import styles from "../styles/MovieList.module.css";
import MovieCard from "./MovieCard";

//using movielist prop to fetch movie data
const MovieList = ({ movieList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured movies</h1>
      {/* wrapper  */}
      <div className={styles.wrapper}>
        {movieList.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
        {/*  <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard /> */}
      </div>
    </div>
  );
};

export default MovieList;

import axios from "axios";
import Head from "next/head";

import { useEffect } from "react";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import styles from "../styles/Home.module.css";

export default function Home({ movieList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Schlockbuster</title>
        <meta name="description" content="A hub for all b-movie lovers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <MovieList movieList={movieList} />
      {/*      <Image src="/img/poster.jpg" alt="Poster" layout="fill" /> */}
    </div>
  );
}
//used for server-side rendering to fetch data on every request. Will execute when building the application.
//Instead of getting props from parent component they will be recieved via this function. Props that are returned from this function will be recieved by the component.
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  //pass data to pages/components via props
  return {
    props: {
      movieList: res.data,
    },
  };
};

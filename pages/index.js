import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/Carousel";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Schlockbuster</title>
        <meta name="description" content="A hub for all b-movie lovers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      {/*      <Image src="/img/poster.jpg" alt="Poster" layout="fill" /> */}
    </div>
  );
}

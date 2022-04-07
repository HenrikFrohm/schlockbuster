import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/poster.jpg" objectFit="contain" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.logo}>SCHLOCKBUSTER</h1>
          <p className={styles.logoDescription}>
            Remember a time when you could actually hold a physical copy of a
            VHS or DVD? Schockbuster got you covered; it is a platform for
            people around the world looking for new and old b-movies to rent or
            buy.
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>EXPLORE</h1>
          <p className={styles.link}>ABOUT</p>
          <p className={styles.link}>GENRES</p>
          <p className={styles.link}>CONTACT</p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FOLLOW US</h1>
          <p className={styles.link}>TWITTER</p>
          <p className={styles.link}>FACEBOOK</p>
          <p className={styles.link}>INSTAGRAM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

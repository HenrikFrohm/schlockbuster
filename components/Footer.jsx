import React from "react";
import Image from "next/image";
import Link from "next/link";
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
            people around the world looking for new and old b-movies to buy.
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>CONTACT</h1>
          <p className={styles.info}>
            <strong>Phone:</strong> <br /> 070712345
          </p>
          <p className={styles.info}>
            <strong>Email:</strong> <br /> schlockbuster.support@gmail.com
          </p>
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

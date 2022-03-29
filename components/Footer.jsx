import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Footer</h2>
      <p className={styles.description}>Footer description</p>
      <div className={styles.wrapper}>
        <div className={styles.footerItem}>Item</div>
        <div className={styles.footerItem}>Item</div>
        <div className={styles.footerItem}>Item</div>
        <div className={styles.footerItem}>Item</div>
        <div className={styles.footerItem}>Item</div>
        <div className={styles.footerItem}>Item</div>
      </div>
    </div>
  );
};

export default Footer;

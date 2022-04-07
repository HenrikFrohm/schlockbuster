import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const [size, setSize] = useState(0);
  const movie = {
    id: 1,
    img: "/img/i03_Troll2.jpg",
    title: "Troll 2",
    genre: "Horror/Comedy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, illum nisi quo optio reprehenderit odio et aliquam suscipit consectetur ipsam deleniti debitis voluptas quam incidunt dignissimos repudiandae quis cum neque.",
    priceRent: [2, 4],
    priceBuy: [4, 8],
    /*    priceVHS: [2, 4],
    priceDVD: [4, 8], */
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={movie.img}
            alt=""
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.genre}>Genre: {movie.genre}</p>
        <p className={styles.description}>Description: {movie.description}</p>
        <span className={styles.priceRent}>Rent: €{movie.priceRent[size]}</span>
        <br />
        <span className={styles.priceBuy}>Buy: €{movie.priceBuy[size]}</span>
        <h3 className={styles.options}>Choose video platform</h3>
        <div className={styles.platform}>
          <p className={styles.platformDesc}>VHS</p>
          <Image
            src="/img/vhs.png"
            alt="VHS option"
            width="50px"
            height="50px"
          />
        </div>
        <div className={styles.platform}>
          <p className={styles.platformDesc}>DVD</p>
          <Image
            src="/img/dvd.png"
            alt="DVD option"
            width="50px"
            height="50px"
          />
        </div>
        <div className={styles.platform}>
          <p className={styles.platformDesc}>Bluray</p>
          <Image
            src="/img/bluray.ico"
            alt="DVD option"
            width="50px"
            height="50px"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;

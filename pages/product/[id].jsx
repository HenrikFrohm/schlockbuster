import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";

// array for movie details and options
const Product = () => {
  // using useState/state hook to change value/price when different platforms are picked
  const [price, setPrice] = useState(0);
  const movie = {
    id: 1,
    img: "/img/i03_Troll2.jpg",
    title: "Troll 2",
    genre: "Horror/Comedy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, illum nisi quo optio reprehenderit odio et aliquam suscipit consectetur ipsam deleniti debitis voluptas quam incidunt dignissimos repudiandae quis cum neque.",
    priceRent: [2, 3, 4],
    priceBuy: [4, 5, 6],
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={movie.img}
            alt="Movie Image"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.genre}>Genre: {movie.genre}</p>
        <p className={styles.description}>Description: {movie.description}</p>
        <span className={styles.priceRent}>
          {/* defaults to first num for the two objects in the array, changing when different video platform option gets picked */}
          Rent: {movie.priceRent[price]}€
        </span>
        <br />
        <span className={styles.priceBuy}>Buy: {movie.priceBuy[price]}€</span>
        <h4>Choose video platform</h4>
        <div className={styles.options}>
          {/* onclick event, lettings users pick movie platform. Default (0) is VHS. */}
          <div className={styles.platform} onClick={() => setPrice(0)}>
            VHS
            <Image
              src="/img/vhs.png"
              alt="VHS option"
              width="50px"
              height="50px"
            />
          </div>
          <div className={styles.platform} onClick={() => setPrice(1)}>
            DVD
            <Image
              src="/img/dvd.png"
              alt="DVD option"
              width="50px"
              height="50px"
            />
          </div>
          <div className={styles.platform} onClick={() => setPrice(2)}>
            Bluray
            <Image
              src="/img/bluray.ico"
              alt="Bluray option"
              width="50px"
              height="50px"
            />
          </div>
        </div>
        <div className={styles.add}>
          <input className={styles.quantity} type="number" defaultValue={1} />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";

// array for movie details and options
const Product = ({ movie }) => {
  // using useState/state hook to change value/price when different platforms are picked
  const [price, setPrice] = useState(0);

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
        <p className={styles.genre}>{movie.genre}</p>
        <p className={styles.description}>{movie.description}</p>
        <span className={styles.priceRent}>
          {/* defaults to first num for the two objects in the array, changing when different video platform option gets picked */}
          <strong> Rent: {movie.priceRent[price]}€</strong>
        </span>
        <br />
        <span className={styles.priceBuy}>
          <strong> Buy: {movie.priceBuy[price]}€</strong>
        </span>
        <h4>Choose video platform</h4>
        <div className={styles.options}>
          {/* onclick event, lettings users pick movie platform. Default (0) is VHS. */}
          <div className={styles.platform} onClick={() => setPrice(0)}>
            VHS&nbsp;
            <Image
              src="/img/vhs.png"
              alt="VHS option"
              width="50px"
              height="50px"
            />
          </div>
          <div className={styles.platform} onClick={() => setPrice(1)}>
            DVD&nbsp;
            <Image
              src="/img/dvd.png"
              alt="DVD option"
              width="50px"
              height="50px"
            />
          </div>
          <div className={styles.platform} onClick={() => setPrice(2)}>
            BLURAY&nbsp;
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

export const getServerSideProps = async (params) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params}`);
  //pass data to pages/components via props
  return {
    props: {
      movie: res.data,
    },
  };
};

export default Product;

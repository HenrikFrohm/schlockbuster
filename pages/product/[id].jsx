import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

// array for movie details and options
const Product = ({ movie }) => {
  // useState to get the price for the movie from db
  const [price, setPrice] = useState(movie.prices[0]);
  // useState to start at the first platform option for the movie from db
  const [platform, setPlatform] = useState(0);
  //useState to set default value for quantity to 1
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  //calculate price with chosen quantity and add to current value
  const changePrice = (number) => {
    setPrice(price + number);
  };

  //function to correctly update price when platform option is choosed
  const handlePlatform = (platformIndex) => {
    const difference = movie.prices[platformIndex] - movie.prices[platform];
    setPlatform(platformIndex);
    changePrice(difference);
  };

  //dispatch cart actions onclick
  const handleClick = () => {
    dispatch(addProduct({ ...movie, price, quantity }));
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
        <p className={styles.genre}>{movie.genre}</p>
        <p className={styles.description}>{movie.description}</p>
        <span className={styles.price}>
          {/* defaults to first num for the two objects in the array, changing when different video platform option gets picked */}
          <strong> Price: €{price}</strong>
        </span>
        <h4>Choose video platform</h4>
        <div className={styles.platforms}>
          {/* onclick event to run handlePlatform function. Default (0) is the VHS option. */}
          <div className={styles.platform} onClick={() => handlePlatform(0)}>
            <Image
              src="/img/vhs.png"
              alt="VHS option"
              width="50px"
              height="50px"
            />
            <span className={styles.option}>VHS</span>
          </div>
          <div className={styles.platform} onClick={() => handlePlatform(1)}>
            <Image
              src="/img/dvd.png"
              alt="DVD option"
              width="50px"
              height="50px"
            />
            <span className={styles.option}>DVD</span>
          </div>
          <div className={styles.platform} onClick={() => handlePlatform(2)}>
            <Image
              src="/img/bluray.ico"
              alt="Bluray option"
              width="50px"
              height="50px"
            />
            <span className={styles.option}>BLURAY</span>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  //pass data to pages/components via props
  return {
    props: {
      movie: res.data,
    },
  };
};

export default Product;

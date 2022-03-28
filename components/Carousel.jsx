import Image from "next/image";
import styles from "../styles/Carousel.module.css";
import { useState } from "react";

const Carousel = () => {
  // useState hook to set index, starting with first image.
  const [index, setIndex] = useState(0);
  // array for images to avoid repeating code.
  const featuredImages = [
    "/img/poster.jpg",
    "/img/poster3.jpg",
    "/img/poster.jpg",
  ];

  // conditional function to set index correctly when onclick event for right or left arrow is triggered, showing images in correct order.
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    // manually creating a carousel slideshow component for homepage, with parent container containing child containers for arrows and images.
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" />
      </div>
      {/* css function to reposition element horizontally at correct size when onclick event is executed */}
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {/* map function to access array images. Using index as key for each child */}
        {featuredImages.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image src="/img/arrowr.png" alt="" layout="fill" objectFit="contain" />
      </div>
      {/* 
      <div className={styles.textContainer}>
        <div className={styles.texts}>
          <div className={styles.text}>Movie</div>
          <div className={styles.text}>Description</div>
        </div>
      </div>
      */}
    </div>
  );
};

export default Carousel;

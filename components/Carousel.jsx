import Image from "next/image";
import styles from "../styles/Carousel.module.css";
import { useState } from "react";
import {
  ArrowBackOutline,
  ArrowForwardOutline,
  ArrowDownCircleOutline,
} from "react-ionicons";

const Carousel = () => {
  // useState hook to set index, starting with first image.
  const [index, setIndex] = useState(0);
  // array for images to avoid repeating code.
  const featuredImages = [
    "/img/Sharknado.jpg",
    "/img/i02_TheBlob.jpg",
    "/img/i01_TheRoom.jpg",
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
  //scroll to bottom of homepage after clicking "more info" button
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    // manually creating a carousel slideshow component for homepage, with parent container containing child containers for arrows and images.
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 210 }}
        onClick={() => handleArrow("l")}
      >
        <ArrowBackOutline alt="" height="50px" width="50px" color="#b7903c" />
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
        style={{ right: 180 }}
        onClick={() => handleArrow("r")}
      >
        <ArrowForwardOutline
          alt=""
          height="50px"
          width="50px"
          color="#b7903c"
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Schlockbuster</h1>
        <p className={styles.description}>
          Welcome to Schlockbuster, a platform for the finest b-movies in the
          world. <br /> Here you can get a snippet of what is on offer.
        </p>
        <div className={styles.info}>
          <strong>Explore featured movies below</strong>
          <button
            type="button"
            onClick={handleScroll}
            className={styles.infoButton}
          >
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import React from "react";
import Image from "next/image";
import styles from "../styles/Carousel.module.css";
import { ArrowBack, ArrowForward, Images } from "react-ionicons";

const Carousel = () => {
  // array for images to avoid repeating code
  const featuredImages = [
    "/img/poster.jpg",
    "/img/poster2.jpg",
    "/img/poster3.jpg",
  ];

  return (
    <div className="styles.container">
      <ArrowBack height="35px" width="35px" />
      <div className="styles.wrapper">
        <div className="styles.imgContainer">
          {/* map function to access array images. Using index as key for each child */}
          {featuredImages.map((img, i) => (
            <Image
              src="/img/poster.jpg"
              key={i}
              alt=""
              layout="fill"
              objectFit="contain"
            />
          ))}
        </div>
      </div>
      <ArrowForward height="35px" width="35px" />
    </div>
  );
};

export default Carousel;

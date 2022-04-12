import React from "react";
import Image from "next/image";
import styles from "../styles/shoppingcart.module.css";

const shoppingcart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* table with one header- and one data row */}
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Title</th>
            <th>Video Platform</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/i03_Troll2.jpg"
                  alt="Movie Image"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </td>
            <td>
              <span className={styles.title}>Troll 2</span>
            </td>
            <td>
              <span className={styles.platform}>DVD</span>
            </td>
            <td>
              <span className={styles.price}>€3</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>€6</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/i01_TheRoom.jpg"
                  alt="Movie Image"
                  layout="fill"
                  objectFit="cover"
                ></Image>
              </div>
            </td>
            <td>
              <span className={styles.title}>The Room</span>
            </td>
            <td>
              <span className={styles.platform}>Bluray</span>
            </td>
            <td>
              <span className={styles.price}>€6</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>€18</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.totalTitle}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>€24
          </div>
          <button className={styles.button}>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default shoppingcart;

import React from "react";
import Image from "next/image";
import styles from "../../styles/Order.module.css";

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.orderRow}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Adress</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>15235234</span>
              </td>
              <td>
                <span className={styles.name}>DVD</span>
              </td>
              <td>
                <span className={styles.adress}>€3</span>
              </td>
              <td>
                <span className={styles.total}>€6</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.statusRow}></div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.totalTitle}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>€24
          </div>
          <button className={styles.button} disabled>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;

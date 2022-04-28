import React from "react";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.trTitle}>
              <td>
                <Image
                  src="/img/i03_Troll2.jpg"
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt=""
                />
              </td>
              <td>MovieId</td>
              <td>MovieTitle</td>
              <td>€50</td>
              <td>
                <button className={styles.button}>Edit</button>
                <button className={styles.button}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.trTitle}>
              <td>3123132</td>
              <td>Rich Evans</td>
              <td>€50</td>
              <td>paid</td>
              <td>preparing</td>
              <td>€50</td>
              <td>
                <button>Next stage</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;

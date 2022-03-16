import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { CartOutline } from "react-ionicons";

const Navbar = () => {
  return (
    // main container for navbar
    <div className={styles.container}>
      <div className={styles.itemLeft}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Need help?</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.itemCenter}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <div className={styles.logoText}>SCHLOCKBUSTER</div>
          {/*  <Image src="/img/logo.png" alt="" width="160px" height="69px" /> */}
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.itemRight}>
        <div className={styles.cart}>
          <CartOutline height="25px" width="25px" />
          {/*  <Image src="/img/cart.png" alt="" width="30px" height="30px" /> */}
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

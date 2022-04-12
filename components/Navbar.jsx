import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { CartOutline } from "react-ionicons";
import { MenuOutlined, Close } from "@material-ui/icons";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className={styles.container}>
      <div className={styles.menuIcon}>
        <MenuOutlined className={styles.menu} onClick={showMenu} />
      </div>

      <nav className={active ? styles["slider.active"] : styles["slider"]}>
        <ul className={styles.ul}>
          <div className={styles.closed}>
            <Close className={styles.close} onClick={showMenu} />
          </div>
          <li className={styles.li}>
            <h2 className={styles.name}>
              <Link href="/">Schlockbuster </Link>
            </h2>
          </li>
          <li className={styles.li}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">Genres</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">Community</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">About</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">Contact</Link>
          </li>
          <li className={styles.li}>
            <div className={styles.cart}>
              <CartOutline height="25px" width="25px" color="white" />
              {/*  <Image src="/img/cart.png" alt="" width="30px" height="30px" /> */}
              <div className={styles.counter}>2</div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

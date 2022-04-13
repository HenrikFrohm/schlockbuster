import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { CartOutline } from "react-ionicons";
import { MenuOutlined, Close } from "@material-ui/icons";

const Navbar = () => {
  // useState for when hamburger menu will open or not.
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className={styles.container}>
      <div className={styles.menuIcon}>
        <MenuOutlined className={styles.menu} onClick={showMenu} />
      </div>
      {/* if it's active show styles for slider active class, if not just show styles for slider class */}
      <nav className={active ? styles["slider.active"] : styles["slider"]}>
        <ul className={styles.ul}>
          <div className={styles.logo}>
            <Link href="/">SCHLOCKBUSTER </Link>
          </div>
          {/*           <div className={styles.closed}>
            <Close className={styles.close} onClick={showMenu} />
          </div> */}
          <li className={styles.li}>
            <Link href="/">HOME</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">GENRES</Link>
          </li>
          <li className={styles.li}>
            <Link href="/Community">COMMUNITY</Link>
          </li>
          <li className={styles.li}>
            <Link href="/About">ABOUT</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">CONTACT</Link>
          </li>
          <div className={styles.cart}>
            <CartOutline height="25px" width="25px" color="white" />
            {/*  <Image src="/img/cart.png" alt="" width="30px" height="30px" /> */}
            <div className={styles.counter}>2</div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

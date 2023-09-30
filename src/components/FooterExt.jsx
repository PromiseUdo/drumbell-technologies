import React from "react";
import styles from "../styles/FooterExt.module.scss";
import Footer from "./Footer";
import Link from "next/link";

const FooterExt = () => {
  return (
    <div className={styles.footer_ext}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_col}>
          <ul>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <span>&copy; Drumbell Technologies 2023</span>
      </div>
    </div>
  );
};

export default FooterExt;

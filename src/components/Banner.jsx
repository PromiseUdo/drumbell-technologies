import React from "react";
import styles from "../styles/Banner.module.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbBrandInstagram,
} from "react-icons/tb";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        {/* <div className={styles.support}>
          <Link href="#" className={styles.link}>
            <span>Contact Us</span>
            <MdKeyboardArrowRight />
          </Link>
        </div> */}
        <div className={styles.contact}>
          <div className={styles.location}>
            <IoLocationOutline />
            <span>United Kingdom</span>
          </div>
          <div className={styles.phone}>
            <BsTelephone />
            <span>+44 7899 365494</span>
          </div>
          <div className={styles.socials}>
            <Link href="#">
              <TbBrandFacebook />
            </Link>
            <Link href="#">
              <TbBrandTwitter />
            </Link>
            <Link href="#">
              <TbBrandInstagram />
            </Link>
            <Link href="#">
              <TbBrandLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

"use client";
import styles from "../styles/Navbar.module.scss";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useOnClickOutside from "@/hooks/ClickOut";
const Navbar = ({ setMode, mode }) => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNav = useRef(null);
  useOnClickOutside(mobileNav, () => setIsActive(false));

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${styles.outer} ${isScrolled ? styles.scrolled : undefined}`}
    >
      <div className={styles.container}>
        <nav className={styles.inner}>
          {/* left side */}
          <div className={styles.me}>
            <Link href="/">
              <span>Drumbell Technologies</span>
              <div className={styles.profile}>
                <div className={styles.imgBorder}>{/* <Image /> */}</div>
                <div className={styles.border}></div>
              </div>
            </Link>
          </div>
          {/* right side */}
          <ul className={styles.nav_list}>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Our Strategy</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <div className={styles.mobile}>
              <button onClick={() => setIsActive(true)}>
                <FaBars />
              </button>
            </div>
            <button
              className={`${styles.mode} ${!mode ? styles.light : ""}`}
              onClick={() => setMode(!mode)}
            >
              {mode ? <BsSun /> : <BsMoon />}
            </button>
          </ul>
        </nav>
      </div>
      {/* Mobile Nav */}
      <div
        className={`${styles.mobileNav} ${
          isActive ? undefined : styles.notActive
        }`}
        ref={mobileNav}
      >
        <nav ref={mobileNav}>
          {" "}
          {isActive && (
            <ul className={styles.mobileNavList}>
              <div className={styles.close}>
                <div className={styles.me}>
                  <Link href="/">
                    <span>Drumbell Technologies</span>
                    <div className={styles.profile}>
                      <div className={styles.imgBorder}>{/* Image */}</div>
                      <div className={styles.border}></div>
                    </div>
                  </Link>
                </div>
                {/* close button */}
                <button onClick={() => setIsActive(false)}>
                  <FaTimes />
                </button>
              </div>

              {/* Links */}

              <li onClick={() => setIsActive(false)}>
                <Link href="/">About Us</Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="/">Our Method</Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="/">Services</Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="/">Products</Link>
              </li>
              <li onClick={() => setIsActive(false)}>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

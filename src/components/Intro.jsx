import React from "react";
import Section from "./Section";
import styles from "../styles/Intro.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const Intro = () => {
  return (
    <Section className={styles.padding} id="">
      <div className={styles.container}>
        <div className={styles.info}>
          <h1>
            IT Solutions <br />
            Agency
          </h1>
          <p>
            We help our clients succeed by creating perfect digital products and
            experiences.
          </p>
          <div className={styles.actions}>
            <Link href="#strategy" className={styles.customer}>
              <span>Our Strategy</span>
              <FaArrowRight />
            </Link>
            <Link href="#contact" className={styles.contact}>
              <span>Contact Us</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className={styles.illustration}>
          <Image
            alt="page illustration"
            objectFit="contain"
            layout="responsive"
            src="/intro.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </div>
      </div>
    </Section>
  );
};

export default Intro;

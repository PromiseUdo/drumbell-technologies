import styles from "../styles/BlogIntro.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Section from "@/components/Section";
const BlogIntro = ({ title }) => {
  return (
    <Section className={styles.padding} id="">
      <div className={styles.container}>
        <div className={styles.info}>
          <h1>Blog</h1>
          <p>{title}</p>
        </div>
      </div>
    </Section>
  );
};

export default BlogIntro;

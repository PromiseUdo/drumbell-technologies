import styles from "../styles/About.module.scss";
import Section from "./Section";
import Image from "next/image";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Fade, JackInTheBox } from "react-awesome-reveal";
const About = ({ mode }) => {
  const [parent] = useAutoAnimate();

  return (
    <Section
      subtitle="About Us"
      title="Get To Know Us"
      description="Excellence is our watch-word. We believe in producing high quality results."
      id="about"
    >
      <div className={styles.container}>
        <div className={styles.description}>
          {/* <h3>This is who we are</h3> */}
          <p>
            At Drumbell Technologies, we are your dedicated partners in the
            ever-evolving realm of technology. With a passion for innovation and
            a commitment to excellence, we provide tailored IT solutions that
            empower businesses to thrive in the digital age.
          </p>
          <p>
            Our team of seasoned professionals brings a wealth of experience,
            ensuring that every project we undertake is executed with precision
            and creativity. From cutting-edge app development to robust
            cybersecurity solutions, we&apos;re here to fuel your success in the
            digital landscape.
          </p>

          <p>
            We stand ready to transform your technology challenges into
            opportunities for growth. Your vision is our mission, and we&apos;re
            excited to be your trusted IT solution provider.
          </p>
        </div>
        <div className={styles.images} ref={parent}>
          {mode ? (
            <Image
              //   width="100%"
              //   height="100%"
              //   sizes="100vw"
              //   style={{ width: "100%", height: "auto" }} // optional
              objectFit="contain"
              layout="fill"
              src="/solution.png"
            />
          ) : (
            <Image
              //   width="100%"
              //   height="100%"
              //   sizes="100vw"
              //   style={{ width: "100%", height: "auto" }} // optional
              objectFit="contain"
              layout="fill"
              src="/solution_dark.png"
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default About;

import { Fade } from "react-awesome-reveal";
import styles from "../styles/Services.module.scss";
import Section from "./Section";
import Image from "next/image";

const Service = ({ line, background, image, title, description }) => {
  return (
    <div className={styles.service}>
      <div className={styles.circle} style={{ background: background }}>
        {/* <span style={{ color: color }}>{number}</span> */}
        <Image
          alt="page illustration"
          objectFit="center"
          height="50"
          width="50"
          src={image}
        />
        {/* {line ? <div className={styles.line}></div> : null} */}
      </div>
      <div className={styles.title}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

Service.defaultProps = {
  line: true,
  background: "var(--color-dark)",
  title: "App Development",
  description: "Web and Mobile Apps to drive your business goals",
};

const Services = () => {
  return (
    <Section
      title="Services provided for you."
      subtitle="We Can Do Everything."
      description="Trust us to deliver every project with high quality"
      id="services"
    >
      <div className={styles.container}>
        {/* <Fade cascade damping={0.05}> */}
        <Service image="/services/development.png" />
        <Service
          // background="var(--color-secondary-dark)"
          image="/services/cybersecurity.png"
          title="Cyber Security Analysis"
          description="Analysis of your computer networks and provide robust security"
        />
        <Service
          // background="var(--color-tertiary-dark)"
          title="Penetration Testing"
          image="/services/penetration.png"
          description="Boots your network security, uncover loopholes in networks"
        />
        <Service
          line={false}
          // background="var(--color-pink-dark)"
          image="/services/marketing.png"
          title="Digital Marketing"
          description="Reach out your online audience with well-crafted media strategies"
        />
        {/* </Fade> */}
      </div>
    </Section>
  );
};

export default Services;

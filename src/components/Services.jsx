import { Fade } from "react-awesome-reveal";
import styles from "../styles/Services.module.scss";
import Section from "./Section";

const Service = ({ line, number, background, color, title, description }) => {
  return (
    <div className={styles.service}>
      <div className={styles.circle} style={{ background: background }}>
        <span style={{ color: color }}>{number}</span>
        {line ? <div className={styles.line}></div> : null}
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
  number: 1,
  color: "var(--color-primary)",
  background: "var(--color-primary-dark)",
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
        <Service number={1} />
        <Service
          number={2}
          background="var(--color-secondary-dark)"
          color="var(--color-secondary)"
          title="Cyber Security Analysis"
          description="Analysis of your computer networks and provide robust security"
        />
        <Service
          number={3}
          background="var(--color-tertiary-dark)"
          color="var(--color-tertiary)"
          title="Penetration Testing"
          description="Boots your network security, uncover loopholes in networks"
        />
        <Service
          number={4}
          line={false}
          background="var(--color-pink-dark)"
          color="var(--color-pink)"
          title="Digital Marketing"
          description="Reach out your online audience with well-crafted media strategies"
        />
        {/* </Fade> */}
      </div>
    </Section>
  );
};

export default Services;

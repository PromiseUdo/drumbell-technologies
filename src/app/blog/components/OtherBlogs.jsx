import Section from "@/components/Section";
import styles from "../styles/OtherBlogs.module.scss";
import { AiOutlineLink } from "react-icons/ai";

const postsData = [
  {
    id: 1,
    link: "/blog/cybersecurity-best-practices-for-small-businesses",
    title: " Cybersecurity Best Practices for Small Businesses",
    description: "",
    image: "/cybersecuritybest.jpg",
  },
  {
    id: 2,
    link: "/",
    title: "Data Backup and Disaster Recovery",
    description: "",
    image: "/datarecovery.jpg",
  },
  {
    id: 3,
    link: "/",
    title: "Embracing Cloud Computing for Scalability and Efficiency",
    description: "",
    image: "/cloudcomputing.jpg",
  },
];

const PostCard = ({ imgUrl, title, link, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
        className={styles.cardInner}
      >
        <div className={styles.overlay}>
          <a href={link} className={styles.linkWrapper}>
            <AiOutlineLink className={styles.linkIcon} />
          </a>
        </div>
      </div>
      <div className={styles.cardText}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

const OtherBlogs = () => {
  return (
    <Section
      subtitle="Blog Posts"
      title="Other Blog Posts"
      description="Subscribe to our newsletter to get notified on when we post our next content"
      id="contact"
    >
      <div className={styles.container}>
        <div className={styles.worksImgs}>
          {postsData.map((project, idx) => (
            <PostCard
              key={idx}
              link={project.link}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          ))}
        </div>
        <a href="/" className={styles.btn}>
          See More
        </a>
      </div>
    </Section>
  );
};

export default OtherBlogs;

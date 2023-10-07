import Link from "next/link";
import styles from "../styles/Blogs.module.scss";
import Section from "./Section";
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
    link: "/blog/data-backup-and-disaster-recovery",
    title: "Data Backup and Disaster Recovery",
    description: "",
    image: "/datarecovery.jpg",
  },
  {
    id: 3,
    link: "/blog/embracing-cloud-computing-for-scalability-and-efficiency",
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
          <Link href={link} className={styles.linkWrapper}>
            <AiOutlineLink className={styles.linkIcon} />
          </Link>
        </div>
      </div>
      <div className={styles.cardText}>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <Section
      subtitle="Blog Posts"
      title="Our Latest Articles"
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
        {/* <a href="/" className={styles.btn}>
          See More
        </a> */}
      </div>
    </Section>
  );
};

export default Blogs;

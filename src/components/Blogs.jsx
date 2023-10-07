import styles from "../styles/Blogs.module.scss";
import Section from "./Section";
import { AiOutlineLink } from "react-icons/ai";

const postsData = [
  {
    id: 1,
    link: "https://www.behance.net/gallery/174755889/Online-Book-Keeping-Inventory-Management-System",
    title: " Cybersecurity Best Practices for Small Businesses",
    description: "",
    image: "/cybersecuritybest.jpg",
  },
  {
    id: 2,
    link: "https://www.behance.net/gallery/181501163/logistics-admin-page?tracking_source=project_owner_other_projects",
    title: "Data Backup and Disaster Recovery",
    description: "",
    image: "/datarecovery.jpg",
  },
  {
    id: 3,
    link: "https://www.behance.net/gallery/166513147/Bank-application-for-mobile-device",
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
          <a href={link} target="_blank" className={styles.linkWrapper}>
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
        <a
          target="_blank"
          href="https://www.behance.net/4053cadfverauchenna/projects"
          className={styles.btn}
        >
          See More
        </a>
      </div>
    </Section>
  );
};

export default Blogs;

import styles from "../styles/Clients.module.scss";
import Section from "./Section";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

const Client = ({ imgSource, country, comment, name, profession }) => {
  return (
    <div className={styles.client}>
      <div className={styles.info}>
        {/* Country */}
        <div className={styles.country}>
          <div className={styles.svg}>
            <RiDoubleQuotesL />
          </div>
          <span>{country}</span>
        </div>
        {/* comment */}
        <p className={styles.comment}>{comment}</p>
        {/* name */}
        <div className={styles.who}>
          <div className={styles.name}>{name}</div>
          <div className={styles.profession}>{profession}</div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.inner}>
          <Image
            alt="clients portraits"
            objectFit="cover"
            layout="responsive"
            src={imgSource}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className={styles.border}></div>
        </div>
      </div>
    </div>
  );
};

Client.defaultProps = {
  imgSource: "/method1.jpg",
  country: "Wales",
  comment: "Drumbell Technologies is the best in IT services",
  name: "Peter West",
  profession: "Accountant",
};

const Clients = () => {
  return (
    <Section
      subtitle="Our Clients"
      title="Clients We've Worked With"
      id="clients"
    >
      <Carousel emulateTouch showThumbs={false} showStatus={false}>
        <Client
          imgSource={"/person1.jpg"}
          country={"Nigeria"}
          profession={"Accountant"}
          name={"Bisola Kehinde"}
        />
        <Client
          imgSource={"/person2.jpg"}
          country={"Wales"}
          profession={"Youtuber"}
          name={"Patrick West"}
        />
        <Client
          imgSource={"/person3.jpg"}
          country={"Nigeria"}
          profession={"Dietician"}
          name={"Ezra Jemimah"}
        />
      </Carousel>
    </Section>
  );
};

export default Clients;

import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import Section from "./Section";

const Services = [
  "App Development",
  "Cyber Security Analysis",
  "Penetration Testing",
  "Digital Marketing",
];
const Products = ["Parott.io", "Drumbell.org"];

const Footer = () => {
  return (
    <footer className={styles.footer_outer}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_col}>
          <div className={styles.footer_me}>
            <Link href="/">
              <span>Drumbell Technologies</span>
            </Link>
          </div>
          <p className={styles.footer_desc}>
            Drumbell Technologies is a software development and IT Solutions
            Agency. We are committed to delivery high-quality results to drive
            your success.
          </p>
        </div>
        <div className={styles.footer_col}>
          <ul>
            <li className={styles.footer_title}>Services</li>
            {Services.map((service, idx) => (
              <li>
                <Link href="#services" key={idx}>
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* </div> */}
        {/* <div className={styles.footer_inner}> */}
        <div className={styles.footer_col}>
          <ul>
            <li className={styles.footer_title}>Products</li>
            <li>
              <a target="_blank" href="https://parott.io">
                Parott.io
              </a>
            </li>
            <li>
              <a target="_blank" href="https://drumbell.org">
                Drumbell Advocacy
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_col}>
          <div className={styles.footer_newsletter}>
            <h2 className={styles.footer_title}>Newsletter</h2>
            <p>100+ Our clients are subscribed around the world!</p>
          </div>
          <form className={styles.footer_form}>
            <input type="email" placeholder="Your@email.com" />
            <span></span>
            <button>Submit Now</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

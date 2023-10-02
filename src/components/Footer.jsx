import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

const Services = [
  "App Development",
  "Cyber Security Analysis",
  "Penetration Testing",
  "Digital Marketing",
];
const Products = ["Parott.io", "Drumbell.org"];

const Footer = () => {
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      email,
    };
    const response = await fetch("/api/newsletter-signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      toast.success("Successfully subscribed!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setEmail("");
      setIsLoading(false);
    } else {
      setEmail("");

      toast.error("Please try again later!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsLoading(false);
    }
  };
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
              <li key={idx}>
                <Link href="#services">{service}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* </div> */}
        {/* <div className={styles.footer_inner}> */}
        <div className={styles.footer_col}>
          <ul>
            <li className={styles.footer_title}>Our Products</li>
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
            <p>100+ Our clients are subscribed!</p>
          </div>
          <form
            className={styles.footer_form}
            onSubmit={handleNewsletterSubmit}
          >
            <input
              required
              type="email"
              placeholder="Your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <button type="submit">
              {isLoading ? (
                <BeatLoader size={10} loading color="#1e1e1e" />
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

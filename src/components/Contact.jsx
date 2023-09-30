import React from "react";
import styles from "../styles/Contact.module.scss";
import Section from "./Section";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <Section
      subtitle="Contact Form"
      title="Let's Do Business Together"
      description="We would like to work with you to make your dreams a reality. Tell us about your next project"
      id="contact"
    >
      <div>
        <form className={styles.contact_form}>
          <div className={styles.contact_name}>
            {/* Name */}
            <div className={styles.inputOuter}>
              <div className={styles.inputContainer}>
                <label htmlFor="name">YOUR NAME</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className={styles.inputError}></div>
            </div>
            {/* Phone */}
            <div className={styles.inputOuter}>
              <div className={styles.inputContainer}>
                <label htmlFor="phone">PHONE</label>
                <input type="text" id="phone" name="phone" />
              </div>
              <div className={styles.inputError}></div>
            </div>
          </div>
          {/* Email */}
          <div className={styles.inputOuter}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className={styles.inputError}></div>
          </div>
          {/* Subject */}
          <div className={styles.inputOuter}>
            <div className={styles.inputContainer}>
              <label htmlFor="subject">SUBJECT</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className={styles.inputError}></div>
          </div>
          {/* Message */}
          <div className={styles.inputOuter}>
            <div className={styles.inputContainer}>
              <label htmlFor="subject">Message</label>
              <textarea type="text" id="message" name="message"></textarea>
            </div>
            <div className={styles.inputError}></div>
          </div>
          <button>
            <span>SEND MESSAGE</span>
            <FaArrowRight />
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;

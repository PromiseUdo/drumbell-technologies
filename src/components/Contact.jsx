"use client";
import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";
import Section from "./Section";
import { FaArrowRight, FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmt = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      name,
      email,
      subject,
      message,
    };
    const response = await fetch("/api/send-contact-email", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      toast.success("Thank you for contacting us!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setIsLoading(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      toast.error("Please try again later!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsLoading(false);
    }
  };
  return (
    <Section
      subtitle="Contact Form"
      title="Let's Do Business Together"
      description="We would like to work with you to make your dreams a reality. Tell us about your next project"
      id="contact"
    >
      <div>
        <form className={styles.contact_form} onSubmit={handleFormSubmt}>
          <div className={styles.contact_name}>
            {/* Name */}
            <div className={styles.inputOuter}>
              <div className={styles.inputContainer}>
                <label htmlFor="name">YOUR NAME</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.inputError}></div>
            </div>
          </div>
          {/* Email */}
          <div className={styles.inputOuter}>
            <div className={styles.inputContainer}>
              <label htmlFor="email">EMAIL</label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputError}></div>
          </div>
          {/* Subject */}
          <div className={styles.inputOuter}>
            <div className={styles.inputContainer}>
              <label htmlFor="subject">SUBJECT</label>
              <input
                required
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className={styles.inputError}></div>
          </div>
          {/* Message */}
          <div className={styles.inputOuter}>
            <div className={styles.inputContainer}>
              <label htmlFor="subject">Message</label>
              <textarea
                required
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.inputError}></div>
          </div>
          <button type="submit">
            {isLoading ? (
              <BeatLoader size={10} loading color="#1e1e1e" />
            ) : (
              <>
                <span>SEND MESSAGE</span>
                <FaArrowRight />
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;

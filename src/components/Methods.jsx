import styles from "../styles/Methods.module.scss";
import Section from "./Section";
import Image from "next/image";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Fade, JackInTheBox } from "react-awesome-reveal";
const Methods = () => {
  const [method1, setMethod1] = useState(true);
  const [method2, setMethod2] = useState(true);
  const [method3, setMethod3] = useState(true);
  const [parent] = useAutoAnimate();

  return (
    <Section
      subtitle="You Can Acquire Everything"
      title="Acquire new customers"
      description="You can acquire everything by following these methods"
      id="methods"
    >
      <div className={styles.container}>
        <div className={styles.methods}>
          {/* <JackInTheBox cascade damping={0.04}> */}
          <button
            className={method1 ? styles.active : ""}
            onClick={() => {
              setMethod1(true);
              setMethod2(false);
              setMethod3(false);
            }}
          >
            <h3>Discover Phase</h3>
            <p>
              We start by conducting market research, analyze trends and gather
              requirements to define the project scope and objectives.
            </p>
          </button>
          <button
            className={method2 ? styles.active : ""}
            onClick={() => {
              setMethod2(true);
              setMethod1(false);
              setMethod3(false);
            }}
          >
            <h3>Build Phase</h3>
            <p>
              Where the magic happens. We leverage cutting-edge technologies and
              industry best practices to deliver high-quality results.
            </p>
          </button>
          <button
            className={method3 ? styles.active : ""}
            onClick={() => {
              setMethod3(true);
              setMethod2(false);
              setMethod1(false);
            }}
          >
            <h3>Deliver Phase</h3>
            <p>
              We are ready to launch your result. Our commitment extends to
              offer you ongoing support, training and guide throughout user
              acceptance
            </p>
          </button>
          {/* </JackInTheBox> */}
        </div>
        <div className={styles.images} ref={parent}>
          {method1 && (
            <Image
              //   width="100%"
              //   height="100%"
              //   sizes="100vw"
              //   style={{ width: "100%", height: "auto" }} // optional
              objectFit="cover"
              layout="fill"
              src="/method1.jpg"
            />
          )}
          {method2 && (
            <Image
              //   width="100%"
              //   height="100%"
              //   sizes="100vw"
              //   style={{ width: "100%", height: "auto" }} // optional
              objectFit="cover"
              layout="fill"
              src="/method2.jpg"
            />
          )}
          {method3 && (
            <Image
              //   width="100%"
              //   height="100%"
              //   sizes="100vw"
              //   style={{ width: "100%", height: "auto" }} // optional
              objectFit="cover"
              layout="fill"
              src="/method3.jpg"
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default Methods;

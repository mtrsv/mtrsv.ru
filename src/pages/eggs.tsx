import { type NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";

const Eggs: NextPage = () => {
  return (
    <div className={styles.centerdiv}>
      <Head>
        <title>Good old days</title>
      </Head>
      <p>
        <a href="/cage">
          <img src="/images/crab.png" alt="Headcrab" />
        </a>
      </p>
      <p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7CQtlSIBb6Q"
          title="Zombies ate my motherland"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
        />
      </p>
      <p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vTCChMfqFVg"
          title="Headcrab invasion"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
        />
      </p>
    </div>
  );
};

export default Eggs;

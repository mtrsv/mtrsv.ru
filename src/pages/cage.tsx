import Head from "next/head";
import styles from "./index.module.css";

const Cage = () => {
  return (
    <>
      <Head>
        <title>St. Nicolas</title>
      </Head>
      <a href="/">
        <div className={styles.cage} />
      </a>
    </>
  );
};

export default Cage;

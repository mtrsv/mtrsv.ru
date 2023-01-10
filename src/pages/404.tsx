import Head from "next/head";
import styles from "./index.module.css";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>St. Nicolas</title>
      </Head>
      <div className={styles.centerdiv + " " + styles.errorBlock}>
        Такой страницы нет, но есть <a href="/">главная</a> и краб.
        <p>
          <a href="/cage">
            <img src="/images/crab.png" alt="Headcrab" />
          </a>
        </p>
      </div>
      ;
    </>
  );
};

export default NotFound;

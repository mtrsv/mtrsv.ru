import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>HelloWorld!</title>
      </Head>

      <div className={styles.wrap}>
        <div className={styles.centerdiv}>
          <img src="/images/ada.jpg" alt="ada" height="409" />
        </div>

        <BestLetterBlock />
      </div>

      <footer className={styles.footer}>
        <span className={styles.gold}>0</span>:)
        <br />
        <a href="/" className={styles.linkNoVisited}>
          mtrsv.ru
        </a>{" "}
        © past–now
      </footer>

      <a className={styles.eggs} href="/eggs">
        <img src="/images/eggs.jpg" alt="?" />
      </a>
    </div>
  );
};

const BestLetterBlock = () => {
  const [currentCharIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setCurrentIndex(getRandomIndex);
  }, []);

  return (
    <div className={styles.charsContainer}>
      <div
        className={styles.text}
        onClick={() => setCurrentIndex(getRandomIndex)}
        dangerouslySetInnerHTML={{
          __html: TEXT.replace(/0/g, VOWELS[currentCharIndex] as string),
        }}
      />
      <div className={styles.chars}>
        {VOWELS.map((char, i) => (
          <span
            key={char}
            className={
              styles.char +
              " " +
              (i === currentCharIndex ? styles.selected : "")
            }
            onClick={() => setCurrentIndex(i)}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

var TEXT =
  "Б0кв0 0 м0ж0т с&nbsp;л0гк0сть0 з0м0н0ть вс0&nbsp;0ст0льн00 ж0лк00 гл0сн00 б0кв0!";
var VOWELS = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
function getRandomIndex(): number {
  return Math.floor(Math.random() * VOWELS.length);
}

export default Home;

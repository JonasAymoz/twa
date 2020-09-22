import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the WAY Around</h1>

        <h1>Font Heading</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Paragraph shit </p>

        <h1 className="second">Font Heading</h1>
        <h2 className="second">Heading 2</h2>
        <h3 className="second">Heading 3</h3>
        <h4 className="second">Heading 4</h4>
        <h5 className="second">Heading 5</h5>
        <p>Paragraph shit </p>

        <h1 className="third">Font Heading</h1>
        <h2 className="third">Heading 2</h2>
        <h3 className="third">Heading 3</h3>
        <h4 className="third">Heading 4</h4>
        <h5 className="third">Heading 5</h5>
        <p>Paragraph shit </p>
      </main>

      <footer className={styles.footer}>
        This is the footer : need to be a component
      </footer>
    </div>
  );
}

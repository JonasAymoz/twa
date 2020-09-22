import Link from "next/link";
import styles from "../styles/Header.module.css";

export default () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="/logoHeader.png" alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.headerLink}>
        <Link href="/playlists">
          <h3 className="third"> + Playlists</h3>
        </Link>
      </div>
      <div className={styles.headerLink}>
        <Link href="/contact">
          <h3 className="third">+ Contact</h3>
        </Link>
      </div>
    </header>
  );
};

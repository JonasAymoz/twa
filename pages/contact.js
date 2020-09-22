import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const pageLeft = {
  init: {
    x: "100vw",
    opacity: 0,
  },
  anim: {
    x: 0,
    opacity: 1,
    zIndex: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "100vw",
    transition: {
      duration: 0.4,
    },
  },
};

export default function Contact() {
  return (
    <motion.div initial="init" animate="anim" exit="exit" variants={pageLeft}>
      <div className="container">
        <main className={styles.main}>
          <h1 className="third">Contact</h1>
          <p>twa@gmail.com</p>
        </main>
      </div>
    </motion.div>
  );
}

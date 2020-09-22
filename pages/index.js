import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import classNames from "classnames";
import { useEffect } from "react";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easing,
    },
  },
};
const opacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.8,
      ease: easing,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const getToken = async () => {
  //const access_token = await getAccessToken();
  //return access_token;
  return "yo";
};

const Home = (props) => {
  let anim = useAnimation();

  useEffect(() => {
    anim.start(() => ({
      opacity: 1,
      x: 30,
      rotateZ: 360,
      transition: { duration: 2 },
    }));
    anim.start(() => ({
      opacity: 1,
      rotate: [0, 360],
      transition: { duration: 15, repeat: Infinity, ease: "linear" },
    }));
  }, []);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="container">
        <main className={styles.main}>
          <motion.div
            animate="animate"
            initial="initial"
            variants={container}
            className={styles.hero}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.img
              initial={{ x: -2000, rotateZ: 0 }}
              animate={anim}
              src="/roundLogo.png"
              alt="logo"
              className={styles.roundLogo}
            />

            <div>
              <motion.h1
                variants={fadeInUp}
                className={classNames("second", styles.mainTitle)}
              >
                the Way <br />
                Around
              </motion.h1>
              <motion.p variants={opacity}>
                Hand picked music
                <Link href="playlists">&rarr; press play.</Link>
              </motion.p>
            </div>
            {props.hello}
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.hero}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon fill="#FAFAFA" points="0,100 100,0 0,0" />
            </svg>
            <div className={styles.secondHero}>
              <h1 className="second">We love music</h1>
              {props.secondSubtitle}
              <p>
                <Link href="/playlists">&rarr; See the playlists </Link>
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
};

export const getStaticProps = () => ({
  props: {
    secondSubtitle: "And then we share it, with you.",
    random: Math.random(),
  },
});

export default Home;

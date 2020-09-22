import "../styles/globals.scss";
import App from "next/app";
import Header from "../components/Header";
import withData from "../lib/apollo";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Cursor from "../components/cursor";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </>
    );
  }
}

export default withData(MyApp);

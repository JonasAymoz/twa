import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/PlaylistPanel.module.css";
import Link from "next/link";
import PlaylistLists from "../components/playlists/playlistList";
import { motion } from "framer-motion";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import getPlaylists from "../service/strapi";
import { SchemaMetaFieldDef } from "graphql";
import classNames from "classnames";

const QUERY = gql`
  {
    playlists {
      id
      Nom
      Description
      Cover {
        url
        formats
      }
      Spotify_link
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(QUERY);
  const [query, updateQuery] = useState("");
  const [isSlided, setIsSlided] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(
    data && data.playlists && data.playlists.length ? data.playlists[0] : ""
  );

  useEffect(() => {
    if (loading === false && data) {
      setSelectedPlaylist(data.playlists[data.playlists.length - 1]);
    }
  }, [loading, data]);

  const slideItem = () => {
    setIsSlided(!isSlided);
  };

  const select = (item) => {
    setSelectedPlaylist(item);
  };
  const showPlaylist = () => {
    setIsSlided(!isSlided);
  };

  if (error) return "Error loading playlists";
  // if playlists are returned from the GraphQL query, run the filter query
  // and set equal to variable restaurantSearch
  if (loading) return <h1>Fetching</h1>;
  if (error) {
    console.log("error fetching");
  }
  if (data.playlists && data.playlists.length) {
    //setPlaylists(data.playlists.reverse());
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="container"
    >
      <main className={styles.main}>
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 0.1 }}
          initial={{ opacity: 0 }}
          className={`${styles.panel} ${styles.left}`}
        >
          <div className={styles.headerPlaylist}>
            <h3 className="second">Playlists</h3>
            <p>Play them together, forever.</p>
            <input
              placeholder="Find a playlist"
              className={styles.search}
              type="text"
              name="query"
              id=""
              onChange={(e) => updateQuery(e.target.value.toLocaleLowerCase())}
              value={query}
            />
          </div>
          <PlaylistLists
            search={query}
            dataPlaylist={data.playlists}
            setPlaylist={select}
            showPlaylist={showPlaylist}
          />
        </motion.div>
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, delay: 1 }}
          initial={{ opacity: 0 }}
          className={`${styles.panel} ${styles.right} ${
            isSlided && "slideCover"
          }`}
        >
          {!isSlided && (
            <h1 className={styles.title}>{selectedPlaylist.Nom}</h1>
          )}
          {isSlided && (
            <h1 className={styles.title} onClick={() => slideItem()}>
              &larr;
            </h1>
          )}
          <div className={styles.coverContainer}>
            {selectedPlaylist.Cover && (
              <img
                className={styles.cover}
                src={`${process.env.NEXT_PUBLIC_API_URL}${selectedPlaylist.Cover.url}`}
                alt=""
              />
            )}
          </div>
          <div className={styles.bottomInfos}>
            <div>
              <a target="_blank" href={selectedPlaylist.Spotify_link}>
                <img
                  className={styles.logoSpotify}
                  src="/logoSpotify.png"
                  alt="spotify"
                />
                <span className={styles.linkSpotify}>OPEN IN SPOTIFY</span>
              </a>
            </div>
            <div>
              Artwork by @{selectedPlaylist.coverArtist}
              {JSON.stringify(isSlided)}
            </div>
          </div>
        </motion.div>
        <motion.div
          className={classNames("playerContainer", { slideSpotify: isSlided })}
        >
          <iframe
            src="https://open.spotify.com/embed/playlist/0dj6QH5IPONE8GOHGS7u4K"
            width="100%"
            height="100%"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </motion.div>
      </main>
    </motion.div>
  );
}

export default Home;

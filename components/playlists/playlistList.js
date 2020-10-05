/* components/RestaurantList/index.js */
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import PlaylistItem from "./playlistItem";
import Link from "next/link";
import style from "../../styles/PlaylistList.module.css";
import { motion, AnimatePresence } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
  transition: { delay: 1 },
};

function PlaylistList(props) {
  const { setPlaylist, dataPlaylist, showPlaylist, showCover } = props;
  if (dataPlaylist && dataPlaylist.length) {
    //searchQuery
    const searchQuery = dataPlaylist.filter((query) =>
      query.Nom.toLowerCase().includes(props.search)
    );
    if (searchQuery.length != 0) {
      return (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={style.playlistList}
        >
          {searchQuery.reverse().map((res) => (
            <>
              <motion.div variants={item}>
                <PlaylistItem
                  item={res}
                  key={res.id}
                  setPlaylist={setPlaylist}
                  showPlaylist={showPlaylist}
                  showCover={showCover}
                />
              </motion.div>
            </>
          ))}
        </motion.div>
      );
    } else {
      return (
        <>
          <h4>Nothing</h4>
          <small>The void.</small>
        </>
      );
    }
  }
  return <h5>Nothing.</h5>;
}
export default PlaylistList;

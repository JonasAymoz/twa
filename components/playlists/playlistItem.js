import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";
import { getPlaylistInfos } from "../../service/spotify";
import React, { useState, useEffect } from "react";
import style from "../../styles/PlaylistItem.module.css";

function PlaylistItem(props) {
  const { item, setPlaylist, showPlaylist, playlistsJson, showCover } = props;
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      //const responseApi = await getPlaylistInfos();
      //setData(responseApi);
    };
    fetchData();
  }, []);

  return (
    <div
      className={style.playlistItem}
      onClick={() => setPlaylist(item)}
      onMouseEnter={() => showCover(item)}
    >
      <div className={style.supTitle}>&#6158; TWA #{item.playlistNumber}</div>
      <div className={style.titleContainer}>
        <div className={style.flexpart}>
          <span className={style.playlistTitle}>
            <span> &#6158; </span>
            {item.Nom} <span> &#6158; </span>
          </span>
        </div>
        <div className={style.line}></div>
      </div>
    </div>
  );
}

export default PlaylistItem;

import { getTopTracks, getPlaylistInfos } from '../../service/spotify';

/* export async function getPlaylistInfos() {
  const responseApi = await getTopTracks();
  //const { response } = await responseApi;
  //console.log(response);
  const tracks = responseApi.tracks.items.map((item) => {
    const trackObject = {};
    trackObject.artist =item.track.artists[0].name;
    trackObject.songUrl=item.track.external_urls.spotify;
    trackObject.title=item.track.name;
    trackObject.cover=item.track.preview_url;
    return trackObject;
  });

  const playlist = {
    nom : responseApi.name,
    url: responseApi.href,
    'tracks' : tracks
  };
  return playlist.json();
}; */

export default async (req, res) => {
  const playlistsJson = await getPlaylistInfos();
  return res.status(200).json({playlistsJson});
}

import querystring from 'querystring';

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET= process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN= process.env.SPOTIFY_REFRESH_TOKEN;
const token= process.env.SPOTIFY_TOKEN;

const basic = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Authorisation: Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        grant_type: 'refresh_token',
        SPOTIFY_REFRESH_TOKEN
      })
    });
    if (response.status >= 200 && response.status <= 299) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return response.json();
    } else {
        // Handle errors
        console.log(response.status, response.statusText);
        return "error"
    }
  };

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/playlists/0dj6QH5IPONE8GOHGS7u4K`;
const ME_ENDPOINT = `https://api.spotify.com/v1/me`;

export const getTopTracks = async () => {
  //const { access_token } = await getAccessToken();
  //console.log("supposed new token " +access_token);
  
  const response = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${token}`
      }
  });
  if (response.status >= 200 && response.status <= 299) {
        const jsonResponse = await response.json();
        return jsonResponse;
    } else {
        // Handle errors
        console.log(response.status, response.statusText);
        return "error"
    } 
};

export const getPlaylistInfos = async () => {
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
    return playlist;
  };
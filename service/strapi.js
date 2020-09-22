import querystring from "querystring";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/playlists/0dj6QH5IPONE8GOHGS7u4K`;
const ME_ENDPOINT = `https://api.spotify.com/v1/me`;

const getPlaylists = async () => {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading playlists";
  //if playlists are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  if (loading) return <h1>Fetching</h1>;
  if (error) {
    console.log("error fetching");
  }
  //if playlists are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  //if (loading) return <h1>Fetching</h1>;
  if (data.playlists && data.playlists.length) {
    //searchQuery
    return data.playlists.reverse();
  }
};

export default getPlaylists;

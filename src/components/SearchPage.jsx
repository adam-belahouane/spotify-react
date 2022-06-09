import { useEffect, useState } from "react";
import LargeSingleMusicCard from "./LargeSingleMusicCard";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ArtistCard from "./ArtistCard";
import PlayListCard from "./PlayListCard";

const SearchPage = () => {
  const params = useParams();
  const [query, setQuery] = useState("");
  const [artistResults, setArtistResults] = useState([]);
  const [albumResults, setAlbumResults] = useState([]);
  const [playlistResults, setPlaylistResults] = useState([]);
  const token = useSelector((state) => state.login.accesstoken);
  const ApiUrl = process.env.REACT_APP_API_URL;

  const fetchQueryArtists = async () => {
    try {
      let response = await fetch(`${ApiUrl}search?q=${query}&type=artist`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (response.ok) {
        let json = await response.json();
        setArtistResults(json.artists.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchQueryAlbums = async () => {
    try {
      let response = await fetch(`${ApiUrl}search?q=${query}&type=album`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (response.ok) {
        let json = await response.json();

        setAlbumResults(json.albums.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchQueryPlaylists = async () => {
    try {
      let response = await fetch(`${ApiUrl}search?q=${query}&type=playlist`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (response.ok) {
        let json = await response.json();
        console.log(json);
        setPlaylistResults(json.playlists.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query.length > 1) {
      fetchQueryArtists();
      fetchQueryPlaylists();
      fetchQueryAlbums();
    }
  }, [query]);

  return (
    <div className="con px-4">
      <div id="search-bar-parent">
        <input
          id="search-bar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Songs, Artists or Albums"
        />
        <svg
          className="search-bar-glass"
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
            fill="currentcolor"
          ></path>
        </svg>
      </div>
      {query.length > 0 && albumResults.length > 0 && (
        <>
          <Row className="my-3 text-white p-2">
            <h3 className="more-by">Albums</h3>
          </Row>
          <Row noGutters className="listofcards">
            {albumResults.map((element) => (
              <LargeSingleMusicCard
                img={element.images[1].url}
                title={element.name}
                artist={element.artists[0].name}
                albumId={element.id}
                artistId={element.artists[0].id}
              />
            ))}
          </Row>
        </>
      )}
      {query.length > 0 && artistResults.length > 0 && (
        <>
          <Row className="my-3 text-white p-2">
            <h3 className="more-by">Artists</h3>
          </Row>
          <Row noGutters className="listofcards">
            {artistResults.map((element) => (
              <ArtistCard key={element.id} artist={element} />
            ))}
          </Row>
        </>
      )}
      {query.length > 0 && playlistResults.length > 0 && (
        <>
          <Row className="my-3 text-white p-2">
            <h3 className="more-by">Featured Playlist</h3>
          </Row>
          <Row noGutters className="listofcards">
            {playlistResults.map((element) => (
              <PlayListCard key={element.id} playlist={element} />
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default SearchPage;

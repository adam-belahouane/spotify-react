import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArtistCard from "../components/ArtistCard";
import LargeSingleMusicCard from "../components/LargeSingleMusicCard";
import PlayListCard from "../components/PlayListCard";

const LibraryPage = () => {
  const [selected, setSelected] = useState("Playlists");
  const favourites = useSelector((state) => state.favourites)

  useEffect(() => {
    console.log(favourites);
  },[])
  return (
    <div className="playlist-container-page">
      <Col className="d-flex ps-sm-5 pt-4 pb-4" xs={12}>
        <span
          onClick={() => setSelected("Playlists")}
          className={
            selected === "Playlists"
              ? "selected library-links p-2"
              : "library-links p-2"
          }
        >
          Playlists
        </span>
        <span
          onClick={() => setSelected("Albums")}
          className={
            selected === "Albums"
              ? "selected library-links p-2"
              : "library-links p-2"
          }
        >
          Albums
        </span>
        <span
          onClick={() => setSelected("Artists")}
          className={
            selected === "Artists"
              ? "selected library-links p-2"
              : "library-links p-2"
          }
        >
          Artists
        </span>
        <Link className="p-2" to="/likedsongs">
          <span
            onClick={() => setSelected("Tracks")}
            className="liked-songs library-links p-2"
          >
            Liked Songs
          </span>
        </Link>
      </Col>
      <div className="mx-4 text-white">
      {selected === "Playlists" && (
        <>
          <h4 className="ps-3 mb-4">Playlists</h4>
          {favourites.playlists.map((element) => {
            return (
                <PlayListCard key={element.id} playlist={element}/>
            );
          })}
        </>
      )}

      {selected === "Albums" && (
        <>
          <h4 className="ps-3 mb-4">Albums</h4>
          {favourites.albums.map((element) => {
            return <LargeSingleMusicCard
            img={element.images[1].url}
            title={element.name}
            artist={element.artists[0].name}
            albumId={element.id}
            artistId={element.artists[0].id}
          />;
          })}
        </>
      )}

      {selected === "Artists" && (
        <>
          <h4 className="ps-3 mb-4">Artists</h4>
          {favourites.artists.map((artist) => {
            return <ArtistCard key={artist.id} artist={artist} />;
          })}
        </>
      )}

      {/* {selected === "Tracks" && <LikedSongsPage />} */}
      </div>
    </div>
  );
};

export default LibraryPage;

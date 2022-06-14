import { useEffect, useState } from "react";
import { useParams } from "react-router";
import TrackList from "./TrackList";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import ArtistCard from "./ArtistCard";
import LargeSingleMusicCard from "./LargeSingleMusicCard";
import { BeatLoader } from "react-spinners";

const ArtistPage = () => {
  const params = useParams();
  const token = useSelector((state) => state.login.accesstoken);
  const ApiUrl = process.env.REACT_APP_API_URL;
  const [artist, setArtist] = useState([]);
  const [artistTopTracks, setArtistTopTracks] = useState([]);
  const [artistList, setArtistList] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [toggleMore, setToggleMore] = useState(5);

  const fetchArtist = async (id) => {
    try {
      const res = await fetch(`${ApiUrl}artists/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (res.ok) {
        const json = await res.json();
        setArtist(json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchArtistTopTracks = async (id) => {
    try {
      const res = await fetch(`${ApiUrl}artists/${id}/top-tracks?country=GB`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (res.ok) {
        const json = await res.json();
        setArtistTopTracks(json.tracks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRelatedArtist = async (id) => {
    try {
      const res = await fetch(`${ApiUrl}artists/${id}/related-artists`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (res.ok) {
        const json = await res.json();
        setArtistList(json.artists);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchArtistAlbums = async (id) => {
    try {
      const res = await fetch(`${ApiUrl}artists/${id}/albums`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        setArtistAlbums(json.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArtist(params.artistId);
    fetchArtistTopTracks(params.artistId);
    fetchRelatedArtist(params.artistId);
    fetchArtistAlbums(params.artistId);
  }, [params.artistId]);
  if (artist.length < 1) {
    return (
    <div className="con d-flex justify-content-center align-items-center">
      <BeatLoader color="gray" loading={true} size={40}/>
    </div>
    );
  }
  return (
    <>
      <div className="con">
        <Row className="text-white my-5 mx-4 px-1">
          <Col md={3}>
            <img src={artist.images[0].url} className="img-fluid" />
          </Col>
          <Col className="album-info" md={9}>
            <Row>
              <div className="text-muted my-1">Verified Artist</div>
            </Row>
            <Row>
              <span className="album-name-text"> {artist.name}</span>
            </Row>
            <Row>
              <small style={{ fontSize: 15 }}>{artist.followers.total}</small>
            </Row>
          </Col>
        </Row>
        <div className="row mx-4">
          <div className="col-12 col-md-8">
            <div className="row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-play-circle-fill green-play-btn"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
              <div id="follow">
                <p style={{ position: "absolute", top: "20%", left: "15%" }}>
                  follow
                </p>
              </div>
              <div id="threeDots">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="currentColor"
                  className="bi bi-three-dots"
                  viewBox="0 0 16 16"
                  style={{ color: "grey" }}
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Row className="m-4 px-3 text-white">
          <h3>Popular</h3>
        </Row>
        <div className="mx-5">
          {artistTopTracks.slice(0, toggleMore).map((track) => (
            <TrackList
              number={artistTopTracks.indexOf(track) + 1}
              key={track.id}
              title={track.name}
              artist={track.artists[0].name}
              duration={track.duration_ms}
              albumImg={track.album.images[2].url}
              albumName={track.album.name}
              track={track}
              isArtistPage={true}
            />
          ))}
        </div>
        <Row className="mx-5 my-4 px-3 light-white">
          {toggleMore === 5 ? (
            <h6 className="cursor" onClick={() => setToggleMore(10)}>
              SEE MORE
            </h6>
          ) : (
            <h6 className="cursor" onClick={() => setToggleMore(5)}>
              SEE LESS
            </h6>
          )}
        </Row>
        <Row className="m-4 px-3 text-white">
          <h3>Albums</h3>
        </Row>
        <Row noGutters className="listofcards m-4 px-2">
          {artistAlbums.map((element) => (
            <LargeSingleMusicCard
              img={element.images[1].url}
              title={element.name}
              artist={element.release_date}
              albumId={element.id}
              artistId={element.artists[0].id}
              isNotMain={true}
            />
          ))}
        </Row>
        <Row className="m-4 px-3 text-white">
          <h3>Fans also like</h3>
        </Row>
        <Row noGutters className="listofcards m-4 px-2">
          {artistList &&
            artistList.map((element) => (
              <ArtistCard key={element.id} artist={element} />
            ))}
        </Row>
      </div>
    </>
  );
};

export default ArtistPage;

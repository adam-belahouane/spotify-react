import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import LargeSingleMusicCard from "./LargeSingleMusicCard";
import MyNavBar from "./MyNavBar";
import TrackList from "./TrackList";
import { useSelector } from "react-redux";

const AlbumPage = () => {
  const params = useParams();
  const [album, setAlbum] = useState([]);
  const [artistAlbums, setArtistAlbums] = useState([]);
  const [trackList, setTrackList] = useState([]);
  const token = useSelector((state) => state.login.accesstoken);
  const ApiUrl = process.env.REACT_APP_API_URL;

  const fetchAlbum = async (id) => {
    try {
      const res = await fetch(`${ApiUrl}albums/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        setAlbum(json);
        setTrackList(json.tracks.items);
        fetchArtistAlbums(json.artists[0].id);
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
    fetchAlbum(params.albumId);
  }, [params.albumId]);

  if (album.length < 1) {
    return <></>;
  }
  {
    return (
      <div className="con">
        <Row className="text-white m-5">
          <Col md={3}>
            <img src={album.images[1].url} className="img-fluid" />
          </Col>
          <Col className="album-info" md={9}>
            <Row>
              <h3 className="album-type-text">{album.album_type}</h3>
            </Row>
            <Row>
              <span className="album-name-text"> {album.name}</span>
            </Row>
            <Row>
              <small style={{ fontSize: 15 }}>
                <strong>{album.artists[0].name} •</strong>{" "}
                <span className="year">{album.release_date.slice(0, 4)}</span> •{" "}
                {trackList.length} songs, 1 hr 19mins
              </small>
            </Row>
          </Col>
        </Row>
        <Row className="ml-5">
          <Col>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-play-circle-fill green-play-btn"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
            <i className="bi-bi bi-heart" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="currentColor"
              className="bi bi-heart heart-btn"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <i className="bi-bi bi-three-dots " />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="currentColor"
              className="bi bi-three-dots heart-btn"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </Col>
        </Row>
        <Row className="text-muted mx-5 my-3 tracklist-header">
          <Col sm={11} className="titleandhash">
            <p className="hash">#</p>
            <p>TITLE</p>
          </Col>
          <Col sm={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
          </Col>
        </Row>

        <div className="listoftracks mx-5">
          {trackList.map((track) => (
            <TrackList
              number={trackList.indexOf(track) + 1}
              key={track.id}
              title={track.name}
              artist={track.artists[0].name}
              duration={track.duration_ms}
            />
          ))}
        </div>

        <Row className="mx-5">
          <Row className="my-4">
            <h3 className="more-by">More by {album.artists[0].name}</h3>
          </Row>
          <Row noGutters className="listofcards mb-5">
            {artistAlbums.map((element) => (
              <LargeSingleMusicCard
                img={element.images[1].url}
                title={element.name}
                artist={element.release_date}
                albumId={element.id}
                artistId={element.artists[0].id}
              />
            ))}
          </Row>
        </Row>
      </div>
    );
  }
};

export default AlbumPage;

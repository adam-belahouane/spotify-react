import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import ListOfMusicCards from "./ListOfMusicCards";
import MyNavBar from "./MyNavBar";
import TrackList from "./TrackList";

const AlbumPage = () => {
  const params = useParams();
  const [album, setAlbum] = useState([]);
  const [albumL, setAlbumL] = useState([]);
  const [name, setName] = useState("");

  const fetchAlbum = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        await setAlbum(data);
        await setAlbumL(data.tracks.data);
        setName(data.artist.name);
        console.log(albumL);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbum(params.albumId);
  }, []);

  return (
    <div className="con">
      <MyNavBar />

      {/* -----<album>  page start------*/}
      <Row className="text-white">
        <Col md={3}>
          <img src={album.cover_xl} className="img-fluid" />
        </Col>
        <Col md={9}>
          <Row>
            <h3>ALBUM</h3>
          </Row>
          <Row>
            <strong
              id="fontfirst"
              className="align-self-center"
              style={{ fontSize: 30 }}
            >
              {album.title}
            </strong>
          </Row>
          <Row>
            <small style={{ fontSize: 15 }}>
              <strong>{name} •</strong> {album.release_date} • {albumL.length} songs, 1
              hr 19mins
            </small>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <i className="bi-bi bi-heart" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="currentColor"
            color="white"
            className="bi bi-heart"
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
            color="white"
            className="bi bi-three-dots "
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </Col>
      </Row>
      <Row className="text-muted">
        <Col sm={11}>
          <p># TITLE</p>
        </Col>
        <Col sm={1}></Col>
      </Row>

      {/* Table section */}
      <div className="listoftracks">
        {
          albumL.map((track) => (
            <TrackList number={albumL.indexOf(track) + 1} key={track.id} title={track.title} artist={track.artist.name} duration={track.duration}  />
          ))
        }
        <ListOfMusicCards name={name} />

      </div>
    </div>
  );
};

export default AlbumPage;

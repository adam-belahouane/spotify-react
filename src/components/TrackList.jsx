import { Col, Row } from "react-bootstrap";
import dateDiff from "../tools/dateFunction";

const TrackList = (props) => {
  const durationCalculator = (durationInMilliseconds) => {
    let duration = durationInMilliseconds;
    let mins = Math.floor(duration / 60000);
    let secs = ((duration % 60000) / 1000).toFixed(0);
    return mins + ":" + (secs < 10 ? "0" : "") + secs;
  };
  if (props.isPlayList) {
    return (
      <Row className="mb-2 tracklist-item d-flex align-items-center p-1">
        <Col md={5} className="d-flex flex-row align-items-center">
          <div className="tracklist-number-container">
            <div className="tracklist-number">{props.number}</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-play-fill d-none"
            viewBox="0 0 15 15"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
          <div className="tracklist-img-con">
            <img
              src={props.albumImg}
              alt="album cover"
              className="tracklist-img"
            />
          </div>
          <div className="tracklist-name-artist">
            <div className="tracklist-name">{props.title}</div>
            <div className="tracklist-artist">{props.artist}</div>
          </div>
        </Col>
        <Col md={3} className="tracklist-album-name">
          {props.albumName}
        </Col>
        <Col md={3} className="text-muted">
          {dateDiff(props.dateAdded)}
        </Col>
        <Col md={1}>{durationCalculator(props.duration)}</Col>
      </Row>
    );
  }
  if (props.isArtistPage) {
    return (
      <Row className="mb-2 tracklist-item d-flex align-items-center p-1">
        <Col md={5} className="d-flex flex-row align-items-center">
          <div className="tracklist-number-container light-white">
            <div className="tracklist-number">{props.number}</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-play-fill d-none light-white"
            viewBox="0 0 15 15"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
          <div className="tracklist-img-con">
            <img
              src={props.albumImg}
              alt="album cover"
              className="tracklist-img"
            />
          </div>
          <div className="tracklist-name-artist">
            <div className="tracklist-name text-white">{props.title}</div>
          </div>
        </Col>
        <Col md={5} className="tracklist-album-name light-white">
          {props.albumName}
        </Col>
        <Col md={2} className="light-white">
          {durationCalculator(props.duration)}
        </Col>
      </Row>
    );
  }
  return (
    <Row className="mb-2 tracklist-item d-flex align-items-center p-1">
      <Col md={11} className="d-flex flex-row align-items-center">
        <div className="tracklist-number-container">
          <div className="tracklist-number">{props.number}</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-play-fill d-none"
          viewBox="0 0 15 15"
        >
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
        </svg>
        <div className="tracklist-name-artist">
          <div className="tracklist-name">{props.title}</div>
          <div className="tracklist-artist">{props.artist}</div>
        </div>
      </Col>
      <Col md={1}>{durationCalculator(props.duration)}</Col>
    </Row>
  );
};

export default TrackList;

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
      <Row className="mb-2">
        <Col md={5} className="d-flex flex-row align-items-center">
          <div className="tracklist-number-container">
            <div className="tracklist-number">{props.number}</div>
          </div>
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
      <Row className="mb-2">
        <Col md={5} className="d-flex flex-row align-items-center">
          <div className="tracklist-number-container">
            <div className="tracklist-number light-white">{props.number}</div>
          </div>
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
        <Col md={2} className="light-white">{durationCalculator(props.duration)}</Col>
      </Row>
    );
  }
  return (
    <Row className="mb-2">
      <Col md={11} className="d-flex flex-row align-items-center">
        <div className="tracklist-number-container">
          <div className="tracklist-number">{props.number}</div>
        </div>
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

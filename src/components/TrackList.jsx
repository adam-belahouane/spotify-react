import { Col, Row } from "react-bootstrap";
import dateDiff from "../tools/dateFunction";
import { durationCalculator } from "../tools/duration";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSongAction, playPause } from "../redux/actions";
import { useEffect } from "react";

const TrackList = (props) => {
  const media = useSelector((state) => state.media);
  const dispatch = useDispatch();
  const [previewAvailable, setPreviewAvailable] = useState(true);
  const [show, setShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playHandler = () => {
    if (props.isPlayList) {
      console.log(props.track);
      if (!props.track.track.preview_url) {
        setPreviewAvailable(false);
        setShow(true);
      } else {
        dispatch(setCurrentSongAction({ ...props.track.track }));
        if (!media.play) {
          dispatch(playPause());
        }
      }
    } else if (props.isArtistPage) {
      console.log("art");
      if (!props.track.preview_url) {
        setPreviewAvailable(false);
        setShow(true);
      } else {
        dispatch(setCurrentSongAction({ ...props.track }));
        if (!media.play) {
          dispatch(playPause());
        }
      }
    } else {
      if (!props.track.preview_url) {
        setPreviewAvailable(false);
        setShow(true);
      } else {
        dispatch(
          setCurrentSongAction({
            ...props.track,
            album: { images: props.albumInfo.images },
          })
        );
        if (!media.play) {
          dispatch(playPause());
        }
      }
    }
  };

  if (props.isPlayList) {
    return (
      <Row className="mb-2 tracklist-item d-flex align-items-center p-1">
        <Col md={5} className="d-flex flex-row align-items-center">
          <div className="tracklist-number-container">
            <div className="tracklist-number">{props.number}</div>
          </div>
          {media.play && media.selectedSong.id === props.track.track.id ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              onClick={() => dispatch(playPause())}
              className="bi bi-pause-fill d-none"
              viewBox="0 0 15 15"
            >
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              onClick={playHandler}
              className="bi bi-play-fill d-none"
              viewBox="0 0 15 15"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          )}
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
          {media.play && media.selectedSong.id === props.track.id ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              onClick={() => dispatch(playPause())}
              className="bi bi-pause-fill d-none"
              viewBox="0 0 15 15"
            >
              <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              onClick={playHandler}
              className="bi bi-play-fill d-none"
              viewBox="0 0 15 15"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
            </svg>
          )}
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
        {media.play && media.selectedSong.id === props.track.id ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            onClick={() => dispatch(playPause())}
            className="bi bi-pause-fill d-none"
            viewBox="0 0 15 15"
          >
            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            onClick={playHandler}
            className="bi bi-play-fill d-none"
            viewBox="0 0 15 15"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
        )}
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

import { Col, Row } from "react-bootstrap";
import dateDiff from "../tools/dateFunction";
import { durationCalculator } from "../tools/duration";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSongAction, playPause, removeTrackFromFavouritesAction, addTrackToFavouritesAction } from "../redux/actions";
import { useEffect } from "react";

const TrackList = (props) => {
  const { media, favourites } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [previewAvailable, setPreviewAvailable] = useState(true);
  const [show, setShow] = useState(false);

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
      <Col md={1} className="d-flex flex-row">
        {favourites.tracks.find((item) => item.id === props.track.id) ? (
          <div className="heart-btn-tracklist-item heart-selected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#1ed760"
            class="bi bi-heart-fill heart-btn"
            viewBox="0 0 16 16"
            onClick={() =>
              dispatch(removeTrackFromFavouritesAction(props.track))
            }
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
          </div>
        ) : (
          <div className="heart-btn-tracklist-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-heart heart-btn"
              viewBox="0 0 16 16"
              onClick={() => dispatch(addTrackToFavouritesAction({...props.track, added_at: new Date()}))}
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </div>
        )}
        {durationCalculator(props.duration)}
      </Col>
    </Row>
  );
};

export default TrackList;

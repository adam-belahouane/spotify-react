import { Navbar, ProgressBar } from "react-bootstrap";
import "../../Spotify.css";
import "./style.css";
import { Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, createRef } from "react";
import { formatTime, durationCalculator } from "../../tools/duration";

const MusicPlayer = () => {
  const media = useSelector((state) => state.media);
  const [currentTime, setCurrentTime] = useState(0);
  const playPause = useDispatch()

  const audioRef = createRef();

  useEffect(() => {
    console.log(media);
  }, []);

  return (
    <Navbar fixed="bottom" className="text-white music-player-con">
      <Col
        xs={8}
        md={4}
        className="media-left d-flex align-items-center text-truncate"
      >
        <img
          height="40px"
          width="40px"
          src={
            media.selectedSong.album?.images[2]?.url ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          }
          alt="song-cover"
        />

        <div className="d-flex flex-column m-3 text-truncate">
          <span className="text-truncate">{media.selectedSong?.name}</span>
          <small className="text-truncate text-muted">
            {media.selectedSong?.artists[0]?.name}
          </small>
        </div>
        <div className="d-flex light-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-suit-heart ml-2"
            viewBox="0 0 16 16"
          >
            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pip ml-3"
            viewBox="0 0 16 16"
          >
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
            <path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z" />
          </svg>
        </div>
      </Col>

      <Col xs={4} md={5} className="d-flex flex-column">
        <div className="d-flex align-items-center justify-content-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-shuffle mx-3"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
            />
            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
          </svg>
          <svg
            // onClick={prevSong}
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="d-none d-md-flex mx-3 Svg-ulyrgf-0 cMigZB"
          >
            <path
              fill="currentcolor"
              d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"
            ></path>
          </svg>
          <div
            id="play-button"
            className="d-flex justify-content-center align-items-center"
          >
            {!media.play && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-play-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
            )}

            {media.play && (
              <svg
                id="pause"
                // onClick={() => playPause()}
                role="img"
                height="16"
                width="16"
                viewBox="0 0 16 16"
                className="Svg-sc__sc-1bi12j5-0 hPiOwj"
              >
                <path fill="none" d="M0 0h16v16H0z"></path>
                <path d="M3 2h3v12H3zm7 0h3v12h-3z"></path>
              </svg>
            )}
          </div>

          <svg
            // onClick={nextSong}
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="d-none d-md-flex mx-3 Svg-ulyrgf-0 cMigZB"
          >
            <path
              fill="currentcolor"
              d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"
            ></path>
          </svg>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="d-none d-md-flex mx-3 Svg-ulyrgf-0 cMigZB"
          >
            <path
              fill="currentcolor"
              d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"
            ></path>
          </svg>
        </div>

        <div className="align-items-center d-none d-sm-flex">
          <span className="currentTime">
            {formatTime(currentTime) || "0:00"}
          </span>

          <ProgressBar
            className="mx-3"
            style={{ width: "100%", height: "4px" }}
            variant="primary"
            now={currentTime * 3.33}
          ></ProgressBar>
          <audio
            id="audio"
            src={media.selectedSong.preview_url || null}
            ref={audioRef}
          ></audio>
          <span className="duration ">
            {durationCalculator(media.selectedSong.duration_ms)}
          </span>
        </div>
      </Col>

      <Col
        md={3}
        className="d-none d-md-flex media-right justify-content-end align-items-center"
      >
        <div className="p-2">
          <svg
            role="presentation"
            height="16"
            width="16"
            aria-label="Volume high"
            id="volume-icon"
            viewBox="0 0 16 16"
            className="Svg-ulyrgf-0 cMigZB"
          >
            <path
              fill="currentcolor"
              d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"
            ></path>
          </svg>
        </div>
        <input
          // value={volume}
          // onChange={(e) => setVolume(e.target.value)}
          className="volume-slider"
          type="range"
          style={{ height: "2px", backgroundColor: "#198754" }}
        />
      </Col>
    </Navbar>
  );
};

export default MusicPlayer;

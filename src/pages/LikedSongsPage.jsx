import { useDispatch, useSelector } from "react-redux"
import { playPause, setCurrentSongAction } from "../redux/actions"
import { Col, Row } from "react-bootstrap"
import TrackList from "../components/TrackList"

const LikedSongsPage = () => {
    const {media, favourites} = useSelector((state) => state)
    const dispatch = useDispatch()

    const playHandler = () => {
        const songToPlay = favourites.tracks.find(item => item.preview_url !== null)
        if (songToPlay) {
            dispatch(setCurrentSongAction(songToPlay))
            if(!media.play){

              dispatch(playPause())
            }
        } else {
            return
        }
    }

    return (
        <div className="playlist-container-page">
            <Row className="text-white my-5 mx-4 px-1">
        <Col md={3}>
          <img src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" className="img-fluid" />
        </Col>
        <Col className="album-info" md={9}>
          <Row>
            <h3 className="album-type-text">PLAYLIST</h3>
          </Row>
          <Row>
            <span className="album-name-text">Liked Songs</span>
          </Row>
          <Row>
            <small style={{ fontSize: 15 }}>
              <strong>Your Playlist List •</strong> {favourites.tracks.length} songs
            </small>
          </Row>
        </Col>
      </Row>
      <Row className="ml-4 px-1">
        <Col>
          {!media.play && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              onClick={() => playHandler()}
              fill="currentColor"
              class="bi bi-play-circle-fill green-play-btn"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          )}
          {media.play &&
            !favourites.tracks.some((item) => item.id === media.selectedSong.id) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                onClick={() => playHandler()}
                fill="currentColor"
                class="bi bi-play-circle-fill green-play-btn"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
            )}
          {media.play &&
            favourites.tracks.some((item) => item.id === media.selectedSong.id) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                onClick={() => dispatch(playPause())}
                fill="currentColor"
                class="bi bi-pause-circle-fill green-play-btn"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
              </svg>
            )}
        </Col>
      </Row>
      <Row className="text-muted mx-5 my-3 tracklist-header">
        <Col sm={5} className="titleandhash">
          <p className="hash">#</p>
          <p>TITLE</p>
        </Col>
        <Col md={3}>ALBUM</Col>
        <Col md={3}>DATE ADDED</Col>
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
        {favourites.tracks  &&
          favourites.tracks.map((track) => (
            <TrackList
              number={favourites.tracks.indexOf(track) + 1}
              key={track.id}
              title={track.name}
              artist={track.artists[0]?.name}
              duration={track.duration_ms}
              albumImg={track.album.images[2].url}
              albumName={track.album.name}
              dateAdded={track?.added_at}
              track={track}
              isPlayList={true}
            />
          ))}
      </div>

        </div>
    )
}

export default LikedSongsPage
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LargeSingleMusicCard = ({ img, title, artist, albumId, artistId, setAudio, trackaudio, setTrackId, trackId }) => {

  const handleClick = () => {
    setAudio(trackaudio)
    setTrackId(trackId)
  }


  return (
    <Col xs={6} sm={4} md={3} xl={2} className="px-2">
      <div className="card music-card2">
        <img
          className="img-fluid justify-self-center align-items-center px-3 py-3"
          src={img}
          alt="Card image cap"
          onClick={() => handleClick()}
        />
        <div className="card-body">
          <Link to={"/album/" + albumId }>
          <h6 className="singlecardtext">{title}</h6>
          </Link>
          <Link to={"/artist/" + artistId}>
          <p className="card-text">{artist}</p>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default LargeSingleMusicCard;

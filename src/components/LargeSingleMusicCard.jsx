import { Col } from "react-bootstrap";

const LargeSingleMusicCard = ({ img, title, artist }) => {
  return (
    <Col md={3} xl={2}>
      <div className="card music-card2">
        <img
          className="img-fluid align-self-center mt-3 pl-3 pr-3"
          src={img}
          alt="Card image cap"
        />
        <div className="card-body">
          <h6 className="singlecardtext">{title}</h6>
          <p className="card-text">{artist}</p>
        </div>
      </div>
    </Col>
  );
};

export default LargeSingleMusicCard;

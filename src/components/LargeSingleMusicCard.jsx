import { Col } from "react-bootstrap";

const LargeSingleMusicCard = ({ img, title, artist }) => {
  return (
    <Col xs={6} sm={4} md={3} xl={2} className="px-2">
      <div className="card music-card2">
        <img
          className="img-fluid justify-self-center align-items-center px-3 py-3"
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

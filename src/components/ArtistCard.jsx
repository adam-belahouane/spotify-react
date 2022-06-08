import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const ArtistCard = (props) => {
  return (
    <Col xs={6} sm={4} md={3} xl={2} className="px-2 my-2">
      <div className="card music-card2 d-flex align-items-center">
      <Link to={`/artist/${props.artist.id}`}>
        <img
          className="artists-card-img p-3 img-fluid d-flex justify-self-center align-items-center"
          src={
            props.artist.images[0]?.url ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9uvF65nH7m-aoxHulInp9xFBJjZsuZuOw1w&usqp=CAU"
          }
          alt="playlist-cover"
        />

        <div className="card-body">
          <h6 className="singlecardtext">{props.artist.name}</h6>

          <p className="text-muted text-truncate">Artist</p>
        </div>
      </Link>
      </div>
    </Col>
  );
};

export default ArtistCard;

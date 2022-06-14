import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const PlayListCard = ({ playlist }) => {
  return (
    <Col xs={6} sm={4} md={3} xl={2} className="px-2 my-2">
      <div className="card music-card2">
        <Link to={`/playlist/${playlist.id}`}>
          <img
            className="img-fluid justify-self-center align-items-center px-3 py-3"
            src={
              playlist.images[0]?.url ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9uvF65nH7m-aoxHulInp9xFBJjZsuZuOw1w&usqp=CAU"
            }
            alt="Playlist img"
          />
          <div className="card-body">
            <h6 className="singlecardtext">{playlist.name}</h6>

            <p className="card-text">By {playlist.owner?.display_name || ""}</p>
          </div>
        </Link>
      </div>
    </Col>
  );
};

export default PlayListCard;

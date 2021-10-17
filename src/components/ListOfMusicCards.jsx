import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import LargeSingleMusicCard from "./LargeSingleMusicCard";

const ListOfMusicCards = (props) => {
  const [arrayofmusic, setArrayOfMusic] = useState([]);

  const fetchMusic = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.name}`
      );
      if (response.ok) {
        let res = await response.json();
        console.log(res);
        setArrayOfMusic((res.data).slice(0, 6));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMusic();
  });

  return (
    <>
    <div className="mb-3">
      <Row className="my-4 ml-3">
        <h3>{props.name}</h3>
      </Row>
      <Row noGutters className="listofcards">
        {arrayofmusic.map((element) => (
          <LargeSingleMusicCard
            img={element.album.cover}
            title={element.title}
            artist={element.artist.name}
          />
        ))}
      </Row>
    </div>  
      {/* <div className="d-flex ml-2 mt-4 mb-3 row">
        <div className="col-11">
          <h3 className="mb-0">Shows to try</h3>
          <h5>podcasts we think you'll get hooked on</h5>
        </div>
        <h5 className="col-1 mt-4">SEE ALL</h5>
      </div>
      <div className="d-flex justify-content-between ml-4">
        <div className="card music-card2">
          <img
            className="img-fluid align-self-center mt-3 pl-3 pr-3"
            src="./assets/The_Joe_Rogan_Experience_logo.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h6>The Joe Rogan Experience</h6>
            <p className="card-text">Joe Rogan</p>
          </div>
        </div>
        <div className="card music-card2 ml-3 d-none d-sm-block">
          <img
            className="img-fluid align-self-center mt-3 pl-3 pr-3"
            src="./assets/Drake_-_Take_Care_cover.jpg"
            alt="Card image cap"
          />
          <div className="card-body d-flex flex-column">
            <h6 className="align-self-left">Take Care</h6>
            <p className="card-text">Drake</p>
          </div>
        </div>
        <div className="card music-card2 ml-3 d-none d-md-block">
          <img
            className="img-fluid align-self-center mt-3 pl-3 pr-3"
            src="./assets/The_Blueprint.png"
            alt="Card image cap"
          />
          <div className="card-body d-flex flex-column">
            <h6 className="align-self-left">The Blueprint</h6>
            <p className="card-text">Jay-z</p>
          </div>
        </div>
        <div className="card music-card2 ml-3 d-none d-lg-block">
          <img
            className="img-fluid align-self-center mt-3 pl-3 pr-3"
            src="./assets/Kanyewest_collegedropout.jpg"
            alt="Card image cap"
          />
          <div className="card-body d-flex flex-column">
            <h6 className="align-self-left">College dropout</h6>
            <p className="card-text">Kanye</p>
          </div>
        </div>
        <div className="card music-card2 ml-3 d-none d-lg-block">
          <img
            className="img-fluid align-self-center mt-3 pl-3 pr-3"
            src="./assets/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png"
            alt="Card image cap"
          />
          <div className="card-body d-flex flex-column">
            <h6 className="align-self-left">To Pimp a butterfly</h6>
            <p className="card-text">Kendrick Lamar</p>
          </div>
        </div>
        <div className="card music-card2 ml-3 d-none d-xl-block">
          <img
            className="img-fluid align-self-center mt-3 pl-3 pr-3"
            src="./assets/Skepta_-_Ignorance_Is_Bliss.png"
            alt="Card image cap"
          />
          <div className="card-body d-flex flex-column">
            <h6 className="align-self-left">Ignorance Is Bliss</h6>
            <p className="card-text">Skepta</p>
          </div>
        </div>
        <div className="card music-card2 ml-3 d-none d-xl-block">
          <img
            className="img-fluid align-self-center mt-3 pl-3 pr-3"
            src="./assets/IllmaticNas.jpg"
            alt="Card image cap"
          />
          <div className="card-body d-flex flex-column">
            <h6 className="align-self-left">Illmatic</h6>
            <p className="card-text">Nas</p>
          </div>
        </div>
        <div className="card music-card2 ml-3 mr-3">
          <img
            className="img-fluid align-self-center mt-3 pl-3 pr-3"
            src="./assets/Ready_To_Die.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h6>Ready To Die</h6>
            <p className="card-text">Bigge Smalls</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ListOfMusicCards;

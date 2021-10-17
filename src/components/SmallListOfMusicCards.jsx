import { useEffect, useState } from "react";
import { Row } from "react-bootstrap"
import SmallSingleMusicCard from "./SmallSingleMusicCard";

const SmallListOfMusicCards = (props) => {

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
    }, []);
    return(
        <div className="mb-3">
      {/* <Row className="my-4 ml-3">
        <h3>{props.name}</h3>
      </Row> */}
      <Row noGutters className="listofcards">
        {arrayofmusic.map((element) => (
          <SmallSingleMusicCard
            img={element.album.cover}
            title={element.title}
            artist={element.artist.name}
          />
        ))}
      </Row>
    </div>  
    )
}

export default SmallListOfMusicCards

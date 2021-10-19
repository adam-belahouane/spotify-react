import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import LargeSingleMusicCard from "./LargeSingleMusicCard";

const SearchMusicCardList = ({name, setAudio, setTrackId}) => {
  const [arrayofmusic, setArrayOfMusic] = useState([]);

  const fetchMusic = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${name}`
      );
      if (response.ok) {
        let res = await response.json();
        console.log(res);
        setArrayOfMusic(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMusic();
  }, [name]);

  return (
    <>
    <div className="mb-3">
      <Row className="my-4 ml-3">
        <h3>{name}</h3>
      </Row>
      <Row noGutters className="listofsearchcards">
        {arrayofmusic.map((element) => (
          <LargeSingleMusicCard
            img={element.album.cover}
            title={element.title}
            artist={element.artist.name}
            albumId={element.album.id}
            artistId={element.artist.id}
            trackaudio={element.preview}
            setAudio={setAudio}
            setTrackId={setTrackId}
            trackId={element.id}
          />
        ))}
      </Row>
    </div>  
    </>
  );
};

export default SearchMusicCardList;
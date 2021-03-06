import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import LargeSingleMusicCard from "./LargeSingleMusicCard";

const ListOfMusicCards = ({name, setAudio, setTrackId}) => {
  const [arrayofmusic, setArrayOfMusic] = useState([]);
  const token = useSelector((state) => state.login.accesstoken)
  const ApiUrl = process.env.REACT_APP_API_URL

  const fetchAlbums = async () => {
    if(name === "new-releases"){
    try {
        const res = await fetch(`${ApiUrl}browse/${name}`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })

        if (res.ok) {
            const json = await res.json()
            console.log(json.albums.items);
            setArrayOfMusic(json.albums.items)
        }
    } catch (error) {
        console.log(error)
    }}else{
      try {
        const res = await fetch(`${ApiUrl}browse/featured-playlists?country=GB`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })

        if (res.ok) {
            const json = await res.json()
            console.log(json.playlists.items);
            setArrayOfMusic(json.playlists.items)
        }
    } catch (error) {
        console.log(error)
    }
    }
}

  useEffect(() => {
    fetchAlbums();
  }, [name]);

  return (
    <>
    <div className="mb-3">
      <Row noGutters className="listofcards">
        {arrayofmusic.map((element) => (
          <LargeSingleMusicCard
            img={element.images[1].url}
            title={element.name}
            artist={element.artists[0].name}
            albumId={element.id}
            artistId={element.artists[0].id}
          />
        ))}
      </Row>
    </div>  
    </>
  );
};

export default ListOfMusicCards;

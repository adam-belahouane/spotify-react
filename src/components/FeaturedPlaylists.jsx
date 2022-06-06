import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import PlayListCard from "./PlayListCard";

const FeaturedPlaylist = () => {
  const [arrayofmusic, setArrayOfMusic] = useState([]);
  const token = useSelector((state) => state.login.accesstoken)
  const ApiUrl = process.env.REACT_APP_API_URL

  const fetchPlaylists = async () => {
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

  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <>
    <div className="mb-3">
      <Row className="my-4 ml-3">
            <h3>Featured Playlist</h3>
      </Row>
      <Row noGutters className="listofcards">
        {arrayofmusic.map((element) => (
          <PlayListCard key={element.id} playlist={element}/>
        ))}
      </Row>
    </div>  
    </>
  );
};

export default FeaturedPlaylist;
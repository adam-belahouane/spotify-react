import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ArtistCard from "./ArtistCard";
import { Row } from "react-bootstrap";

const ArtistList = () => {
  const [arrayOfArtists, setArrayOfArtists] = useState([]);
  const token = useSelector((state) => state.login.accesstoken);
  const ApiUrl = process.env.REACT_APP_API_URL;
  const getArtist = async () => {
    try {
      const res = await fetch(
        `${ApiUrl}search?q=uk%20artists&type=artist`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (res.ok) {
        const json = await res.json();
        console.log(json.artists.items);
        setArrayOfArtists(json.artists.items);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArtist();
  }, []);
  return (
    <>
      <div className="mb-3">
        <Row className="my-4 ml-3">
          <h3>Popular Artists</h3>
        </Row>
        <Row noGutters className="listofcards">
          {arrayOfArtists.map((element) => (
            <ArtistCard key={element.id} artist={element} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default ArtistList;

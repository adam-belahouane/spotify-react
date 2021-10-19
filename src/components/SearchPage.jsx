import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SearchPage = () => {
  const params = useParams();

  const [arrayofmusic, setArrayOfMusic] = useState([]);

  const fetchMusic = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${params.query}`
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
  }, []);
  return (
    <div className="con">
      <h1>{params.query}</h1>
    </div>
  );
};

export default SearchPage;

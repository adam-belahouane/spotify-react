import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useParams } from "react-router";
import MyNavBar from "./MyNavBar";
import SearchMusicCardList from "./SearchMusicCardList";

const SearchPage = ({setTrackId}) => {
  const params = useParams();

  const[audio, setAudio]= useState("")


  return (
    <div className="con">
    <MyNavBar />
      <SearchMusicCardList setAudio={setAudio} setTrackId={setTrackId} name={params.query} />
      <ReactAudioPlayer 
        className="d-none"
        src={audio}
        controls
        autoPlay
        />
    </div>
  );
};

export default SearchPage;

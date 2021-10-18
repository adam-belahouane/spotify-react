import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import "../Spotify.css";
import ListOfMusicCards from "./ListOfMusicCards";
import MyNavBar from "./MyNavBar";
import SmallListOfMusicCards from "./SmallListOfMusicCards";


const Homepage = ({setTrackId}) => {

  const[audio, setAudio]= useState("")

  return (
    <div className="con text-white">
      <MyNavBar/>
      <div id="con5">
        <div className="ml-2">
          <h3>Good morning</h3>
        </div>
        <SmallListOfMusicCards name="J.cole"/>
        <SmallListOfMusicCards name="tupac"/>
        <ListOfMusicCards name="bill withers" setAudio={setAudio} setTrackId={setTrackId} />
        <ListOfMusicCards name="skepta" setAudio={setAudio} setTrackId={setTrackId} />
        <ListOfMusicCards name="kitaro" setAudio={setAudio} setTrackId={setTrackId}/>
        <ReactAudioPlayer 
        className="d-none"
        src={audio}
        controls
        autoPlay
        />
        
      </div>
    </div>
  );
};

export default Homepage;

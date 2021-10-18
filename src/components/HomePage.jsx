import { useState } from "react";
import "../Spotify.css";
import ListOfMusicCards from "./ListOfMusicCards";
import MyNavBar from "./MyNavBar";
import SmallListOfMusicCards from "./SmallListOfMusicCards";


const Homepage = () => {

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
        <ListOfMusicCards name="bill withers" setAudio={setAudio}/>
        <ListOfMusicCards name="skepta"/>
        <ListOfMusicCards name="kitaro"/>
        <audio>
          <source src={audio} type="audio/mp3"></source>
        </audio>
      </div>
    </div>
  );
};

export default Homepage;

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer"
import SideNav from "./components/SideNav";
import Homepage from "./components/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
import { useState } from "react";
import SearchPage from "./components/SearchPage";

const App = () => {
  const[trackId, setTrackId] = useState("2312047")
  const[audio, setAudio] = useState("")
  return (
    <>
      <Router>
        <SideNav  />
        <Switch>
          <Route path="/homepage" render={(props) => (<Homepage setTrackId={setTrackId} setAudio={setAudio} {...props} />)} />
          <Route path="/album/:albumId" component={AlbumPage} />
          <Route path="/artist/:artistId" component={ArtistPage} />
          <Route path="/search/:query" render={(props) => (<SearchPage setTrackId={setTrackId} setAudio={setAudio} {...props}/>)} />
          <Route render={() => <Redirect to="/homepage" />} />
        </Switch>
        <MusicPlayer id={trackId} srcaudio={audio} />
      </Router>
    </>
  );
}

export default App;

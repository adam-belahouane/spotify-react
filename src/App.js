import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MusicPlayer from "./components/MusicPlayer";
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
  return (
    <>
      <Router>
        <SideNav  />
        <Switch>
          <Route path="/homepage" render={(props) => (<Homepage setTrackId={setTrackId} {...props} />)} />
          <Route path="/album/:albumId" component={AlbumPage} />
          <Route path="/artist/:artistId" component={ArtistPage} />
          <Route path="/search/:query" render={(props) => (<SearchPage setTrackId={setTrackId} {...props}/>)} />
          <Route render={() => <Redirect to="/homepage" />} />
          <Homepage setTrackId={setTrackId} />
        </Switch>
        <MusicPlayer id={trackId} />
      </Router>
    </>
  );
}

export default App;

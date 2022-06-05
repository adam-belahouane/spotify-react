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
import { useState, useEffect } from "react";
import SearchPage from "./components/SearchPage";
import { useDispatch } from "react-redux";
import { setAccessTokenAction } from "./redux/actions";


const clientId = "bb017f5cd6144773b350a847fa205a51"
const clientSecret = process.env.REACT_APP_API_SECRET

const App = () => {
  const[trackId, setTrackId] = useState("2312047")
  const[audio, setAudio] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {

    handleLogin()

  }, [])

  const handleLogin = async () => {
    try {
      const str = clientId + ":" + clientSecret
      const buff = Buffer.from(str, 'utf-8');
      const base64 = buff.toString('base64');

      const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + base64
        },
        body: "grant_type=client_credentials"
      })

      if (res.status === 200) {
        const json = await res.json()
        dispatch(setAccessTokenAction(json.access_token))
      }
      console.log(res)

    } catch (error) {
      console.log(error)
    }
  }

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

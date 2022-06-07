import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer"
import SideNav from "./components/SideNav";
import Homepage from "./components/HomePage";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
import { useState, useEffect } from "react";
import SearchPage from "./components/SearchPage";
import { useDispatch } from "react-redux";
import { setAccessTokenAction } from "./redux/actions";
import Main from "./pages/Main";
import Playlistpage from "./pages/Playlistpage";


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
      
        <SideNav  />
        <Routes>
          <Route path="/" element={<Main setTrackId={setTrackId} setAudio={setAudio} />} />
          <Route path="/album/:albumId" element={<AlbumPage/>} />
          <Route path="/artist/:artistId" element={<ArtistPage/>} />
          <Route path="/playlist/:playlistId" element={<Playlistpage/>} />
          <Route path="/search/:query" render={(props) => (<SearchPage setTrackId={setTrackId} setAudio={setAudio} {...props}/>)} />
        </Routes>
        <MusicPlayer id={trackId} srcaudio={audio} />
     
    </>
  );
}

export default App;

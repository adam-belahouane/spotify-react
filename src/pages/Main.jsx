import "../Spotify.css";
import "../styles/Mainpage.css"
import LastestReleases from "../components/LastestReleases";
import FeaturedPlaylist from "../components/FeaturedPlaylists";
import ArtistList from "../components/ArtlistList";


const Main = ({setTrackId, setAudio}) => {

  return (
    <div className="con text-white">
      <div id="con5">
        <LastestReleases/>
        <ArtistList/>
        <FeaturedPlaylist/>
      </div>
    </div>
  );
};

export default Main;
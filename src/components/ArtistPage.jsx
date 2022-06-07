import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MyNavBar from "./MyNavBar";
import TrackList from "./TrackList";
import ListOfMusicCards from "./ListOfMusicCards";

const ArtistPage = () => {

  const params = useParams();
  const [album, setAlbum] = useState([]);
  const [albumL, setAlbumL] = useState([]);
  const [name, setName] = useState("");

  const fetchArtist = async(id) => {
    try {
      console.log(id)
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`)
      if(response.ok) {
        let data = await response.json()
        let secondReponse = await fetch(data.tracklist)
        let topSongsData = await secondReponse.json()
        console.log(topSongsData)
        console.log(data)
        setAlbum(data);
        setAlbumL(data.tracks.data);
        setName(data.name);
        console.log(name)
        console.log(albumL);
      }
    } catch (error) {
      console.log(error)
    }


  }

  useEffect(()=> {
    fetchArtist(params.artistId)
  }, [params.artistId])
  return (
    <>
      <div className="con">
        <div className="row ">
          <div className="col-12 col-md-8">
            <div className="row">
              <div id="pause">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={45}
                  height={45}
                  fill="currentColor"
                  className="bi bi-pause-circle-fill"
                  viewBox="0 0 16 16"
                  style={{
                    color: "#1ed760",
                    backgroundColor: "white",
                    borderRadius: 26,
                    borderColor: "rgb(64, 197, 64)",
                  }}
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
                </svg>
              </div>
              <div id="follow">
                <p style={{ position: "absolute", top: "20%", left: "15%" }}>
                  follow
                </p>
              </div>
              <div id="threeDots">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="currentColor"
                  className="bi bi-three-dots"
                  viewBox="0 0 16 16"
                  style={{ color: "grey" }}
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="listoftracks">
        {
          albumL.map((track) => (
            <TrackList number={albumL.indexOf(track) + 1} key={track.id} title={track.title} artist={track.artist.name} duration={track.duration}  />
          ))
        }

      </div>
      </div>
    </>
  );
};

export default ArtistPage;

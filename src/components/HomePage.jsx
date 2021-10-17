import "../Spotify.css";
import ListOfMusicCards from "./ListOfMusicCards";
import MyNavBar from "./MyNavBar";


const Homepage = () => {
  return (
    <div className="con text-white">
      <MyNavBar/>
      <div id="con5">
        <div className="ml-4">
          <h3>Good morning</h3>
        </div>
        <div className="d-flex justify-content-between">
          <div className="music-card ml-4">
            <div className="media d-flex">
              <img
                src="./assets/JColeKOD.jpg"
                className="mr-3 img-fluid img1"
                alt="..."
              />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">KOD</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-md-block">
            <div className="media gm flex-fill">
              <img
                src="./assets/Alleyezonme.jpg"
                className="mr-3 img-fluid img1"
                alt="..."
              />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">All eyez on me</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-lg-block">
            <div className="media gm">
              <img
                src="./assets/Dave_Psychodrama.jpeg"
                className="mr-3 img-fluid img1"
                alt="..."
              />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Psychodrama</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-xl-block">
            <div className="media gm">
              <img
                src="./assets/Ready_To_Die.jpg"
                className="mr-3 img-fluid img1"
                alt="..."
              />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Ready to die</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 mr-3 d-none d-sm-block">
            <div className="media gm">
              <img
                src="./assets/sad xxxt.jfif"
                className="mr-3 img-fluid img1"
                alt="..."
              />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Sad</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="music-card ml-4">
            <div className="media gm">
              <img
                src="./assets/IllmaticNas.jpg"
                className="mr-3 img-fluid img1"
                alt="..."
              />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Illmatic</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-md-block">
            <div className="media gm">
              <img
                src="./assets/J._Cole_—_4_Your_Eyez_Only_album_cover.jpg"
                className="mr-3 img-fluid img1"
                alt="..."
              />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">4 your eyez only</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-lg-block">
            <div className="media gm">
              <img
                src="./assets/220px-Juice_Wrld_-_Legends_Never_Die.png"
                className="mr-3 img-fluid img1"
                alt="..."
              />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Legends never die</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-xl-block">
            <div className="media gm">
              <img
                src="./assets/Billie_Eilish_-_Don't_Smile_at_Me.png"
                className="mr-3 img-fluid img1"
                alt="..."
              />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Don't smile at me</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 mr-3 d-none d-sm-block">
            <div className="media gm">
              <img
                src="./assets/Konnichiwa_by_Skepta_cover.jpg"
                className="mr-3 img-fluid img1"
                alt="..."
              />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Konnichiwa</h6>
              </div>
            </div>
          </div>
        </div>
        <ListOfMusicCards name="bill withers"/>
        <ListOfMusicCards name="skepta"/>
      </div>
    </div>
  );
};

export default Homepage;

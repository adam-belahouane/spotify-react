import "../Spotify.css";
import ListOfMusicCards from "./ListOfMusicCards";
import MyNavBar from "./MyNavBat";


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
        <div className="d-flex ml-2 mt-4 row">
          <h3 className="col-11">Recently played</h3>
          <h5 className="col-1 d-none">SEE ALL</h5>
        </div>
        <div className="d-flex justify-content-between ml-4">
          <div className="card music-card2">
            <img
              className="img-fluid align-self-center mt-3 pl-3 pr-3"
              src="./assets/liked-songs-300.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h6>Liked Songs</h6>
              <p className="card-text">400 songs</p>
            </div>
          </div>
          <div className="card music-card2 ml-3 d-none d-sm-block">
            <img
              className="img-fluid align-self-center mt-3 pl-3 pr-3"
              src="./assets/Skepta_-_Ignorance_Is_Bliss.png"
              alt="Card image cap"
            />
            <div className="card-body d-flex flex-column">
              <h6 className="align-self-left">Ignorance IS Bliss</h6>
              <p className="card-text">Skepta</p>
            </div>
          </div>
          <div className="card music-card2 ml-3 d-none d-md-block">
            <img
              className="img-fluid align-self-center mt-3 pl-3 pr-3"
              src="./assets/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png"
              alt="Card image cap"
            />
            <div className="card-body d-flex flex-column">
              <h6 className="align-self-left">To Pimp a butterfly</h6>
              <p className="card-text">Kendrick Lamar</p>
            </div>
          </div>
          <div className="card music-card2 ml-3 d-none d-lg-block">
            <img
              className="img-fluid align-self-center mt-3 pl-3 pr-3"
              src="./assets/Ready_To_Die.jpg"
              alt="Card image cap"
            />
            <div className="card-body d-flex flex-column">
              <h6 className="align-self-left">Ready to die</h6>
              <p className="card-text">Bigge Smalls</p>
            </div>
          </div>
          <div className="card music-card2 ml-3 d-none d-lg-block">
            <img
              className="img-fluid align-self-center mt-3 pl-3 pr-3"
              src="./assets/Landlord_cover.jpg"
              alt="Card image cap"
            />
            <div className="card-body d-flex flex-column">
              <h6 className="align-self-left">Landlord</h6>
              <p className="card-text">Giggs</p>
            </div>
          </div>
          <div className="card music-card2 ml-3 d-none d-xl-block">
            <img
              className="img-fluid align-self-center mt-3 pl-3 pr-3"
              src="./assets/Konnichiwa_by_Skepta_cover.jpg"
              alt="Card image cap"
            />
            <div className="card-body d-flex flex-column">
              <h6 className="align-self-left">Konnichiwa</h6>
              <p className="card-text">Skepta</p>
            </div>
          </div>
          <div className="card music-card2 ml-3 d-none d-xl-block">
            <img
              className="img-fluid align-self-center mt-3 pl-3 pr-3"
              src="./assets/Billie_Eilish_-_Don't_Smile_at_Me.png"
              alt="Card image cap"
            />
            <div className="card-body d-flex flex-column">
              <h6 className="align-self-left">Don't Smile at me</h6>
              <p className="card-text">Billie Eilisht</p>
            </div>
          </div>
          <div className="card music-card2 ml-3 mr-3">
            <img
              className="img-fluid align-self-center mt-3 pl-3 pr-3"
              src="./assets/J._Cole_—_4_Your_Eyez_Only_album_cover.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h6>4 Your Eyez Only</h6>
              <p className="card-text">J.cole</p>
            </div>
          </div>
        </div>
        <ListOfMusicCards name="skepta"/>
      </div>
    </div>
  );
};

export default Homepage;

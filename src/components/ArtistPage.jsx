import { useEffect } from "react";
import { useParams } from "react-router";

const ArtistPage = () => {
  const params = useParams()

  const fetchArtist = async(id) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`)
      if(response.ok) {
        let data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }


  }

  useEffect(()=> {
    fetchArtist(params.artistId)
  }, [])
  return (
    <>
      ;
      <div className="con">
        <div className="row" style={{ position: "relative" }}>
          <a href="homepage.html">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
              id="arrow-left"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </a>
          <a href="Album page.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
              id="arrow-right"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
          <div
            className="container-fluid"
            style={{ padding: "0%", height: 330 }}
          >
            <img
              src="queen-cover.png"
              className="img-fluid"
              alt="..."
              id="queen-cover"
            />
            <div className="card mb-3" id="verified">
              <div
                className="row no-gutters"
                style={{ alignItems: "baseline" }}
              >
                <div className="col-1">
                  <img
                    src="Schermata 2021-09-07 alle 00.28.12.png"
                    alt="verified"
                    style={{ width: 15, height: 15 }}
                  />
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                  ></path>
                </div>
                <div className="col-10">
                  <div className="card-body" id="sidebarBody">
                    <p className="card-title" style={{ padding: "0%" }}>
                      Verified Artist
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1 id="queen">Queen</h1>
            <p id="queenListeners" style={{ fontSize: 10 }}>
              37,120,733 monthly listeners
            </p>
          </div>
          <div
            className="dropdown d-flex justify-content-end"
            style={{ marginTop: 10 }}
          >
            <button
              className="btn btn-dark  badge-pill dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                id="profilePic"
                src="./assets/pngfind.com-placeholder-png-6104451.png"
              />
              Username
            </button>
            <div
              className="dropdown-menu bg-dark"
              aria-labelledby="dropdownMenu2"
            >
              <button
                className="dropdown-item topdropdwon text-white"
                type="button"
              >
                Account
              </button>
              <button
                className="dropdown-item topdropdwon text-white"
                type="button"
              >
                Profile
              </button>
              <button
                onclick="location.href='https://www.spotify.com/us/premium/'"
                className="dropdown-item topdropdwon text-white"
                type="button"
              >
                Upgrade to Permium
              </button>
              <button
                className="dropdown-item topdropdwon text-white"
                type="button"
              >
                Settings
              </button>
              <div className="dropdown-divider" />
              <button
                onclick="location.href='https://support.spotify.com/us/article/updating-spotify/'"
                className="dropdown-item topdropdwon text-white"
                type="button"
              >
                Update Spotify now
              </button>
              <button
                onclick="location.href='profile.html'"
                className="dropdown-item  topdropdwon text-white"
                type="button"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
        <div className="row gradBg">
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
            <h4>Popular</h4>
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="card mb-3">
                      <div className="row no-gutters alignedCards">
                        <div className="col-2 songImg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={13}
                            fill="rgb(64, 197, 64)"
                            className="bi bi-reception-3"
                            viewBox="0 0 16 16"
                            style={{ display: "-ms-inline-flexbox" }}
                          >
                            <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          <img
                            src="another.jpeg"
                            alt="..."
                            style={{ width: 35, height: 35, marginLeft: 4 }}
                          />
                        </div>
                        <div className="col-10">
                          <div className="card-body">
                            <p
                              className="card-title"
                              style={{ color: "#1ed760" }}
                            >
                              Another One Bites The Dust - Remastered 2011
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td>1,013,328,772</td>
                  <td>3:34</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="card mb-3">
                      <div className="row no-gutters alignedCards">
                        <div className="col-2 songImg">
                          2{" "}
                          <img src="img/bohemian.jpeg" alt="..." id="cardImg" />
                        </div>
                        <div className="col-10">
                          <div className="card-body">
                            <p className="card-title">
                              Bohemian Rhapsody - Remastered 2011
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td>1,497,986,258</td>
                  <td>5:54</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="card mb-3">
                      <div className="row no-gutters alignedCards">
                        <div className="col-2 songImg">
                          3{" "}
                          <img
                            src="img/don'tstopmenow.jpg"
                            alt="..."
                            id="cardImg"
                          />
                        </div>
                        <div className="col-10">
                          <div className="card-body">
                            <p className="card-title">
                              Don't Stop Me Now - Remastered 2011
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td>1,063,959,983</td>
                  <td>3:29</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="card mb-3">
                      <div className="row no-gutters alignedCards">
                        <div className="col-2 songImg">
                          4{" "}
                          <img
                            src="img/underpressure.png"
                            alt="..."
                            id="cardImg"
                          />
                        </div>
                        <div className="col-10">
                          <div className="card-body">
                            <p className="card-title">
                              Under Pressure - Remastered 2011
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td>900,225,096</td>
                  <td>4:08</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="card mb-3">
                      <div className="row no-gutters alignedCards">
                        <div className="col-2 songImg">
                          5{" "}
                          <img
                            src="img/wewillrockyou.jpeg"
                            id="cardImg"
                            alt="..."
                          />
                        </div>
                        <div className="col-10">
                          <div className="card-body">
                            <p className="card-title">
                              We Will Rock You - Remastered
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <td>705,225,721</td>
                  <td>2:02</td>
                </tr>
              </tbody>
            </table>
            <p className="seeMore">see more</p>
          </div>
          <div className="col-12 col-md-4">
            <div className="row" style={{ height: 85 }} />
            <h4>Artist pick</h4>
            <div className="card mb-3" style={{ maxWidth: 200 }}>
              <div className="row no-gutters alignedCards">
                <div className="col-4">
                  <img
                    src="img/artistpick.jpg"
                    alt="..."
                    style={{ width: 40, height: 40 }}
                  />
                </div>
                <div className="col-8" style={{ position: "relative" }}>
                  <div className="card-body">
                    <p style={{ fontSize: 10, position: "absolute", top: 5 }}>
                      Posted by Queen
                    </p>
                    <p
                      className="card-title"
                      style={{ fontSize: 10, fontWeight: "bold" }}
                    >
                      Queen Best of
                    </p>
                    <p style={{ fontSize: 10 }}>Playlist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistPage;

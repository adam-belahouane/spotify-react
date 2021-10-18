import { useEffect } from "react"
import { useParams } from "react-router"

const AlbumPage = () => {

const params = useParams()

const fetchAlbum = async (id) => {
    try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
        if(response.ok) {
            let data = await response.json()
            console.log(data)
        }
    } catch (error) {
        console.log(error)
    }

}

useEffect(() => {
    fetchAlbum(params.albumId)
}, [])

    return(
        <>
        ;<>
  <div className="con">
    
    <div className="px-0 container-fluid">
      {/* -----<album>  page start------*/}
      <section id="album-section">
        <div className="container-fluid" id="pink-container">
          <div className="row">
            <div className="ml-2 sticky-top mt-2">
              <button
                onclick="location.href='homepage.html'"
                className="btn btn-btn text-white round"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 100 100"
                  x="0px"
                  y="0px"
                  fill="white"
                  transform="rotate(180)"
                >
                  <path d="M24.42,99.16a2.84,2.84,0,0,0,2,.84,2.74,2.74,0,0,0,2-.84L75.58,52a2.81,2.81,0,0,0,0-4L28.42.83a2.83,2.83,0,1,0-4,4L69.58,50,24.42,95.16A2.82,2.82,0,0,0,24.42,99.16Z" />
                </svg>
              </button>
              <button
                onclick="location.href='artist.html'"
                className="btn btn-btn  text-white round"
                type="button"
                style={{ width: 40 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 100 100"
                  x="0px"
                  y="0px"
                  fill="white"
                >
                  <path d="M24.42,99.16a2.84,2.84,0,0,0,2,.84,2.74,2.74,0,0,0,2-.84L75.58,52a2.81,2.81,0,0,0,0-4L28.42.83a2.83,2.83,0,1,0-4,4L69.58,50,24.42,95.16A2.82,2.82,0,0,0,24.42,99.16Z" />
                </svg>
              </button>
            </div>
            {/* -----end of arrows---------------- */}
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
            </div>{" "}
            {/* end of dropdown menu  */}
          </div>{" "}
          {/*  */}
          <div className="row" id="image-align">
            <div className="col-4 col-sm-4 col-lg-3 col-xl-3">
              <img src="./Asset/Bohemain.jpg" className="img-fluid" />
            </div>
            <div className="albumTextContainer col-8 col-sm-8 col-lg-9 col-xl-9">
              <p className="display-7 d-none d-sm-none d-md-flex">
                <small style={{ fontWeight: "bold" }}>ALBUM</small>
                <strong
                  id="fontfirst"
                  className="align-self-center"
                  style={{ fontSize: 30 }}
                >
                  Bohemian Rhapsody(The Original Soundtrack)
                </strong>
                <small style={{ fontSize: 15 }}>
                  <strong>Queen •</strong> 2018 • 22 songs, 1 hr 19mins
                </small>
              </p>
            </div>
          </div>
        </div>{" "}
        {/*  */}
      </section>
      {/* Table section */}
      <section id="table-section">
        <div id="color1">
          <div className="buttonBox">
            <button className="button play" style={{ display: "inline" }} />
          </div>
          <div id="heart">
            <i className="bi-bi bi-heart" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="currentColor"
              color="white"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </div>
          <div id="heart">
            <i className="bi-bi bi-three-dots " />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="currentColor"
              color="white"
              className="bi bi-three-dots "
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
        </div>
        <div className="container-fluid" id="table-container">
          <table className="table table-dark table-borderless">
            <thead>
              <tr>
                <th scope="col" style={{ width: "3%" }} className="text-muted">
                  #
                </th>
                <th scope="col" colSpan={2} className="text-muted">
                  TITLE
                </th>
                <th scope="col">
                  <i className="bi bi-stopwatch text-muted" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={34}
                    height={26}
                    fill="currentColor"
                    className="bi-bi bi-stopwatch text-muted"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td colSpan={2}>20th Century Fox Firm Fare</td>
                <td>0:25</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td colSpan={2}>Somebody To Love</td>
                <td>4:55</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan={2}>Doing All Right - ...Revisited</td>
                <td>3:16</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td colSpan={2}>Keep Yourself Alive - Live At The Rainbow</td>
                <td>3:56</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td colSpan={2}>Killer Queen</td>
                <td>2:59</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td colSpan={2}>Fat Bottomed Birls - Live In Paris</td>
                <td>4:37</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td colSpan={2}>Bohemian Rhapsody</td>
                <td>5:54</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td colSpan={2}>
                  Now I'm Here - Live At The Hammersmith Odeon
                </td>
                <td>2:43</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td colSpan={2}>Crazy Little Thing Called Love</td>
                <td>4mins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
  {/* end of main row */}
  {/* end of main container  */}
</>

      

    

    </>
    )
}

export default AlbumPage
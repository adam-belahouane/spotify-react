import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import MyNavBar from "./MyNavBar";

const AlbumPage = () => {
  const params = useParams();
  const[album, setAlbum] = useState([])
  const[albumL, setAlbumL] = useState(null)

  const fetchAlbum = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setAlbum(data)
        await setAlbumL(data.tracks.data.length)
        console.log(albumL)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbum(params.albumId);
    
  }, []);

  return (
    <div className="con">
      <MyNavBar />
      
        {/* -----<album>  page start------*/}
        <Row className="text-white">
            <Col md={3}><img src={album.cover_xl} className="img-fluid" /></Col>
            <Col md={9}>
            <Row>
                <h3>ALBUM</h3>

            </Row>
            <Row>
            <strong
                    id="fontfirst"
                    className="align-self-center"
                    style={{ fontSize: 30 }}
                  >
                    {album.title}
                  </strong>
            </Row>
            <Row>
            <small style={{ fontSize: 15 }}>
                    <strong>{album.artist.name} •</strong> {album.release_date} • {albumL} songs, 1 hr 19mins
                  </small>
            </Row>
            </Col>
        </Row>
        
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
                  <th
                    scope="col"
                    style={{ width: "3%" }}
                    className="text-muted"
                  >
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
  );
};

export default AlbumPage;

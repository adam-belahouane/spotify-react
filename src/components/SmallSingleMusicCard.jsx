import { Col } from "react-bootstrap"

const SmallSingleMusicCard = ({ img, title, artist }) => {
    return(
        <Col xs={12} sm={6} md={4} xl={3} className="px-2">
        <div className="music-card ">
            <div className="media ">
              <img
                src={img}
                className="img-fluid img1"
                alt="..."
              />
              <div className="align-self-center">
                <h6 className="pl-2 singlecardtext">{title}</h6>
              </div>
            </div>
          </div>
          </Col>
    )
}

export default SmallSingleMusicCard
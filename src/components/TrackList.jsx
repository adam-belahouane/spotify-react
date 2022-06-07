import { Col, Row } from "react-bootstrap"

const TrackList = (props) => {
    const durationCalculator = (durationInMilliseconds) => {
        let duration = durationInMilliseconds
        let mins = Math.floor(duration / 60000)
        let secs = ((duration % 60000) / 1000).toFixed(0)
        return mins + ":" + (secs < 10 ? '0' : '') + secs
    }
    return(
        <Row className="mb-2">
            <Col md={11} className="d-flex flex-row align-items-center">
                <div className="tracklist-number-container">
                    <div className="tracklist-number">{props.number}</div>
                </div>
                <div className="tracklist-name-artist">
                    <div className="tracklist-name">{props.title}</div>
                    <div className="tracklist-artist">{props.artist}</div>
                </div>
            </Col>
            <Col md={1}>{durationCalculator(props.duration)}</Col>
        </Row>
    )
}

export default TrackList
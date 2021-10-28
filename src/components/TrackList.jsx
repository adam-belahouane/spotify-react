import { Col, Row } from "react-bootstrap"

const TrackList = (props) => {
    return(
        <Row>
            <Col md={1}>{props.number}</Col>
            <Col md={10}>
                <Row>{props.title}</Row>
                <Row>{props.artist}</Row>
            </Col>
            <Col md={1}>{Math.floor(props.duration/60)+ ":" +props.duration%60}</Col>
        </Row>
    )
}

export default TrackList
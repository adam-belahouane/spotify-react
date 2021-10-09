import "../Style.css"

export default SingleMusicCard1 = () => {
    return (
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
    )
}
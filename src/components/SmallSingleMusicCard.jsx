const SmallSingleMusicCard = ({ img, title, artist }) => {
    return(
        <div className="music-card ml-3 d-none d-md-block">
            <div className="media gm flex-fill">
              <img
                src={img}
                className="mr-3 img-fluid img1"
                alt="..."
              />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">{title}</h6>
              </div>
            </div>
          </div>
    )
}

export default SmallSingleMusicCard
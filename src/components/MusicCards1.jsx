import "../Spotify.css"
import SingleMusicCard1 from "./SingleMusicCard1"
import { useEffect, useState } from "react";

export default MusicCards1 = () => {

  const [musicCard1, setMusicCard1] = useState([])

  useEffect(() => {
    const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"

    const fetchMusic = async () => {
      try {
        let response = await fetch(url, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDgiLCJpYXQiOjE2MzMwMDM5MjEsImV4cCI6MTYzNDIxMzUyMX0.OhncilzE54YO6RtM09jbHh1Dd-2eELntDIQ7MfPkyQ8"
          }
        })
        if(response.ok) {
          let data = await response.json()
          setMusicCard1(data)
          console.log(musicCard1)
        }
        
      } catch (error) {
        console.log(error)
      }
      
    }

    fetchMusic()
    
  })
    return(
        <SingleMusicCard1/>
    )
}
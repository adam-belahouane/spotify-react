const AlbumPage = () => {
    return(
        <>
        <div class="col-12 col-md-10 px-0 con1" id="#">
   
            <div class="px-0 container-fluid">
              
              <section id="album-section">
                <div class="container-fluid" id="pink-container">
                  <div class="row">
                    
                    <div class="ml-2 sticky-top mt-2">
                    <button onclick="location.href='homepage.html'" class="btn btn-btn text-white round" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 100 100"
                        x="0px"
                        y="0px"
                        fill="white"
                        transform="rotate(180)"
                      >
                        <path
                          d="M24.42,99.16a2.84,2.84,0,0,0,2,.84,2.74,2.74,0,0,0,2-.84L75.58,52a2.81,2.81,0,0,0,0-4L28.42.83a2.83,2.83,0,1,0-4,4L69.58,50,24.42,95.16A2.82,2.82,0,0,0,24.42,99.16Z"
                        />
                      </svg>
                    </button>
                    <button  onclick="location.href='artist.html'"class="btn btn-btn  text-white round" type="button" style="width: 40px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 100 100"
                        x="0px"
                        y="0px"
                        fill="white"
                      >
                        <path
                          d="M24.42,99.16a2.84,2.84,0,0,0,2,.84,2.74,2.74,0,0,0,2-.84L75.58,52a2.81,2.81,0,0,0,0-4L28.42.83a2.83,2.83,0,1,0-4,4L69.58,50,24.42,95.16A2.82,2.82,0,0,0,24.42,99.16Z"
                        />
                      </svg>
                    </button>
                    </div>
                   
  
                    <div
                      class="dropdown d-flex justify-content-end"
                      style="margin-top: 10px"
                    >
                      <button
                        class="btn btn-dark  badge-pill dropdown-toggle"
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
                        class="dropdown-menu bg-dark"
                        aria-labelledby="dropdownMenu2"
                      >
                        <button class="dropdown-item topdropdwon text-white" type="button">
                          Account
                        </button>
                        <button class="dropdown-item topdropdwon text-white" type="button">
                          Profile
                        </button>
                        <button  onclick="location.href='https://www.spotify.com/us/premium/'" class="dropdown-item topdropdwon text-white" type="button">
                          Upgrade to Permium
                        </button>
                        <button class="dropdown-item topdropdwon text-white" type="button">
                          Settings
                        </button>
                        <div class="dropdown-divider"></div>
                        <button onclick="location.href='https://support.spotify.com/us/article/updating-spotify/'" class="dropdown-item topdropdwon text-white" type="button">
                          Update Spotify now
                        </button>
                       <button onclick="location.href='profile.html'" class="dropdown-item  topdropdwon text-white" type="button">Log out</button>
                      </div>
                    </div> 
                  </div> 
                  
                  <div class="row" id="image-align">
                    <div class="col-4 col-sm-4 col-lg-3 col-xl-3">
                      <img src="./Asset/Bohemain.jpg" class="img-fluid" />
                    </div>
                    <div
                      class="albumTextContainer col-8 col-sm-8 col-lg-9 col-xl-9"
                    >
                      <p class="display-7 d-none d-sm-none d-md-flex">
                        <small style="font-weight: bold;">ALBUM</small>
                        <strong id="fontfirst" class="align-self-center" style="font-size: 30px;">Bohemian Rhapsody(The Original Soundtrack)</strong>
  
                        <small style="font-size: 15px">
                          <strong>Queen &#8226</strong> 2018 &#8226; 22 songs, 1 hr 19mins</small>
                      </p>
                    </div>
                  </div>
                </div> 
              </section>

              
              <section id="table-section">
                <div id="color1">
                  <div class="buttonBox">
                    <button class="button play" style="display: inline"></button>
                  </div>
                  <div id="heart">
                    <i class="bi-bi bi-heart"></i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      color="white"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                  </div>
                  <div id="heart">
                    <i class="bi-bi bi-three-dots "></i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      color="white"
                      class="bi bi-three-dots "
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                      />
                    </svg>
                  </div>
                </div>
  
                <div class="container-fluid" id="table-container">
                  <table class="table table-dark table-borderless">
                    <thead>
                      <tr>
                        <th scope="col" style="width: 3%" class="text-muted">#</th>
                        <th scope="col" colspan="2" class="text-muted">TITLE</th>
                        <th scope="col">
                          <i class="bi bi-stopwatch text-muted"></i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="26"
                            fill="currentColor"
                            class="bi-bi bi-stopwatch text-muted"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"
                            />
                            <path
                              d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"
                            />
                          </svg>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      <tr>
                        <th scope="row">1</th>
                        <td colspan="2">20th Century Fox Firm Fare</td>
                        <td>0:25</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td colspan="2">Somebody To Love</td>
                        <td>4:55</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Doing All Right - ...Revisited</td>
                        <td>3:16</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td colspan="2">Keep Yourself Alive - Live At The Rainbow</td>
                        <td>3:56</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td colspan="2">Killer Queen</td>
                        <td>2:59</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td colspan="2">Fat Bottomed Birls - Live In Paris</td>
                        <td>4:37</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td colspan="2">Bohemian Rhapsody</td>
                        <td>5:54</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td colspan="2">Now I'm Here - Live At The Hammersmith Odeon</td>
                        <td>2:43</td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td colspan="2">Crazy Little Thing Called Love</td>
                        <td>4mins</td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          
        </div>
      

    

    </>
    )
}

export default AlbumPage
export const SET_ACCESSTOKEN = "SET_ACCESSTOKEN";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const PLAY_PAUSE = "PLAY_PAUSE"

export const setAccessTokenAction = (data) => ({
  type: SET_ACCESSTOKEN,
  payload: data,
});

export const setCurrentSongAction = (track) => ({
  type: SET_CURRENT_SONG,
  payload: track,
});

export const playPause = () => ({
  type: PLAY_PAUSE,
});

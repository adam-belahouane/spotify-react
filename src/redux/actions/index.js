export const SET_ACCESSTOKEN = "SET_ACCESSTOKEN";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const PLAY_PAUSE = "PLAY_PAUSE"
export const SET_QUEUE = "SET_QUEUE"
export const ADD_TRACK_TO_FAVOURITES = "ADD_TRACK_TO_FAVOURITES"
export const REMOVE_TRACK_FROM_FAVOURITES = "REMOVE_TRACK_FROM_FAVOURITES"
export const ADD_PLAYLIST_TO_FAVOURITES = "ADD_PLAYLIST_TO_FAVOURITES"
export const REMOVE_PLAYLIST_FROM_FAVOURITES = "REMOVE_PLAYLIST_FROM_FAVOURITES"
export const ADD_ALBUM_TO_FAVOURITES = "ADD_ALBUM_TO_FAVOURITES"
export const REMOVE_ALBUM_FROM_FAVOURITES = "REMOVE_ALBUM_FROM_FAVOURITES"
export const ADD_ARTIST_TO_FAVOURITES = "ADD_ARTIST_TO_FAVOURITES"
export const REMOVE_ARTIST_FROM_FAVOURITES = "REMOVE_ARTIST_FROM_FAVOURITES"

export const addTrackToFavouritesAction = (track) => ({
  type: ADD_TRACK_TO_FAVOURITES,
  payload: track,
})

export const removeTrackFromFavouritesAction = (track) => ({
  type: REMOVE_TRACK_FROM_FAVOURITES,
  payload: track,
})

export const addPlaylistToFavouritesAction = (playlist) => ({
  type: ADD_PLAYLIST_TO_FAVOURITES,
  payload: playlist,
})

export const removePlaylistFromFavouritesAction = (playlist) => ({
  type: REMOVE_PLAYLIST_FROM_FAVOURITES,
  payload: playlist,
})

export const addAlbumToFavouritesAction = (album) => ({
  type: ADD_ALBUM_TO_FAVOURITES,
  payload: album,
})

export const removeAlbumFromFavouritesAction = (album) => ({
  type: REMOVE_ALBUM_FROM_FAVOURITES,
  payload: album,
})

export const addArtistToFavouritesAction = (artist) => ({
  type: ADD_ARTIST_TO_FAVOURITES,
  payload: artist,
})

export const removeArtistFromFavouritesAction = (artist) => ({
  type: REMOVE_ARTIST_FROM_FAVOURITES,
  payload: artist,
})

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

export const setQueueAction = (queuedTracks) => ({
  type: SET_QUEUE,
  payload: queuedTracks
})

import { ADD_ALBUM_TO_FAVOURITES, ADD_ARTIST_TO_FAVOURITES, ADD_PLAYLIST_TO_FAVOURITES, ADD_TRACK_TO_FAVOURITES, REMOVE_ALBUM_FROM_FAVOURITES, REMOVE_ARTIST_FROM_FAVOURITES, REMOVE_PLAYLIST_FROM_FAVOURITES, REMOVE_TRACK_FROM_FAVOURITES } from "../actions"
import { initialState } from "../store"


export const favouritesReducer = (state = initialState.favourites, action) => {

    switch (action.type) {
        case ADD_TRACK_TO_FAVOURITES:
            return {
                ...state,
                tracks: [...state.tracks, action.payload]
            }
        case REMOVE_TRACK_FROM_FAVOURITES:
            const modifiedTracks = [...state.tracks.filter(track => track.id !== action.payload.id)]
            return {
                ...state,
                tracks: modifiedTracks
            }
        case ADD_ALBUM_TO_FAVOURITES:
            return {
                ...state,
                albums: [...state.albums, action.payload]
            }
        case REMOVE_ALBUM_FROM_FAVOURITES:
            const modifiedAlbums = [...state.albums.filter(album => album.id !== action.payload.id)]
            return {
                ...state,
                albums: modifiedAlbums
            }
        case ADD_PLAYLIST_TO_FAVOURITES:
            return {
                ...state,
                playlists: [...state.playlists, action.payload]
            }
        case REMOVE_PLAYLIST_FROM_FAVOURITES:
            const modifiedPlaylists = [...state.playlists.filter(playlist => playlist.id !== action.payload.id)]
            return {
                ...state,
                playlists: modifiedPlaylists
            }
        case ADD_ARTIST_TO_FAVOURITES:
            return {
                ...state,
                artists: [...state.artists, action.payload]
            }
        case REMOVE_ARTIST_FROM_FAVOURITES:
            const modifiedArtists = [...state.artists.filter(artist => artist.id !== action.payload.id)]
            return {
                ...state,
                artists: modifiedArtists
            }
        default:
            return state

    }
}
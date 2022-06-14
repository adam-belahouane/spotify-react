import { initialState } from "../store";

export const mediaReducer = (state = initialState.media, action) => {

    switch (action.type) {
        case "SET_CURRENT_SONG":
            return {
                ...state,
                selectedSong: { ...action.payload }
            }

        case "PLAY_PAUSE":
            return {
                ...state,
                play: !state.play
            }
        case "SET_QUEUE":
            return {
                ...state,
                queue: [...action.payload]
            }

        default:
            return state

    }
}
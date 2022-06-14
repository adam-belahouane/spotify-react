import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loginReducer } from "../reducers/login";
import { encryptTransform } from "redux-persist-transform-encrypt";
import initialSong from "./initialSong.json"
import initialQueue from "./initialQueue.json"
import { mediaReducer } from "../reducers/media";

const aComposeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  login: {
    accesstoken: "",
  },
  media: {
    selectedSong: initialSong,
    queue: initialQueue,
    play: false,
  },
};

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_ENCRYPT_KEY,
    }),
  ],
};

const mainReducer = combineReducers({
  login: loginReducer,
  media: mediaReducer
});

const persistedMainReducer = persistReducer(persistConfig, mainReducer);

const configureStore = createStore(
  persistedMainReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);

export default configureStore;

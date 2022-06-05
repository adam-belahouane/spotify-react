import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loginReducer } from "../reducers/login";
import { encryptTransform } from "redux-persist-transform-encrypt";

const aComposeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  login: {
      accesstoken: ""
  }
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
});

const persistedMainReducer = persistReducer(persistConfig, mainReducer);

const configureStore = createStore(
  persistedMainReducer,
  initialState,
  aComposeThatAlwaysWorks(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);

export default configureStore;
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { videoDetailsReducer, videoReducer } from "./reducers/videoReducer";

const initialState = {};

const reducer = combineReducers({
  listVideos: videoReducer,
  detailsVideo: videoDetailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

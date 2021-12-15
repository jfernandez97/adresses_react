import { combineReducers, createStore } from "redux";

import PlaceReducers from "./PlaceReducers";
const reducers = combineReducers({
    place: PlaceReducers
});

export default createStore(reducers)
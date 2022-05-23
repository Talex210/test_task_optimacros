import {combineReducers, createStore} from "redux";
import ListElementsReducer from "./ListElementsReducer";

let reducers = combineReducers({
    listElements: ListElementsReducer
})

let store = createStore(reducers);

export default store;
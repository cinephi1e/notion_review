import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import review from "./modules/review";
import addreview from "./modules/addreview";
import comment from "./modules/comment";
import thunk from "redux-thunk"

const rootReducer = combineReducers({review, addreview, comment});
const middleweares = [thunk];
const enhancer = applyMiddleware(...middleweares);
const store = createStore(rootReducer, enhancer);

export default store;
import { combineReducers } from "redux";
import shopReducer from "./redusers/shopping-reducer";

const rootReducer = combineReducers({ shop: shopReducer });

export default rootReducer;

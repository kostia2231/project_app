import { combineReducers } from "redux";
import shopReducer from "./redusers/shopping-reducer";
import apiReducer from "./redusers/api-reducer";

const rootReducer = combineReducers({ shop: shopReducer, api: apiReducer });

export default rootReducer;

import { createStore } from "redux";
import productReducer from "./redusers";

const store = createStore(productReducer);
export default store;

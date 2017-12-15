import { combineReducers } from "redux";
import smurfsReducer from "./smurfsReducer";

const rootReducer = combineReducers({
  smurfs: smurfsReducer
});

export default rootReducer;

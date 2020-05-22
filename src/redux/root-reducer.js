//REDUX 2 //
// Root Reducer is just compine slice reducers

import { combineReducers } from "redux";

import userReducer from "./user/user-reducer";

export default combineReducers({
  user: userReducer,
});

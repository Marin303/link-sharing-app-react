import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import formReducer from "./reducers";


const rootReducer = combineReducers({
  profileData: formReducer,
  
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;

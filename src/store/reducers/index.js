import { combineReducers } from "redux";
import auth from "./authReducer";
import doctors from "./doctorsReducer";

export default combineReducers({
    auth,
    doctors
})
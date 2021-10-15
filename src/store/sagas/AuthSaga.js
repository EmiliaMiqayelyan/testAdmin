import { useHistory } from "react-router";
import { takeLatest,call, put } from "redux-saga/effects";
import api from "../../services/api";
import { getMyRequest, loginRequest } from "../../services/api/routes/auth";
import { getMyAction, loginSuccessAction, setErrorMessageAction, setMyAction } from "../actions/authAction";
import { AuthTypes } from "../types";
function* login({payload}){
    const {username,password} = payload;
    try {
        const data  = yield call(loginRequest,username,password)
        console.log(data.access);
        if(data.access){
            localStorage.setItem("access",data.access);
            api.defaults.headers.common['Authorization'] = "Bearer "+data.access;
            yield put(loginSuccessAction()) 
            yield put(getMyAction());           
        }
    } catch (error) {
        console.log(error.message);
        yield put(setErrorMessageAction(error.message))
    }
   
}
function* getMy(){
    try {
        const userDate = yield call(getMyRequest);
        yield put(setMyAction(userDate));
    } catch (error) {
        
    }
}
function* watchAuthSaga(){
    yield takeLatest(AuthTypes.LOGIN,login)
    yield takeLatest(AuthTypes.GET_MY,getMy)
}

export {watchAuthSaga}
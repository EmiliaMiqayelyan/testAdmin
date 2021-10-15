import { AuthTypes } from "../types";
const INIT_STATE = {
    isAuth:false,
    user:null,
    loginFaild:false,
    errorMessage:""
}
export default (state = INIT_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case AuthTypes.LOGIN_SUCCESS:
            return {...state,isAuth:true}
        case AuthTypes.SET_MY:
        return {...state,user:payload};

        case AuthTypes.SET_ERROR_MESSAGE:
            return {...state,errorMessage:payload}
        default:
            break;
            
    }
    return state
}
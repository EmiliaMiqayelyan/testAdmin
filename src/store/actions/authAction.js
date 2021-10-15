import { AuthTypes } from "../types"

export const loginAction = ({username,password})=>{
    return {
        type:AuthTypes.LOGIN,
        payload:{
            username,
            password
        }
    }
}
export const loginSuccessAction = ()=>{
    return {
        type:AuthTypes.LOGIN_SUCCESS
    }
}
export const getMyAction = ()=>{
    return {
        type:AuthTypes.GET_MY
    }
}
export const setMyAction = (payload)=>{
    return {
        type:AuthTypes.SET_MY,
        payload
    }
}

export const setErrorMessageAction = (payload)=>{
    return {
        type:AuthTypes.SET_ERROR_MESSAGE,
        payload
    }
}
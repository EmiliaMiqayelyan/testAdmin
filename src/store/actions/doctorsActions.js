import { DoctorsTypes } from "../types"

export const getDoctorsAction = ()=>{
    return {
        type:DoctorsTypes.GET_DOCTORS
    }
}

export const setDoctorsAction = (payload)=>{
    return {
        type:DoctorsTypes.SET_DOCTORS,
        payload
    }
}
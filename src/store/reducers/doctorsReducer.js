import { DoctorsTypes } from "../types";

const INIT_STATE = {
    doctors: null
}

export default (state = INIT_STATE, action) => {
    const { type, payload } = action
    switch (type) {
        case DoctorsTypes.SET_DOCTORS:
            return { ...state, doctors: payload }
        default:
            return state
    }
}
import { call, put, takeLatest } from "@redux-saga/core/effects"
import { getDoctorsRequest } from "../../services/api/routes/doctors"
import { setDoctorsAction } from "../actions/doctorsActions"
import { DoctorsTypes } from "../types"

function* getDoctors(){
    try {
        const doctors = yield call(getDoctorsRequest)
        yield put(setDoctorsAction(doctors.results));
    } catch (error) {
      
    }
}
function* watchDoctorsSaga(){
    yield takeLatest(DoctorsTypes.GET_DOCTORS,getDoctors)
}

export {watchDoctorsSaga}
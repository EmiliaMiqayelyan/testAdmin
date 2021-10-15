import { all } from "redux-saga/effects";
import { watchAuthSaga } from "./AuthSaga";
import { watchDoctorsSaga } from "./DoctorsSaga";
function* rootSaga(){
        yield all([
            watchAuthSaga(),
            watchDoctorsSaga()
        ])
}

export default rootSaga
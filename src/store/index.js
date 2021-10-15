import { createStore,applyMiddleware } from "redux";
import reduxSaga from "redux-saga"
import reducers from "./reducers";
import rootSaga from "./sagas";

const saga = reduxSaga();

const store  = createStore(reducers,applyMiddleware(saga))
saga.run(rootSaga)

export default store
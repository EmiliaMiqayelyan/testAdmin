import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Doctors, Home, Login, Panel, PrivatePage } from './views';
import { Provider, useDispatch } from 'react-redux';
import { DoctorList } from './views';
import store from './store';
import { useEffect, useState } from 'react';
import api from './services/api';
import { getMyAction, loginSuccessAction } from './store/actions/authAction';
function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let access = localStorage.getItem("access")
    if (access) {
      api.defaults.headers.common['Authorization'] = "Bearer " + access;
      dispatch(loginSuccessAction())
      dispatch(getMyAction())
    };
    setTimeout(() => {
      setLoading(false)
    }, 2000);

  }, [])
  return (
    <div className="App">
      {loading ? <h1>Loading</h1> :
        <Router>
          <Switch>
            <Route exact path="/login" >
              <Login />
            </Route>
            <Route path="/panel">
              <PrivatePage>
                <Panel />
              </PrivatePage>
            </Route>
            <Route path="/" >
              <Home />
            </Route>
            <Route path='/doctorList' exact component={DoctorList} />

          </Switch>
        </Router>}
    </div>
  );
};

export default App;
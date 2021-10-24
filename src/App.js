
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {  Doctors, Home, Login, Panel, PrivatePage } from './views';
import Doctorss from './views/Doctor/Doctorss';
import Clients  from './views/Client/Clients';
import { Provider, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import api from './services/api';
import Navbar from "./views/Panel"

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
      {loading ? <h1>Loading...</h1> :
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
            <Navbar>
              <Link to="/doctor">Doctor</Link>
              <Link to="/client">Client</Link>
            <Route  path='/doctor'>
              <Doctorss />
              </Route>
            <Route  path='/client'>
              <Clients />
              </Route>
              </Navbar>
          </Switch>
        </Router>}
    </div>
  );
};

export default App;


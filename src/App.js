import './App.css';
import React from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Doctor, Clients, Doctors, Home, Login, Panel, PrivatePage } from './views';
import { Provider, useDispatch } from 'react-redux';
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
            <Route exact path="/doctors">
              <Doctor/>
              </Route>
            <Route exact path="/clients">
              <Clients />
              </Route>
            <Route exact path="/" >
              <Home />
            </Route>
          </Switch>
        </Router>
      }
    </div>
  );
};

export default App;

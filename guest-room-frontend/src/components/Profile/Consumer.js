import React,{useState,useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import Croom from './Croom';
import generalService from '../../services/general.service';
import AuthService from "../../services/auth.service";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from "react-router-dom";

const Consumer = () => {
  
    let { path, url } = useRouteMatch();
    return (
        <>
        <Router>
        <Navbar />
        <div className="container p-5">
          <div className="row">
            <div className="col-3">
              <Link to={`${url}`}>
                <button className="btn btn-dark dash-button">my bookings</button>
              </Link>{" "}
              <br />
              <Link to={`${url}/add`}>
                <button className="btn btn-dark dash-button">Add</button>
              </Link>
            </div>

            <div className="col-9">
              <div className="row">
                <Switch>
                  
                  <Route exact path={`${path}/add`} />
                  <Route exact path={`${path}/`}>
                    <Croom />
                </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
    )
}

export default Consumer

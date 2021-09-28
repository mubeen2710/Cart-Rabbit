import React from "react";
import Navbar from "../Navbar/Navbar";
import Myrooms from "./Myrooms";
import Add from "./Add";
import AuthService from "../../services/auth.service";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
const Onwer = () => {
  const currentUser = AuthService.getCurrentUser();
  let { path, url } = useRouteMatch();
  return (
    <>
      <Router>
        <Navbar />
        <div className="container p-5">
          <div className="row">
            <div className="col-3">
              <Link to={`${url}/myrooms`}>
                <button className="btn btn-dark dash-button active">myrooms</button>
              </Link>{" "}
              <br />
              <Link to={`${url}/add`}>
                <button className="btn btn-dark dash-button">Add</button>
              </Link>
            </div>

            <div className="col-9">
              <div className="row">
                <Switch>
                  <Route exact path={`${path}/myrooms`}>
                    <Myrooms />
                  </Route>
                  <Route exact path={`${path}/add`} component={Add} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Onwer;

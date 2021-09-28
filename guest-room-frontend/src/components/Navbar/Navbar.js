import "./Navbar.css";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";

const Navbar = () => {
  const currentUser = AuthService.getCurrentUser();
  const history = useHistory();
  const profile = () => {
    history.push({ pathname: `/profile` });
  };
  const login = () => {
    history.push({ pathname: `/login` });
  };
  const home = () => {
    history.push({ pathname: `/` });
    history.go(0);
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand kolar" onClick={home}>
        Rooms
      </a>
      <button
        className="navbar-toggler kolar"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <form className="form-inline my-2 ">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto my-lg-0 ">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            {typeof currentUser.role != "undefined" ? (
              <a className="nav-link" onClick={profile}>
                <GrUserExpert />
              </a>
            ) : (
              <a className="nav-link" onClick={login}>
                <FaUserCircle />
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

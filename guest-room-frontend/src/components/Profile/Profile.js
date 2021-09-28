import React from "react";
import AuthService from "../../services/auth.service";
import Onwer from "./Onwer";
import Consumer from "./Consumer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser)
  console.log(currentUser);
  let { path, url } = useRouteMatch();
  if (currentUser.role === "owner") {
    return <Onwer />;
  } else if (currentUser.role == "consumer") {
    return <Consumer />;
  } else {
    return "his";
  }
};

export default Profile;

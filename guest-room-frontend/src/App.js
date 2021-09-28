import "./App.css";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Individual from "./components/Individual/Individual";
import Booking from "./components/booking/Booking";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />

        <Route path="/profile" component={Profile} />

        <Route path="/register" component={Register} />

        <Route path="/rooms/:id" component={Individual} />

        <Route path="/booking/:id" component={Booking} />

        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;

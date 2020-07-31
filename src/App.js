import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Login from "./components/routes/Login";
import Register from "./components/routes/Register";
import Washing from "./components/routes/Washing";
import Drying from "./components/routes/Drying";
import Bleaching from "./components/routes/Bleaching";
import Profile from "./components/routes/Profile";
import checkAuthToken from "./utils/checkAuthToken";

import { Provider } from "react-redux";
import store from "./store";
import { LOGIN_SUCCESS } from "./actions/types";
import { getUser } from "./actions/authActions";

let response = checkAuthToken();

if (response !== undefined) {
  store.dispatch(getUser());
  store.dispatch({
    type: LOGIN_SUCCESS,
    payload: localStorage.getItem("token"),
  });
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/washing" component={Washing} />
            <Route exact path="/drying" component={Drying} />
            <Route exact path="/bleaching" component={Bleaching} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

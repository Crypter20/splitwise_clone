import React from "reat";
import { Switch, Route } from "react-router-dom";
import Login_smart from "./containers/login_container";
import { Landing } from "./components/landing";
import SignUp from "./components/signup";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/login" component={Login_smart}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
      </Switch>
    </div>
  );
}
export default App;

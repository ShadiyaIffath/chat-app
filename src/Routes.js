import { Route, Switch } from "react-router-dom";
import HomeComponent from "./Components/Home/HomeComponent";
import LandingComponent from "./Components/Landing/LandingComponent";
import SigninComponent from "./Components/SignIn/SigninComponent";
import SignUpComponent from "./Components/SignUp/SignUpComponent";

const Routes = () => {
  return (
    <Switch>
      <Route path="/landing" component={LandingComponent} />
      <Route path="/signIn" component={SigninComponent} />
      <Route path="/signUp" component={SignUpComponent} />
      <Route path="/home" component={HomeComponent} />
    </Switch>
  );
};

export default Routes;

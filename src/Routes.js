import { Route, Switch } from "react-router-dom";
import AuthorizeComponent from "./Components/Authorize/AuthorizeComponent";
import LandingComponent from "./Components/Landing/LandingComponent";
import SigninComponent from "./Components/SignIn/SigninComponent";
import SignUpComponent from "./Components/SignUp/SignUpComponent";

const Routes = () => {
  return (
    <Switch>
      <Route path="/landing" component={LandingComponent} />
      <Route path="/signIn" component={SigninComponent} />
      <Route path="/signUp" component={SignUpComponent} />
      <Route path="/authorize" component={AuthorizeComponent} />
    </Switch>
  );
};

export default Routes;

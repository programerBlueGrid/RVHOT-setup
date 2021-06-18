import { Route, Switch } from "react-router-dom";
import { Signin } from '../user/Signin'
import { Signup } from "../user/Signup";


export function Routes() {
  return (
    <Switch>
      <Route path="/signin" component={Signin} />
			<Route path="/signup" component={Signup} />

    </Switch>
  );
}

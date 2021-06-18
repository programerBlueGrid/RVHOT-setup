import { Route, Switch } from "react-router-dom";
import { Signin } from "../user/Signin";

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Signin} />
    </Switch>
  );
}

import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Maintenance from "../pages/Maintenance";
import ShopPage from "../pages/ShopPage";

export default function PageContent() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/shop">
        <ShopPage />
      </Route>
      <Route path="/maintenance">
        <Maintenance />
      </Route>
    </Switch>
  );
}

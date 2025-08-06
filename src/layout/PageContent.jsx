import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Maintenance from "../pages/Maintenance";
import ShopPage from "../pages/ShopPage";
import ProductDetail from "../pages/ProductDetail";
import ContactPage from "../pages/ContactPage";

export default function PageContent() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route  path="/shop">
        <ShopPage />
      </Route>
      <Route  path="/product">
        <ProductDetail />
      </Route>
      <Route  path="/contact">
        <ContactPage />
      </Route>
      <Route path="/maintenance">
        <Maintenance />
      </Route>
    </Switch>
  );
}

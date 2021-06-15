import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./component/Navigation";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import MyOrderPage from "./pages/MyOrderPage";
import SignUp from "./pages/SignUpPage";
import UserOrderFormPage from "./pages/UserOrderFromPage";

import { getUserWithStoredToken } from "./store/user/actions";
import { selectToken } from "./store/user/selectors";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const protectedRoutes = (Component, routerProps) => {
    return token ? <Component {...routerProps} /> : <Redirect to="/login" />;
  };

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/orderform" component={UserOrderFormPage} />

        <Route
          path="/myorder"
          render={(routerProps) => protectedRoutes(MyOrderPage, routerProps)}
        />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;

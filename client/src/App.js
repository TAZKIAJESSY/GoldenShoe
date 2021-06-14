import { Switch, Route } from "react-router-dom";

// import "./App.css";
import Navigation from "./component/Navigation";
import CartPage from "./pages/CartPage";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/LoginPage";
import MyOrderPage from "./pages/MyOrderPage";
import SignUp from "./pages/SignUpPage";
import UserOrderFormPage from "./pages/UserOrderFromPage";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/orderform" component={UserOrderFormPage} />
        <Route path="/myorder" component={MyOrderPage} />

        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;

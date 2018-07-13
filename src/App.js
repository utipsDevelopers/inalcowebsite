import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ServicePage from "./pages/ServicePage";
import Bot from "./components/Bot";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={ProductPage} />
            <Route exact path="/services" component={ServicePage} />
          </Switch>
          <Bot />
        </div>
      </Router>
    );
  }
}
export default App;

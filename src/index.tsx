/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./pages/home";
import { About } from "./pages/about";
import { AppLayout } from "./pages/layout";
import { Cart } from "./pages/cart";

const root = document.getElementById("root");

render(
  () => (
    <Router root={AppLayout}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={Cart} />
    </Router>
  ),
  root!
);

import React from "react";
import { render } from "react-dom";

const App = () => (
  <div>
    <h1>Boilerplate</h1>
    <p>Just checking to see if everything is working</p>
    <p>Is it?</p>
  </div>
);

render(<App />, document.getElementById("app"));

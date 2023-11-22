import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import ConfigEdit from "./ConfigEdit";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      
      <p className="font-monospace fs-1"> <FontAwesomeIcon className="fs-1" icon={faLayerGroup} />Lasagna Config Management Tool</p>
    </div>
    <BrowserRouter>
      <Home basename=""/>
    </BrowserRouter>
    <BrowserRouter basename="config">
      <ConfigEdit />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

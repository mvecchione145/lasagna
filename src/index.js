import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import ConfigEdit from "./ConfigEdit";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container title">
      <p className="font-monospace fs-1"><FontAwesomeIcon className="fs-1" icon={faLayerGroup} /> Lasagna</p><p className="font-monospace fs-3">Config Management Tool</p>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/config" element={<ConfigEdit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import ConfigEdit from "./pages/ConfigEdit";
import Configs from "./pages/Configs";
import Schemas from "./pages/Schemas";
import Home from "./pages/Home";
import Header from "./modules/Header"
import Settings from "./pages/Settings"
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/config-edit" element={<ConfigEdit/>}/>
          <Route path="/configs" element={<Configs/>}/>
          <Route path="/schemas" element={<Schemas/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

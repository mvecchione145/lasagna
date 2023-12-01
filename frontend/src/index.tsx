import React, { Suspense, lazy, FunctionComponent } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Spinner from "./components/Spinner.tsx";
import reportWebVitals from "./reportWebVitals.ts";

// Import Bootstrap CSS and JS only if they are necessary on initial load
// Otherwise consider importing them in the components where they are needed
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// Lazy load pages
const ExampleForm = lazy(() => import("./pages/ExampleForm.tsx"));
const Configs = lazy(() => import("./pages/Configs.tsx"));
const Home = lazy(() => import("./pages/Home.tsx"));
const ListConfigs = lazy(() => import("./pages/ListConfigs.tsx"));
const Schemas = lazy(() => import("./pages/Schemas.tsx"));
const Settings = lazy(() => import("./pages/Settings.tsx"));

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

const App: FunctionComponent = () => (
  <>
    <Header />
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<ExampleForm />} />
          <Route path="/configs" element={<Configs />} />
          <Route path="/schemas" element={<Schemas />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/list-configs/:schemaId" element={<ListConfigs />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
    <Footer />
  </>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

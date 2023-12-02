import React, { Suspense, lazy, FunctionComponent } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import reportWebVitals from "./reportWebVitals";

// Import Bootstrap CSS and JS only if they are necessary on initial load
// Otherwise consider importing them in the components where they are needed
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// Lazy load pages
const ExampleForm = lazy(() => import("./pages/ExampleForm"));
const Configs = lazy(() => import("./pages/Configs"));
const Home = lazy(() => import("./pages/Home"));
const ListConfigs = lazy(() => import("./pages/ListConfigs"));
const Schemas = lazy(() => import("./pages/Schemas"));
const Settings = lazy(() => import("./pages/Settings"));

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

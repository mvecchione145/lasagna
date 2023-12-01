import React from "react";

import "./Spinner.css";


function Spinner() {
  return (
    <div className="container d-flex justify-content-center align-items-center full-height">
      <div className="container spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;

import React, { useState, useEffect } from "react";
import "./Schemas.css";

import SchemasTable from "../components/SchemasTable";

import {getSchemas} from "./../files";

function Schemas() {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    // Function to fetch file names from the server
    const fetchFileNames = async () => {
      try {
        const data = await getSchemas(); // Adjust the URL as needed
        setFileNames(data);
      } catch (error) {
        console.error("Error fetching file names:", error);
      }
    };

    // Call the fetch function
    fetchFileNames();
  }, []); // The empty array causes this effect to only run once on mount

  return (
    <div className="container schemas">
      <SchemasTable fileNames={fileNames} />
    </div>
  );
}

export default Schemas;

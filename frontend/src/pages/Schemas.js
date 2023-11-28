import React, { useState, useEffect } from "react";
import "./Schemas.css";

import SchemasTable from "../components/SchemasTable";

import {getSchemas} from "./../files";

function Schemas() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Function to fetch file names from the server
    const fetchFiles = async () => {
      try {
        const data = await getSchemas(); // Adjust the URL as needed
        setFiles(data);
      } catch (error) {
        console.error("Error fetching file names:", error);
      }
    };

    // Call the fetch function
    fetchFiles();
  }, []); // The empty array causes this effect to only run once on mount

  return (
    <div className="container schemas">
      <SchemasTable files={files} />
    </div>
  );
}

export default Schemas;

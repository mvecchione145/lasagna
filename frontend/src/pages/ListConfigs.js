import "./ListConfigs.css";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


import {getConfigs} from "./../files";
import ConfigsTable from "../components/ConfigsTable";

function ListConfigs(props) {
  let { schemaName } = useParams();
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    // Function to fetch file names from the server
    const fetchFileNames = async () => {
      try {
        const data = await getConfigs(schemaName); // Adjust the URL as needed
        setFileNames(data);
      } catch (error) {
        console.error("Error fetching file names:", error);
      }
    };

    // Call the fetch function
    fetchFileNames();
  }, [schemaName]); // The empty array causes this effect to only run once on mount

  return (
    <div className="container">
      <ConfigsTable fileNames={fileNames} />
    </div>
  );
}

export default ListConfigs;

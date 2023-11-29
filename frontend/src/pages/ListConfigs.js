import "./ListConfigs.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getConfigs, getSchema } from "./../files";
import ConfigsTable from "../components/ConfigsTable";

function ListConfigs() {
  let { schemaId } = useParams();
  const [files, setFiles] = useState([]);
  const [schema, setSchema] = useState([]);

  useEffect(() => {
    // Function to fetch file names from the server
    const fetchFiles = async () => {
      try {
        const data = await getConfigs(schemaId); // Adjust the URL as needed
        setFiles(data);
        const schema = await getSchema(schemaId)
        setSchema(schema)
      } catch (error) {
        console.error("Error fetching file names:", error);
      }
    };

    // Call the fetch function
    fetchFiles();
  }, [schemaId]);

  console.log(schema)

  return (
    <div className="container">
      <ConfigsTable files={files} schemaName={schema.name} />
    </div>
  );
}

export default ListConfigs;

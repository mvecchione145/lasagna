import React, { useState, useEffect } from "react";

import { getConfigs } from "../files";
import ConfigsTable from "../components/ConfigsTable";
import { Config } from '../global';


import "./ListConfigs.css";


const ListConfigs: React.FC = () => {
  const [files, setFiles] = useState<Config[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const data = await getConfigs();
        setFiles(data);
      } catch (error) {
        console.error("Error fetching file names:", error);
      }
    };

    // Call the fetch function
    fetchFiles();
  }, []);

  return (
    <div className="container">
      <ConfigsTable files={files} />
    </div>
  );
};

export default ListConfigs;

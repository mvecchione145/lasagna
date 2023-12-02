import React, { useState, useEffect } from "react";
import "./Schemas.css";

import { FileMeta } from '../global';

import SchemasTable from "../components/SchemasTable";

import { getSchemas } from "./../files";


const Schemas: React.FC = () => {
  const [files, setFiles] = useState<FileMeta[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const data = await getSchemas();
        setFiles(data);
      } catch (error) {
        console.error("Error fetching file names:", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="container schemas">
      <SchemasTable files={files} />
    </div>
  );
};

export default Schemas;

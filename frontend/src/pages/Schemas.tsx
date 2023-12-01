import React, { useState, useEffect } from "react";
import "./Schemas.css";

import SchemasTable from "../components/SchemasTable.tsx";

import { getSchemas } from "./../files.ts";

type FileSchema = {
  _id: string,
  name: string,
  description: string,
};

const Schemas: React.FC = () => {
  const [files, setFiles] = useState<FileSchema[]>([]);

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

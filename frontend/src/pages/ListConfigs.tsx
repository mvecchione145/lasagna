import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getConfigs, getSchema } from "../files.ts";
import ConfigsTable from "../components/ConfigsTable.tsx";

import "./ListConfigs.css";


type FileConfig = {};

type Schema = {};

const ListConfigs: React.FC = () => {
  let { schemaId } = useParams<{ schemaId: string }>();

  const [files, setFiles] = useState<FileConfig[]>([]);
  const [schema, setSchema] = useState<Schema | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      if (typeof schemaId === 'string') {
        try {
          const data = await getConfigs(schemaId);
          setFiles(data);
          const schemaData = await getSchema(schemaId);
          setSchema(schemaData);
        } catch (error) {
          console.error("Error fetching file names:", error);
        }
      } else {
        console.error('schemaId must be a string');
      }
    };

    // Call the fetch function
    fetchFiles();
  }, [schemaId]);

  console.log(schema);

  return (
    <div className="container">
      <ConfigsTable files={files} schema={schema} />
    </div>
  );
};

export default ListConfigs;

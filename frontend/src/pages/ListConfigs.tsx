import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getConfigs, getSchema } from "../files";
import ConfigsTable from "../components/ConfigsTable";
import { Config, FileMeta } from '../global';


import "./ListConfigs.css";


const ListConfigs: React.FC = () => {
  let { schemaId } = useParams<{ schemaId: string }>();

  const [files, setFiles] = useState<Config[]>([]);
  const [schema, setSchema] = useState<FileMeta | undefined>(undefined);

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

  return (
    <div className="container">
      <ConfigsTable files={files} schema={schema} />
    </div>
  );
};

export default ListConfigs;

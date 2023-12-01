import { useNavigate } from "react-router-dom"; // Import useNavigate

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

// Define the shape of props using an interface or type
interface SchemasTableProps {
  files: Array<{
    _id: string;
    name: string;
    description: string;
  }>;
}

const SchemasTable: React.FC<SchemasTableProps> = ({ files }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle redirection to add config page
  const handleAddConfig = (_id: string) => {
    navigate(`/add-config/${_id}`);
  };

  // Function to handle redirection to list configs page
  const handleListConfigs = (_id: string) => {
    navigate(`/list-configs/${_id}`);
  };

  // Function to handle redirection to add schema page
  const handleAddSchema = () => {
    navigate("/add-schema");
  };

  return (
    <div className="container pt-5">
      <table className="table text-center">
        <thead>
          <tr>
            <th>schemas</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file._id}>
              <td title={`ID: ${file._id}`}>{file.name}</td>
              <td>
                <div className="badge bg-secondary text-wrap">
                  {file.description}
                </div>
              </td>
              <td>
                <button
                  className="btn btn-dark me-2"
                  onClick={() => handleAddConfig(file._id)}
                >
                  add config
                </button>
                <button
                  className="btn btn-dark"
                  onClick={() => handleListConfigs(file._id)}
                >
                  list configs
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>
              <button
                className="btn btn-dark" // Use a class to indicate an action like 'add'
                onClick={handleAddSchema}
              >
                <FontAwesomeIcon icon={faFolderPlus} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SchemasTable;

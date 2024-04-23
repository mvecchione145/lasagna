import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { Config } from "../global";


function ConfigsTable(props: {
  files: Config[] | undefined;
}) {
  const [showToast, setShowToast] = useState(false);
  const files = props.files || [];

  const navigate = useNavigate();

  const handleEditConfig = (configId: string) => {
    navigate(`/edit-config/${configId}`);
  };

  const handleCopyId = async (configId: string) => {
    try {
      await navigator.clipboard.writeText(configId);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleAddConfig = () => {
    navigate('/add-config');
  };

  return (
    <div className="container pt-5">
      {showToast && (
        <div
          className="toast show position-fixed bottom-0 end-0 p-3"
          style={{ zIndex: 11 }}
        >
          <div className="toast-header">
            <strong className="me-auto">Notification</strong>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowToast(false)}
            ></button>
          </div>
          <div className="toast-body">Schema could not be found.</div>
        </div>
      )}
      {true && (
        <table className="table text-center">
          <thead>
            <tr>
              <th>configs</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={file._id ? file._id : index}>
                <td title={`ID: ${file._id}`}>{file.name}</td>
                <td>
                  <div className="badge bg-secondary text-wrap">
                    {file.description}
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-dark me-2"
                    onClick={() => handleEditConfig(file._id)}
                  >
                    edit config
                  </button>
                  <button
                    className="btn btn-dark ml-2"
                    onClick={() => handleCopyId(file._id)}
                  >
                    copy id
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={3}>
                {true && (
                  <button
                    className="btn btn-dark"
                    onClick={() => handleAddConfig()}
                  >
                    <FontAwesomeIcon icon={faFileCirclePlus} />
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ConfigsTable;

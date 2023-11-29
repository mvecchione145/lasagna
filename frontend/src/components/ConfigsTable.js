import { useNavigate } from "react-router-dom"; // Import useNavigate

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";

function ConfigsTable(props) {
  const navigate = useNavigate(); // Initialize useNavigate
  
  // Function to handle redirection to add config page
  const handleEditConfig = (configId) => {
    navigate(`/edit-config/${configId}`);
  };

  const handleCopyId = async (configId) => {
    try {
      await navigator.clipboard.writeText(configId);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleAddConfig = (schemaId) => {
    navigate(`/add-config/${schemaId}`);
  };

  return (
    <div className="container pt-5">
      <table className="table text-center">
        <thead>
          <tr>
            <th>{props.schema.name} configs</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.files.map((file, index) => (
            <tr key={file._id}>
              {/* Apply the same width to the td elements */}
              <td title={`ID: ${file._id}`}>
                {file.name}
              </td>
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
                  className="btn btn-dark ml-2" // Added ml-2 for spacing, adjust class as necessary
                  onClick={() => handleCopyId(file._id)}
                >
                  copy id
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">
              <button
                className="btn btn-dark"
                onClick={() => handleAddConfig(props.schema._id)}
                // onClick={()=>{}}
              >
                <FontAwesomeIcon icon={faFileCirclePlus} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ConfigsTable;

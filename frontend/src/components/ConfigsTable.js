import { useNavigate } from "react-router-dom"; // Import useNavigate

function ConfigsTable(props) {
  const navigate = useNavigate(); // Initialize useNavigate
  // Function to handle redirection to add config page
  const handleEditConfig = (configId) => {
    navigate(`/edit-config/${configId}`);
  };

  return (
    <div className="container pt-5">
    <table className="table">
      <thead>
        <tr>
          <th>{props.schemaName} configs</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.files.map((file, index) => (
          <tr key={file._id}>
            {/* Apply the same width to the td elements */}
            <td>
              {file.name}
            </td>
            <td>
              <div className="badge bg-secondary text-wrap">
                {file.description}
              </div>
            </td>
            <td>
              <button
                className="btn btn-dark"
                onClick={() => handleEditConfig(file._id)}
              >
                edit config
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ConfigsTable;

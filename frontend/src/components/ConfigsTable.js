import { useNavigate } from "react-router-dom"; // Import useNavigate

function ConfigsTable(props) {
  const navigate = useNavigate(); // Initialize useNavigate
  // Function to handle redirection to add config page
  const handleEditConfig = (configId) => {
    navigate(`/edit-config/${configId}`);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>files</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.files.map((file, index) => (
          <tr key={file._id}>
            {/* Apply the same width to the td elements */}
            <td className="text-left">
              {file.name}
            </td>
            <td className="text-left">
              <div className="badge bg-secondary text-wrap">
                {file.description}
              </div>
            </td>
            <td className="text-right">
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
  );
}

export default ConfigsTable;

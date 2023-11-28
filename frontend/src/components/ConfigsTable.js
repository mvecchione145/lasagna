import { useNavigate } from "react-router-dom"; // Import useNavigate

function ConfigsTable(props) {
  const navigate = useNavigate(); // Initialize useNavigate
  // Function to handle redirection to add config page
  const handleEditConfig = (schemaName, configName) => {
    navigate(`/edit-config/${schemaName}/${configName}`);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>files</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.fileNames.map((fileName, index) => (
          <tr key={index}>
            <td className="text-left">{fileName}</td>
            <td className="text-right">
              <button
                className="btn btn-secondary me-2"
                onClick={() => handleEditConfig(props.schemaName, fileName)}
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

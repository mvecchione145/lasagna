import { useNavigate } from "react-router-dom"; // Import useNavigate

function SchemasTable(props) {
  const navigate = useNavigate(); // Initialize useNavigate
  // Function to handle redirection to add config page
  const handleAddConfig = (fileName) => {
    navigate(`/add-config/${fileName}`);
  };

  // Function to handle redirection to list configs page
  const handleListConfigs = (fileName) => {
    navigate(`/list-configs/${fileName}`);
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
                onClick={() => handleAddConfig(fileName)}
              >
                add config
              </button>
              <button
                className="btn btn-light"
                onClick={() => handleListConfigs(fileName)}
              >
                list configs
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SchemasTable;

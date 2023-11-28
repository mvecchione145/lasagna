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
        {props.files.map((file, index) => (
          <tr key={index}>
            <td className="text-left">{file.name}</td>
            <td className="text-right">
              <button
                className="btn btn-secondary me-2"
                onClick={() => handleAddConfig(file.name)}
              >
                add config
              </button>
              <button
                className="btn btn-light"
                onClick={() => handleListConfigs(file.name)}
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

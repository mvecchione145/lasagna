import { useNavigate } from "react-router-dom"; // Import useNavigate

function SchemasTable(props) {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle redirection to add config page
  const handleAddConfig = (_id) => {
    navigate(`/add-config/${_id}`);
  };

  // Function to handle redirection to list configs page
  const handleListConfigs = (_id) => {
    navigate(`/list-configs/${_id}`);
  };

  return (
    <div className="container pt-5">
      <table className="table">
        <thead>
          <tr>
            <th>schemas</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.files.map((file, index) => (
            <tr key={file._id}>
              <td className="text-left">{file.name}</td>
              <td className="text-left">
                <div className="badge bg-secondary text-wrap">
                  {file.description}
                </div>
              </td>
              <td className="text-right">
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
        </tbody>
      </table>
    </div>
  );
}

export default SchemasTable;

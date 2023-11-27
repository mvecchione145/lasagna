import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Schemas.css';

import files from './../files';

function Schemas() {
  const [fileNames, setFileNames] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Function to fetch file names from the server
    const fetchFileNames = async () => {
      try {
        const data = await files.getSchemas(); // Adjust the URL as needed
        setFileNames(data);
      } catch (error) {
        console.error("Error fetching file names:", error);
      }
    };

    // Call the fetch function
    fetchFileNames();
  }, []); // The empty array causes this effect to only run once on mount
  
  // Function to handle redirection to add-schema
  const handleAddSchema = () => {
    navigate('/add-schema');
  };

  return (
    <div className="container schemas">
      <div className='container'>
        <table className='table-bordered'>
          <thead>
            <tr>
              <th><p className='fs-3'>Schemas</p></th>
            </tr>
          </thead>
          <tbody>
            {/* Map over fileNames state to fill the table */}
            {fileNames.map((fileName, index) => (
              <tr key={index}>
                <td>{fileName}</td>
              </tr>
            ))}
            <tr><button 
                  className="btn btn-primary" 
                  onClick={handleAddSchema}
                >
                  +{/* This is the "+" symbol for the button */}
                </button></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schemas;

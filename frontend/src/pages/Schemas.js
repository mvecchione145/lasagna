import React, { useState, useEffect } from 'react';
import './Schemas.css';

import files from './../files';

function Schemas() {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    // Function to fetch file names from the server
    const fetchFileNames = async () => {
      try {
        const response = await files.getSchemas(); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFileNames(data);
      } catch (error) {
        console.error("Error fetching file names:", error);
      }
    };

    // Call the fetch function
    fetchFileNames();
  }, []); // The empty array causes this effect to only run once on mount

  return (
    <div className="container schemas">
      <div className='container'>
        <p>SCHEMA: Tool for managing configuration files.</p>
        <br/>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over fileNames state to fill the table */}
            {fileNames.map((fileName, index) => (
              <tr key={index}>
                <td>{fileName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schemas;

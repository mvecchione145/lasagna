import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

async function getSchemas() {
  // Configure the headers for the axios request
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow all origins
      // Alternatively, specify a specific origin instead of '*'
      // 'Access-Control-Allow-Origin': 'http://example.com',
    },
  };

  // Return the promise created by axios.get with the config
  return axios
    .get(`${backendUrl}/schemas`, config)
    .then((response) => {
      // Resolve the promise with the data
      return response.data;
    })
    .catch((error) => {
      // Reject the promise with the error
      console.error(`Error fetching schemas from ${backendUrl}/schemas:`, error);
      throw error;
    });
}

export default {
  getSchemas,
};

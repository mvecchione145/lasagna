import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

async function getSchemas() {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  return axios
    .get(`${backendUrl}/schemas`, config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(
        `Error fetching schemas from ${backendUrl}/schemas:`,
        error
      );
      throw error;
    });
}

async function getConfigs(schemaId) {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  return axios
    .get(`${backendUrl}/configs/${schemaId}`, config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(
        `Error fetching schemas from ${backendUrl}/configs/${schemaId}`,
        error
      );
      throw error;
    });
}

export {
  getSchemas,
  getConfigs,
};

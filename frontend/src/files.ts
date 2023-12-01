import axios, { AxiosResponse, AxiosError } from "axios";
declare const REACT_APP_BACKEND_URL: string | undefined;

interface Schema {
  _id: string,
  name: string,
  description: string,
};

interface Config {};

async function getSchemas(): Promise<Schema[]> {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  try {
    const response: AxiosResponse<Schema[]> = await axios.get(`${REACT_APP_BACKEND_URL}/schemas`, config);
    return response.data;
  } catch (error) {
    const axiosError: AxiosError = error as AxiosError;
    console.error(
      `Error fetching schemas from ${REACT_APP_BACKEND_URL}/schemas:`,
      axiosError.message
    );
    throw axiosError;
  }
}

async function getConfigs(schemaId: string): Promise<Config[]> {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  try {
    const response: AxiosResponse<Config[]> = await axios.get(`${REACT_APP_BACKEND_URL}/configs/${schemaId}`, config);
    return response.data;
  } catch (error) {
    const axiosError: AxiosError = error as AxiosError;
    console.error(
      `Error fetching configs from ${REACT_APP_BACKEND_URL}/configs/${schemaId}:`,
      axiosError.message
    );
    throw axiosError;
  }
}

async function getSchema(schemaId: string): Promise<Schema> {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  try {
    const response: AxiosResponse<Schema> = await axios.get(`${REACT_APP_BACKEND_URL}/schema/${schemaId}`, config);
    return response.data;
  } catch (error) {
    const axiosError: AxiosError = error as AxiosError;
    console.error(
      `Error fetching schema from ${REACT_APP_BACKEND_URL}/schema/${schemaId}:`,
      axiosError.message
    );
    throw axiosError;
  }
}

export {
  getSchema,
  getSchemas,
  getConfigs,
};

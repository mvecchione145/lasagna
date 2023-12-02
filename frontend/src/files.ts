import axios, { AxiosResponse, AxiosError } from "axios";
import { Config } from "./global";

const backendUrl: string | undefined = process.env.REACT_APP_BACKEND_URL;

interface File {
  _id: string,
  name: string,
  description: string,
};

async function getSchemas(): Promise<File[]> {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  try {
    const response: AxiosResponse<File[]> = await axios.get(`${backendUrl}/schemas`, config);
    return response.data;
  } catch (error) {
    const axiosError: AxiosError = error as AxiosError;
    console.error(
      `Error fetching schemas from ${backendUrl}/schemas:`,
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
    const response: AxiosResponse<Config[]> = await axios.get(`${backendUrl}/configs/${schemaId}`, config);
    return response.data;
  } catch (error) {
    const axiosError: AxiosError = error as AxiosError;
    console.error(
      `Error fetching configs from ${backendUrl}/configs/${schemaId}:`,
      axiosError.message
    );
    throw axiosError;
  }
}

async function getSchema(schemaId: string): Promise<File> {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  try {
    const response: AxiosResponse<File> = await axios.get(`${backendUrl}/schema/${schemaId}`, config);
    return response.data;
  } catch (error) {
    const axiosError: AxiosError = error as AxiosError;
    console.error(
      `Error fetching schema from ${backendUrl}/schema/${schemaId}:`,
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

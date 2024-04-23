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

async function getConfigs(): Promise<Config[]> {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  try {
    const response: AxiosResponse<Config[]> = await axios.get(`${backendUrl}/configs`, config);
    return response.data;
  } catch (error) {
    const axiosError: AxiosError = error as AxiosError;
    console.error(
      `Error fetching configs from ${backendUrl}/configs:`,
      axiosError.message
    );
    throw axiosError;
  }
}


export {
  getSchemas,
  getConfigs,
};

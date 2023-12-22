import axios from "axios";
import myConfig from "../../../../myconfig";

const baseURL = myConfig.BASE_URL;

export const userLogin = async (email: string, password: string) => {
  const data = {
    email,
    password
  };

  try {
    return await axios.post(`${baseURL}/api/auth/login`, data);
  } catch (error) {
    console.log(error);
  }
};

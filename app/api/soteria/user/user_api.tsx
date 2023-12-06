"use client";
import axios from "axios";
import myConfig from "../../../../myconfig";

const baseURL = myConfig.BASE_URL;

export const user_login = async (email: string, password: string) => {
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

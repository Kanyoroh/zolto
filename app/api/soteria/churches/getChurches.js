import axios from "axios";
import myConfig from "@/myconfig";
import getTokenFromLocalStorage from "../user/GetTokenLocalStorage";

async function getChurches() {
  try {
    const token = await getTokenFromLocalStorage();
    //console.log("Token:", token);

    const response = await axios.get(
      "https://api.soteriapp.org/api/v1/churches/",
      {
        baseURL: myConfig.BASE_URL,
        headers: {
          "Soteria-Dashboard": "sDwNcXXkStbAl1JlKwsAvYV+qI1bJqV/PxpeoQMPo6c=",
          Authorization: `Bearer ${token}`
        }
      }
    );

    return response.data.churches;
  } catch (error) {
    console.error("Error fetching churches:", error);
    throw error;
  }
}

export default getChurches;

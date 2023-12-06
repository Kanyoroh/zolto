"use client";
import axios from "axios";
import myConfig from "../../../../myconfig";
import TokenChecker from "../user/checktoken";

const baseURL = myConfig.BASE_URL;
const soteriaKey = myConfig.SOTERIA_KEY;

export default async function getChurches() {
    try {
        const token = TokenChecker();
        if (token){
        //console.log(`Bearer ${token}`);
        let config = {
            method: "get",
            url: `${baseURL}/api/v1/churches/`,
            headers: {
                "Soteria-Dashboard": soteriaKey,
                Authorization: `Bearer ${token}`
            }
        
        };

        const response = await axios.request(config);
        //console.log("Response Status:", response.status); // Check the response status
        //console.log("Response Data:", JSON.stringify(response.data));

        return response.data; 
    }
    return [];// Return data or perform necessary operations
    } catch (error) {
        console.log("Error:", error);
       // throw error; // Re-throw the error or handle it accordingly
    }
}

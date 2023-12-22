"use client";
import React, { useState, useEffect } from "react";
import getChurches from "@/app/api/soteria/churches/GetChurches";
import getUserFromLocalStorage from "@soteriaapi/user/GetUserLocalStorage";
import getTokenLocalStorage from "@soteriaapi/user/GetTokenLocalStorage";

function Page() {
  const [churches, setChurches] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const tokenData = await getTokenLocalStorage();
        setToken(tokenData);
      } catch (error) {
        console.error("Error fetching token data:", error);
      }
    };

    fetchTokenData();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserFromLocalStorage();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchChurchesData = async () => {
      try {
        const data = await getChurches();
        setChurches(data);
      } catch (error) {
        console.error("Error fetching churches:", error);
      }
    };

    fetchChurchesData();
  }, []);

  useEffect(() => {
    console.log(churches); // Log churches when it changes
  }, [churches]); // Log only when 'churches' state changes
  useEffect(() => {
    console.log(user); // Log user when it changes
  }, [user]); // Log only when 'user' state changes
  useEffect(() => {
    console.log(token); // Log token when it changes
  }, [token]); // Log only when 'token' state changes

  return (
    <div>
      <h1>Hello Hello</h1>
      {/* Render your fetched data */}
      {/* Use 'user' and 'churches' state as needed */}
    </div>
  );
}

export default Page;

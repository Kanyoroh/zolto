"use client";
import React, { useEffect, useState } from "react";
import LoggedUser from "../../components/user/user";
import NextUITable from "@/components/tables/nextuitable";
import getChurches from "@/app/api/soteria/churches/GetChurches";
import { DashboardContent } from "@/components/home/content"; // Assuming this is the DashboardContent component

const DashboardPage = () => {
  const [churches, setChurches] = useState([]);

  useEffect(() => {
    getChurches()
      .then((churchData) => {
        // Handle churchData when the Promise resolves successfully
        console.log("Churches Data:", churchData);
        setChurches(churchData);
      })
      .catch((error) => {
        // Handle errors when the Promise rejects
        console.error("Error fetching churches:", error);
      });
  }, []);

  return (
      <DashboardContent />

  );
};

export default DashboardPage;

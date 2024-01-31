"use client";
import React, { useState, useEffect } from "react";
import getChurches from "@/app/api/soteria/churches/GetChurches";
import KanyoroTable from "@/components/table/index";
import StatisticsSection from "./stats";
import NewChurchForm from "./NewChurchForm"; // Create a NewChurchForm component for the form structure

const columns = {
  church_logo_url: "Church Logo",
  email_address: "Email Address",
  church_address: "Church Address",
  church_branch: "Church Branch",
  church_location: "Church Location",
  church_contact: "Church Contact",
  actions: "Actions"
  // Add more mappings as needed for other keys
};

const columnsUI = {
  church_logo_url: "user",
  email_address: "email",
  church_location: "map",
  church_contact: "phone",
  actions: "actions"
  // Map 'email_address' to 'email' case in renderCell
  // Add more mappings here
};

export default function Churches() {
  const [churches, setChurches] = useState([]);
  const [showForm, setShowForm] = useState(false);

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

  const handleNewChurch = async formData => {
    // Call your API function (NewChurch) to create a new church using formData
    // After successful creation, refresh the page to populate the table again
    try {
      // Perform API call to create a new church with formData

      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.error("Error creating church:", error);
    }
  };

  return (
    <div className="w-full">
		 <StatisticsSection />
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none"
          onClick={() => setShowForm(!showForm)}
        >
          New Church
        </button>
      </div>
      {showForm && <NewChurchForm onSubmit={handleNewChurch} />}{" "}
      {/* Render the form component */}
      <KanyoroTable data={churches} columns={columns} columnsUI={columnsUI} />
    </div>
  );
}

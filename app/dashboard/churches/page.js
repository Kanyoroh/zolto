"use client";
import React, { useState, useEffect } from "react";
import getChurches from "@/app/api/soteria/churches/GetChurches";
import KanyoroTable from "@/components/table/table";
import StatisticsSection from "./stats"

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
	  }, [churches]);
	  
	return (
		
		<div className="w-full ">
			<StatisticsSection />
			<h1>Churches</h1>	
		 <KanyoroTable data={churches} columns={columns} columnsUI={columnsUI} />
		</div>
		
	);
}

"use client";
import React from "react";
import LoggedUser from "../../components/user/user";
import NextUITable from "@/components/tables/nextuitable";
import getChurches from "../api/soteria/churches/getChurches";
import { get } from "http";
import { DashboardContent } from "@/components/home/content";


interface DashboardPageProps {
  churches: any[]; // Replace 'any' with the actual type of 'churches'
}

const DashboardPage = ({ churches }) => {
  console.log('Churches:', churches); // Log churches prop

  return (
    <div>
      <DashboardContent />
      {churches && churches.map((church, index) => (
        <div key={index}>
          {/* Replace 'name' and 'location' with actual property names */}
          <h2>{church.name}</h2>
          <p>{church.location}</p>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const data = await getChurches();
    console.log('Fetched data:', data); // Log fetched data

    // Access the 'churches' property of the returned data
    const churches = data.churches;

    return {
      props: { churches }, // will be passed to the page component as props
    };
  } catch (error) {
    console.error('Error fetching churches:', error); // Log error
    return {
      props: { churches: [] }, // Return an empty array or handle error as needed
    };
  }
}

export default DashboardPage;
"use client";
import React, { useState, useEffect } from "react";
import KanyoroTable from "@/components/table/index";
function Page() {
  const data = [
    {
      id: 1,
      church_logo_url: "https://images.pexels.com/photos/17565787/pexels-photo-17565787/free-photo-of-brunette-by-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email_address: "example1@example.com",
      status: "active",
      church_address: "123 Main Street",
      church_branch: "First Church",
      church_location: "City A",
      church_contact: "+1234567890",
      actions: "actions"
    },
    {
      id: 2,
      church_logo_url: "https://images.pexels.com/photos/17565787/pexels-photo-17565787/free-photo-of-brunette-by-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email_address: "example2@example.com",
      status: "paused",
      church_address: "456 Elm Street",
      church_branch: "Second Church",
      church_location: "City B",
      church_contact: "+9876543210",
      actions: "actions"
    },
    {
      id: 2,
      church_logo_url: "https://images.pexels.com/photos/17565787/pexels-photo-17565787/free-photo-of-brunette-by-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email_address: "example2@example.com",
      status: "paused",
      church_address: "456 Elm Street",
      church_branch: "Second Church",
      church_location: "City B",
      church_contact: "+9876543210",
      actions: "actions"
    },
    {
      id: 2,
      church_logo_url: "https://images.pexels.com/photos/17565787/pexels-photo-17565787/free-photo-of-brunette-by-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email_address: "example2@example.com",
      status: "paused",
      church_address: "456 Elm Street",
      church_branch: "Second Church",
      church_location: "City B",
      church_contact: "+9876543210",
      actions: "actions"
    },
    {
      id: 2,
      church_logo_url: "https://images.pexels.com/photos/17565787/pexels-photo-17565787/free-photo-of-brunette-by-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email_address: "example2@example.com",
      status: "paused",
      church_address: "456 Elm Street",
      church_branch: "Second Church",
      church_location: "City B",
      church_contact: "+9876543210",
      actions: "actions"
    },
    // ... 8 more objects with similar structure
  ];
  
  const columns = {
    selector: "Select",
    church_logo_url: "Church Logo",
    email_address: "Email Address",
    church_address: "Church Address",
    church_branch: "Church Branch",
    church_location: "Church Location",
    church_contact: "Church Contact",
    actions: "Actions"
    // ... other column definitions
  };
  
  const columnsUI = {
    church_logo_url: "user",
    email_address: "email",
    status: "status",
    selector: "selector",
    church_contact: "phone",
    church_address: "map",
  };
  
  return (
    
   
      <KanyoroTable data={data} columns={columns} columnsUI={columnsUI} />
  
  );
}

export default Page;





"use client";
import React from "react";
import { DashboardNavbar } from "@/components/navbar/dashboardnavbar";
import Footer from "@/components/footer/Footer";
//import Sidebar from "@/components/sidebar/sidebar";
import { Providers } from "../providers";
import { SidebarWrapper } from "@/components/sidebar/sidebar";
import { useState, useEffect } from "react";
function Dashboardlayout({ children }: { children: React.ReactNode }) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return <></>;
  }

  return (
    <section className="flex" suppressHydrationWarning>
      <div style={{ marginRight: "10px" }}>
        <SidebarWrapper />
      </div>
        <DashboardNavbar>
        <div style={{ border: "5px dotted rgb(211 211 211)", padding: "10px", borderRadius: "40px", height: "100%" }}>
          {children}
          </div>
        </DashboardNavbar>
      
    </section>
  );
}

export default Dashboardlayout;

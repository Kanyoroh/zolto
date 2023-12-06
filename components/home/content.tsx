"use client";
import React from "react";
import dynamic from "next/dynamic";;
import { CardBalance1 } from "./card-balance1";
import { CardBalance2 } from "./card-balance2";
import { CardBalance3 } from "./card-balance3";
import { CardBalance4 } from "./card-balance4";
import { CardAgents } from "./card-agents";
import { CardTransactions } from "./card-transactions";
import ChurchChart from "../chart/churchchart";
//import { Link } from "@nextui-org/react";
import Link from "next/link";
import DashTable from "../table/table";


export const DashboardContent = () => (
  <div className=" h-full">
    <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[90rem] mx-auto w-full">
      <div className=" w-full">
        {/* Card Section Top */}
        <div className="flex flex-col gap-2">
          <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-4 gap-5  justify-center w-full">
            <CardBalance1 />
            <CardBalance2 />
            <CardBalance3 />
            <CardBalance4 />
          </div>
        </div>

        {/* Chart */}
        <div className="h-full flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Statistics</h3>
          <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 ">
          <ChurchChart />
          </div>
        </div>
      </div>

      {/*   <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
        <h3 className="text-xl font-semibold">Section</h3>
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <CardAgents />
          <CardTransactions /> 
        </div>
      </div> */}
    
    </div>

    {/* Table Latest Users */}
    <h3 className="text-xl font-semibold">Our Churches</h3>
  <DashTable/>
  </div>
);

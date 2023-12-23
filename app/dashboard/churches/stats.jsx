import React from "react";

const statsData = [
  { label: "Users", value: 100 },
  { label: "Revenue", value: "$50K" },
  { label: "Orders", value: 250 },
  { label: "Products", value: 150 },
  { label: "Visits", value: 5000 },
  { label: "New Users", value: 75 },
];

const StatsCard = ({ label, value }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md text-center">
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="flex justify-between w-full">
      {statsData.map((stat, index) => (
        <StatsCard key={index} label={stat.label} value={stat.value} />
      ))}
    </div>
  );
};

export default function StatisticsSection() {
  return (
    <div className="mt-8 p-4 bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">Statistics</h2>
      <StatsSection />
    </div>
  );
}

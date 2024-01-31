import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../icons/table/phone.json";
import loading from "../icons/table/loading.json";
import map from "../icons/table/map.json";
import Image from "next/image";

const sendEmail = email => {
  window.location.href = `mailto:${email}`;
};

const statusColorMap = {
  active: "success",
  paused: "danger"
};

function KanyoroTable({
  data = [],
  columns = {},
  columnsUI = {},
  selectorAction = null
}) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isCardView, setIsCardView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const keys = Object.keys(columns);

  const filteredKeys = keys.filter(key => columns[key]);

  const getColumnName = key => {
    return columns[key] || key;
  };

  const handleSelect = item => {
    if (selectedRows.includes(item)) {
      setSelectedRows(selectedRows.filter(row => row !== item));
    } else {
      setSelectedRows([...selectedRows, item]);
    }
  };

  const toggleView = () => {
    setIsCardView(prevState => !prevState);
  };

  // Function to handle search input
  const handleSearch = event => {
    setSearchQuery(event.target.value);
    // Add logic to filter data based on the search query
    // filteredData = ... (filter data based on searchQuery)
    // setFilteredData(filteredData);
  };


  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnsUI[columnKey]) {
      case "user":
        return (
          <div
            scope="row"
            className="flex  px-6 py-4 text-gray-900 wrap dark:text-white"
          >
            <img
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={cellValue}
              alt="avatar"
            />
            <div className="ps-3 ">
              <div className="text-base font-semibold text-left">Neil Sims</div>
              <div className="font-normal text-gray-500 text-left">
                neil.sims@flowbite.com
              </div>
            </div>
          </div>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {cellValue}
            </p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "email":
        return (
          <div className="flex ">
            <a
              className="text-blue-500 hover:text-blue-700 underline"
              href={`mailto:${cellValue}`}
              onClick={() => sendEmail(cellValue)}
            >
              {cellValue}
            </a>
          </div>
        );
      case "status":
        return (
          <span
            className={`inline-block px-2 py-1 text-xs font-semibold leading-none rounded-full ${statusColorMap[
              user.status
            ] === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"}`}
          >
            {cellValue}
          </span>
        );
      case "actions":
        return (
          <div className="flex gap-2 relative">
            <span className="text-lg text-gray-400 cursor-pointer active:opacity-50" />
            <span className="text-lg text-gray-400 cursor-pointer active:opacity-50" />
            <span className="text-lg text-red-500 cursor-pointer active:opacity-50" />
          </div>
        );
      case "phone":
        return (
          <a
            href={`tel:${cellValue}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex ">
              <Lottie
                animationData={animationData}
                style={{ width: 30, height: 30 }}
              />
              <div className="ml-2">
                <p className="text-base font-semibold">
                  {cellValue}
                </p>
              </div>
            </div>
          </a>
        );
      case "map":
        return (
          <a href={cellValue} target="_blank" rel="noopener noreferrer">
            <div className="flex ">
              <Image
                src="/map.png"
                width={30}
                height={30}
                alt="Picture of the author"
              />
            </div>
          </a>
        );
      case "selector":
        return (
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id={`checkbox-table-search-${user.id}`}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleSelect(user)}
                checked={selectedRows.includes(user)}
              />
              <label
                htmlFor={`checkbox-table-search-${user.id}`}
                className="sr-only"
              >
                checkbox
              </label>
            </div>
          </td>
        );
      default:
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {cellValue}
            </p>
          </div>
        );
    }
  };

  if (data === null || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Lottie
            animationData={loading}
            style={{ width: 2000, height: 200 }}
          />{" "}
          {/* Adjust size using w and h classes */}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <button onClick={() => console.log("Print")}>Print</button>
          <button onClick={() => console.log("New")}>
            <span>+</span> New
          </button>
          <button onClick={() => console.log("Export")}>Export</button>
          <button onClick={toggleView}>
            {isCardView ? "Table View" : "Card View"}
          </button>
        </div>
        {selectorAction &&
          <div>
            <button onClick={() => console.log(selectedRows)}>
              Perform Action
            </button>
          </div>}
      </div>
      {/* Table or Card View */}
      {isCardView
        ?  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-between p-4 leading-normal">
              {filteredKeys.map((columnKey) => (
                <div key={columnKey} className="flex flex-col mb-2">
                  <p className="text-xs font-medium text-gray-500 uppercase">
                    {getColumnName(columnKey)}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {renderCell(item, columnKey)}
                  </p>
                </div>
              ))}
              <button className="mt-2 text-sm font-medium text-blue-500 hover:underline focus:outline-none">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
        : <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {filteredKeys.map(key =>
                  <th
                    key={key}
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" // Reduced vertical padding here
                  >
                    {getColumnName(key)}
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map(item =>
                <tr key={item.id}>
                  {filteredKeys.map(columnKey =>
                    <td
                      key={columnKey}
                      className="px-2 py-2 whitespace-nowrap text-sm text-gray-500" // Reduced vertical padding here
                    >
                      {renderCell(item, columnKey)}
                    </td>
                  )}
                </tr>
              )}
            </tbody>
          </table>}
    </div>
  );
}

export default KanyoroTable;

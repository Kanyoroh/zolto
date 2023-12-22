import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  User
} from "@nextui-org/react";
import { EditIcon, DeleteIcon, EyeIcon, PhoneIcon } from "../icons/icons";
import Lottie from "lottie-react";
import animationData from "@/components/icons/lotte/phone.json";
import loading from "@/components/icons/lotte/loading.json";
import map from "@/components/icons/lotte/map.json";

const sendEmail = email => {
  window.location.href = `mailto:${email}`;
};

const statusColorMap = {
  active: "success",
  paused: "danger"
};

export default function KanyoroTable({ data = [], columns = {}, columnsUI = {} }) {
  const keys = Object.keys(columns);

  // Filter keys to display only those present in the columns object
  const filteredKeys = keys.filter(key => columns[key]);

  // Function to get the proper column name from the provided columns prop or default to the key itself
  const getColumnName = key => {
    return columns[key] || key;
  };

  const renderCell = React.useCallback(
    (user, columnKey) => {
      const cellValue = user[columnKey];

      switch (columnsUI[columnKey]) {
        case "user":
          return (
            <User
              avatarProps={{ radius: "lg", src: cellValue }}
              description={user.email}
              name="Jcc Thika Road"
            />
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
            <div className="flex items-center">
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
            <Chip
              className="capitalize"
              color={statusColorMap[user.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        case "phone":
          return (
            <a href={`tel:${cellValue}`} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center">
              <Lottie animationData={animationData} style={{ width: 50, height: 50 }} />
              <div className="ml-2">
                <p className="text-base font-semibold">{cellValue}</p>
              </div>
            </div>
          </a>
          );
        case "map":
          return (
            <a href={cellValue} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center">
                <Lottie animationData={map} style={{ width: 50, height: 50 }} />
              </div>
            </a>
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
    },
    [columnsUI]
  );

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
    <div className="overflow-x-auto">
      <Table
        aria-label="Example table with custom cells"
        className="min-w-full"
      >
        <TableHeader
          columns={filteredKeys.map(key => ({
            name: getColumnName(key),
            uid: key
          }))}
        >
          {column =>
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>}
        </TableHeader>
        <TableBody items={data}>
          {item =>
            <TableRow key={item.id}>
              {columnKey =>
                <TableCell key={columnKey}>
                  {filteredKeys.includes(columnKey)
                    ? renderCell(item, columnKey)
                    : null}
                </TableCell>}
            </TableRow>}
        </TableBody>
      </Table>
    </div>
  );
}

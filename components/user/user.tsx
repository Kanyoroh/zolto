"use client";
import React, { useEffect, useState } from "react";
import { User, Button } from "@nextui-org/react";
import getUserFromLocalStorage from "@/app/api/soteria/user/GetUserLocalStorage";

interface UserProps {
  name: string;
  email: string;
  photo_url: string;
}

const LoggedUser = () => {
  const [usersData, setUsersData] = useState<UserProps | null>(null);

  useEffect(() => {
    getUserFromLocalStorage()
      .then((userData) => {
        // Handle userData when the Promise resolves successfully
        setUsersData(userData);
      })
      .catch((error) => {
        // Handle errors when the Promise rejects
        console.error("Error:", error);
      });
  }, []);

  if (usersData === null) {
    return <Button color="warning">Login</Button>;
  } else if (Object.keys(usersData).length === 0) {
    return <Button color="warning">Loading user</Button>;
  } else {
    return (
      <div>
        <User
          name={usersData.name}
          description={usersData.email}
          avatarProps={{
            src: usersData.photo_url
          }}
        />
      </div>
    );
  }
};

export default LoggedUser;

"use client"
import React from 'react';
import { User,Button } from "@nextui-org/react";

interface UserProps {
  name: string;
  email: string;
  photo_url: string;
}

interface LoggedUserProps {
  user: string | null;
}
const LoggedUser: React.FC<LoggedUserProps> = ({ user }) => {
  if (user) {
    try {
      const parsedUser = JSON.parse(user);
      if (parsedUser) {
        return (
          <div>
            <User
              name={parsedUser.name}
              description={parsedUser.email}
              avatarProps={{
                src: parsedUser.photo_url
              }}
            />
          </div>
        );
      } else {
        return <Button color="warning">Loading user</Button>;
      }
    } catch (error) {
      console.error('Error:', error);
      return <Button color="warning">Login</Button>;
    }
  } else {
    return <Button color="warning">Login</Button>;
  }
};

export default LoggedUser;

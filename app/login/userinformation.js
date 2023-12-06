"use client";
import UserChecker from "../api/soteria/user/checkuser";
import { useRouter } from "next/navigation";
import LoggedUser from "../../components/user/user";
import { User, Button } from "@nextui-org/react";

export default function UserInformation() {
  const router = useRouter();

  const handleLogout = () => {
    // Navigate to the login page
    router.push("/login");
  };

  // Get user data from local storage using TokenChecker
  const userData = UserChecker();
  //console.log(userData);
  //console.log("dgshgwdfgwsdfwsgdfg");

  return <LoggedUser user={userData} />;
}

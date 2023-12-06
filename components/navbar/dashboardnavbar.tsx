"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import UserInformation from "../../app/login/userinformation";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon
} from "@/components/icons/icons";
import React, { ReactElement, ReactNode,useState,useEffect } from "react";
import { Logo } from "@/components/icons/icons";

type DashboardNavbarProps = {
  children: ReactNode;
};

export const DashboardNavbar = ({
  children
}: DashboardNavbarProps): ReactElement => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm"
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  if (!domLoaded) {
    return <></>;
  }

  return (
    <div className="relative left-0  flex flex-col flex-1 overflow-y-auto overflow-x-hidden" suppressHydrationWarning>
      <NextUINavbar 
      isBordered
      className="w-full"
      classNames={{
        wrapper: "w-full max-w-full",
        content: "justify-start"
      }}>
       
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem>
            <Link  href="#">
              Accounts
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Bulk Sms
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">
              Chat
            </Link>
          </NavbarItem>

          <NavbarItem className="hidden sm:flex gap-2">
            <Link
              isExternal
              href={siteConfig.links.twitter}
              aria-label="Twitter"
            >
              <TwitterIcon className="text-default-500" />
            </Link>
            <Link
              isExternal
              //href={siteConfig.links.discord}
              aria-label="Discord"
            >
              <DiscordIcon className="text-default-500" />
            </Link>
            <Link isExternal //</NavbarItem>href={siteConfig.links.github} 
            aria-label="Github">
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
          <NavbarItem className="hidden md:flex">
            <UserInformation />
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
      {children}
    </div>
  );
};

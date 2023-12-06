"use client"
import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { useRouter,usePathname } from "next/navigation";
import { useState, useEffect} from "react";
import UserInformation from "@/app/login/userinformation";
//import UserInformation from "@/app/login/userinformation";

export const SidebarWrapper = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { collapsed, setCollapsed } = useSidebarContext();
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return null;
  }
  
  return (
   
    <aside className="h-screen z-[202] sticky top-0" suppressHydrationWarning>
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} suppressHydrationWarning/>
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Dashboard"
              icon={<HomeIcon />}
              isActive={pathname === "/dashboard"}
              href="/"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/accounts"}
                title="Our Accounts"
                icon={<AccountsIcon />}
                href="accounts"
              />
              <SidebarItem
                isActive={pathname === "/payments"}
                title="Church Payments"
                icon={<PaymentsIcon />}
              />
              <CollapseItems
                icon={<BalanceIcon />}
                items={["Banks Accounts", "Credit Cards", "Loans"]}
                title="Balances"
              />
              <SidebarItem
                isActive={pathname === "/customers"}
                title="Sales People"
                icon={<CustomersIcon />}
              />
              <SidebarItem
                isActive={pathname === "/products"}
                title="Soteria Expenses"
                icon={<ProductsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/reports"}
                title="Issues & Updates"
                icon={<ReportsIcon />}
              />
            </SidebarMenu>

            <SidebarMenu title="General">
              <SidebarItem
                isActive={pathname === "/developers"}
                title="Directors"
                icon={<DevIcon />}
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Settings"
                icon={<SettingsIcon />}
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>               
          <UserInformation/>
          </div>
        </div>
      </div>
    </aside>
   
  );
};

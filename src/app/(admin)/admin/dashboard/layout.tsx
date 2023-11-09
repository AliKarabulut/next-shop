import Header from "@/components/admin/header";
import LeftMenu from "@/components/admin/left-menu";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      <div className="flex">
        <LeftMenu />
        <main className="bg-admin-grey-100 w-full rounded-lg">{children}</main>
      </div>
    </main>
  );
};

export default DashboardLayout;

import LeftMenu from "@/components/admin/left-menu";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex">
      <LeftMenu />
      {children}
    </main>
  );
};

export default DashboardLayout;

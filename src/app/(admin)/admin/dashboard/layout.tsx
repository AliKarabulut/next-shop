import Header from "@/components/admin/header";
import LeftMenu from "@/components/admin/left-menu";
import { StoreProvider } from "@/store/admin/store-provider";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <main>
        <Header />
        <div className="flex">
          <LeftMenu />
          <main className="bg-admin-grey-100 w-full rounded-lg px-8 py-4">{children}</main>
        </div>
      </main>
    </StoreProvider>
  );
};

export default DashboardLayout;

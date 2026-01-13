import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardHome from "./DashboardHome";

function Dashboard() {
  return (
    <div className="d-flex">
      <DashboardSidebar />

      <div className="flex-grow-1">
        <DashboardHeader />
        
        <div className="p-4" style={{ minHeight: "100vh", background: "#f8fafc" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard
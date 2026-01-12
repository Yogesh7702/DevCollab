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
        <DashboardHome />
      </div>
    </div>
  );
}

export default Dashboard
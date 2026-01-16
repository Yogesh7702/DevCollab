import React from "react";
import {Outlet, outlet} from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

function DashboardLayout() {
    return (
        <div className = "d-flex">
            <DashboardSidebar />
        

        <div className = "flex-grow-1">
            <DashboardHeader />

            <div className = "p-4">
                <Outlet />
            </div>
        </div>
        </div>
    );
}

export default DashboardLayout;
// src/dashboard/DashboardHome.js
import React from "react";

function DashboardHome() {
  return (
    <div className="p-4">
      <h2>Welcome to DevCollab 🎉</h2>
      <p className="text-muted">
        This is your dashboard overview. Backend integration will come later.
      </p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Total Projects</h5>
            <h3>0</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Teams</h5>
            <h3>0</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Messages</h5>
            <h3>0</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;

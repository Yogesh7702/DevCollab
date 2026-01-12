import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaUsers,
  FaUserCircle,
  FaCog,
} from "react-icons/fa";

function DashboardSidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Projects", path: "/dashboard/projects", icon: <FaProjectDiagram /> },
    { name: "Teams", path: "/dashboard/teams", icon: <FaUsers /> },
    { name: "Profile", path: "/dashboard/profile", icon: <FaUserCircle /> },
    { name: "Settings", path: "/dashboard/settings", icon: <FaCog /> },
  ];

  return (
    <div
      className="vh-100 d-flex flex-column p-3"
      style={{
        width: "260px",
        background: "linear-gradient(180deg, #0f172a, #020617)",
        color: "#fff",
      }}
    >
      
      <h3 className="fw-bold text-center mb-5">DevCollab</h3>

     
      <ul className="nav nav-pills flex-column gap-3">
        {menu.map((item) => (
          <li key={item.name} className="nav-item">
            <Link
              to={item.path}
              className={`nav-link d-flex align-items-center gap-3 px-3 ${
                location.pathname === item.path ? "active" : ""
              }`}
              style={{
                color: "#cbd5f5",
                borderRadius: "10px",
              }}
            >
              <span style={{ fontSize: "18px" }}>{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>


      <div className="mt-auto text-center text-muted small">
        © DevCollab 2026
      </div>
    </div>
  );
}

export default DashboardSidebar;

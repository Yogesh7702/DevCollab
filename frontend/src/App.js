import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import DashboardHome from "./dashboard/DashboardHome";
import Projects from "./dashboard/Projects";
import Profile from "./dashboard/Profile";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Routes>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="projects" element={<Projects />} />
        <Route path="profile" element={<Profile />} />
      </Route>

    </Routes>
  );
}

export default App;

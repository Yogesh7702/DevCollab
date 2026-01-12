import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './dashboard/Dashboard';
import ProtectedRoutes from "./components/ProtectedRoutes";


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        } />
      </Routes>
  
  );
}

export default App;


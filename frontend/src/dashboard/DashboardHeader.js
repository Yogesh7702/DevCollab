import React , {useContext} from "react";
import AuthContext  from "../context/AuthContext";

function DashboardHeader() {
    const {user} = useContext(AuthContext);

    return (
        <div className="d-flex justify-content-between align-items-center border-bottom p-3">
            <h5 className="mb-0">Dashboard</h5>
            <span className = "text-muted">{user?.email}</span>
        </div>
    )
}

export default DashboardHeader;
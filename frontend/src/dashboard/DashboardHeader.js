import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

function DashboardHeader() {
const dispatch = useDispatch();
const {user} = useSelector((state) => state.auth);

    return (
        <div className="d-flex justify-content-between align-items-center border-bottom p-3">
            <h5 className="mb-0">Dashboard</h5>
            <span className = "text-muted">{user?.email}</span>
        </div>
    )
}

export default DashboardHeader;
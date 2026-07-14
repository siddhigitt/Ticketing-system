import {
    FaHome,
    FaTicketAlt,
    FaPlusCircle,
    FaChartBar,
    FaCog,
    FaSignOutAlt,
    FaRobot
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import "../styles/Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("user");

        navigate("/login");

    };
    return (

        <div className="sidebar">

            <div className="logo-section">

                <h2>Ticket Service</h2>

                <p>Support Portal</p>

            </div>

            <hr />

            <ul className="menu">

                <li>

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        <FaHome />
                        <span>Home</span>
                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/my-tickets"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        <FaTicketAlt />
                        <span>My Tickets</span>
                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/create-ticket"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        <FaPlusCircle />
                        <span>Create Ticket</span>
                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/operations-report"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        <FaRobot />
                        <span>AI Monitoring</span>
                    </NavLink>

                </li>

                <li>

                    <NavLink
                        to="/settings"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        <FaCog />
                        <span>Settings</span>
                    </NavLink>

                </li>

            </ul>

            <div className="logout" onClick={handleLogout}>

                <FaSignOutAlt />

                <span>Logout</span>

            </div>

        </div>

    );

}


export default Sidebar;
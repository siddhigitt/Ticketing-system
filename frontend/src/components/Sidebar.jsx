import {
    FaHome,
    FaTicketAlt,
    FaPlusCircle,
    FaChartBar,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="logo-section">
                <h2>Ticket Service</h2>
                <p>Support Portal</p>
            </div>

            <hr />

            <ul className="menu">

                <li className="active">
                    <FaHome />
                    <span>Home</span>
                </li>

                <li>
                    <FaTicketAlt />
                    <span>My Tickets</span>
                </li>

                <li>
                    <FaPlusCircle />
                    <span>Create Ticket</span>
                </li>

                <li>
                    <FaChartBar />
                    <span>Analytics</span>
                </li>

                <li>
                    <FaCog />
                    <span>Settings</span>
                </li>

            </ul>

            <div className="logout">

                <FaSignOutAlt />

                <span>Logout</span>

            </div>

        </div>
    );
}

export default Sidebar;
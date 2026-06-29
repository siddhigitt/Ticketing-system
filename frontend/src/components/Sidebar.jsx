import { FaHome, FaTicketAlt, FaPlusCircle, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import "../styles/Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">

            <h2>Ticket Service</h2>

            <ul>

                <li>
                    <FaHome />
                    Home
                </li>

                <li>
                    <FaTicketAlt />
                    My Tickets
                </li>

                <li>
                    <FaPlusCircle />
                    Create Ticket
                </li>

                <li>
                    <FaChartBar />
                    Analytics
                </li>

                <li>
                    <FaSignOutAlt />
                    Logout
                </li>

            </ul>

        </div>
    );
}

export default Sidebar;
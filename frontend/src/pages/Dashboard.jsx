import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import RecentTickets from "../components/RecentTickets";
import "../styles/Dashboard.css";

const stats = [

    {
        title: "Open Tickets",
        count: 12,
        color: "#2563EB"
    },

    {
        title: "In Progress",
        count: 5,
        color: "#F59E0B"
    },

    {
        title: "Resolved",
        count: 43,
        color: "#22C55E"
    },

    {
        title: "Critical",
        count: 3,
        color: "#EF4444"
    }

];
function Dashboard() {

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="dashboard-content">

                    <div className="cards">

                        {stats.map((card) => (

                            <StatsCard
                                key={card.title}
                                title={card.title}
                                count={card.count}
                                color={card.color}
                            />

                        ))}

                    </div>

                    <RecentTickets />

                </div>

            </div>

        </div>

    );

}

export default Dashboard;
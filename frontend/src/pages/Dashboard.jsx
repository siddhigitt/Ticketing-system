import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import RecentTickets from "../components/RecentTickets";
import { getAllTickets } from "../services/ticketService";
import "../styles/Dashboard.css";

function Dashboard() {

    const [stats, setStats] = useState([
        {
            title: "Open Tickets",
            count: 0,
            color: "#2563EB"
        },
        {
            title: "In Progress",
            count: 0,
            color: "#F59E0B"
        },
        {
            title: "Resolved",
            count: 0,
            color: "#22C55E"
        },
        {
            title: "Critical",
            count: 0,
            color: "#EF4444"
        }
    ]);

    useEffect(() => {

        loadDashboardStats();

    }, []);

    const loadDashboardStats = async () => {

        try {

            const tickets = await getAllTickets();

            const open = tickets.filter(
                ticket => ticket.status === "OPEN"
            ).length;

            const inProgress = tickets.filter(
                ticket => ticket.status === "IN_PROGRESS"
            ).length;

            const resolved = tickets.filter(
                ticket => ticket.status === "RESOLVED"
            ).length;

            const critical = tickets.filter(
                ticket => ticket.priority === "Critical"
            ).length;

            setStats([
                {
                    title: "Open Tickets",
                    count: open,
                    color: "#2563EB"
                },
                {
                    title: "In Progress",
                    count: inProgress,
                    color: "#F59E0B"
                },
                {
                    title: "Resolved",
                    count: resolved,
                    color: "#22C55E"
                },
                {
                    title: "Critical",
                    count: critical,
                    color: "#EF4444"
                }
            ]);

        } catch (error) {

            console.error("Failed to load dashboard statistics", error);

        }

    };

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
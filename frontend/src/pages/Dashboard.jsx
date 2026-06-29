import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import "../styles/Dashboard.css";

function Dashboard() {

    return (

        <div className="dashboard">

            <Sidebar/>

            <div className="main-content">

                <Navbar/>

                <div className="dashboard-content">

                    <div className="cards">

                        <StatsCard title="Open Tickets" count="12" color="#2563EB"/>

                        <StatsCard title="In Progress" count="5" color="#F59E0B"/>

                        <StatsCard title="Resolved" count="43" color="#22C55E"/>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;
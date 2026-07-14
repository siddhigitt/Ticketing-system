import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/OperationsReport.css";

function OperationsMonitoring() {

    const [report, setReport] = useState("");
    const [loading, setLoading] = useState(false);
    const [generatedTime, setGeneratedTime] = useState("");

    const [stats, setStats] = useState({
        totalTickets: 0,
        openTickets: 0,
        criticalTickets: 0,
        resolvedTickets: 0
    });

    useEffect(() => {

        loadStats();

    }, []);

    const loadStats = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/dashboard/stats"
            );

            setStats(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const generateReport = async () => {

        setLoading(true);

        try {

            const response = await axios.get(
                "http://localhost:8080/ai/report"
            );

            setReport(response.data.choices[0].message.content);

            setGeneratedTime(
                new Date().toLocaleString()
            );

            // Refresh dashboard stats after monitoring
            loadStats();

        } catch (error) {

            alert("Failed to generate report.");

        }

        setLoading(false);

    };

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="operations-monitoring-page">

                    <div className="page-header">

                        <h1 className="page-title">
                            AI Operations Monitoring
                        </h1>

                        <p className="page-subtitle">
                            Monitor system-wide ticket activity using AI to identify operational trends, recurring issues and potential incidents.
                        </p>

                    </div>

                    {/* Dashboard Statistics */}

                    <div className="stats-grid">

                        <div className="stat-card">

                            <h3>Total Tickets</h3>

                            <h2>{stats.totalTickets}</h2>

                        </div>

                        <div className="stat-card">

                            <h3>Open Tickets</h3>

                            <h2>{stats.openTickets}</h2>

                        </div>

                        <div className="stat-card">

                            <h3>Critical Tickets</h3>

                            <h2>{stats.criticalTickets}</h2>

                        </div>

                        <div className="stat-card">

                            <h3>Resolved Tickets</h3>

                            <h2>{stats.resolvedTickets}</h2>

                        </div>

                    </div>

                    <button
                        className="generate-btn"
                        onClick={generateReport}
                    >
                        Analyze Current System
                    </button>

                    <br />
                    <br />

                    {loading && <h3 className="loading-text">Generating Monitoring Analysis...</h3>}

                    {report && (

                        <div className="report-card">

                            <div className="report-header">

                                <div className="report-title">

                                    Latest Monitoring Analysis

                                </div>

                                <div className="report-date">

                                    Last Analysis

                                    <br />

                                    {generatedTime}

                                </div>

                            </div>

                            <div className="report-content">

                                <ReactMarkdown>

                                    {report}

                                </ReactMarkdown>

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}

export default OperationsMonitoring;
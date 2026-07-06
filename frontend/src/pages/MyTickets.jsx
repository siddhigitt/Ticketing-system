import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {getAllTickets, deleteTicket} from "../services/ticketService";
import "../styles/MyTickets.css";

function MyTickets() {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {

        loadTickets();

    }, []);

    const loadTickets = async () => {

        try {

            const data = await getAllTickets();

            setTickets(data);

        }

        catch (error) {

            console.error("Failed to load tickets", error);

        }

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this ticket?"
        );

        if (!confirmDelete) return;

        try {

            await deleteTicket(id);

            alert("Ticket deleted successfully.");

            loadTickets();

        }

        catch (error) {

            console.error("Failed to delete ticket", error);

            alert("Failed to delete ticket.");

        }

    };

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="dashboard-content my-tickets-page">

                    <div className="page-header">

                        <h1>My Tickets</h1>

                        <p>
                            View and manage all submitted support tickets.
                        </p>

                    </div>

                    <div className="tickets-table">

                        <table>

                            <thead>

                            <tr>

                                <th>ID</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Created</th>
                                <th>Actions</th>

                            </tr>

                            </thead>

                            <tbody>

                            {tickets.map((ticket) => (

                                <tr key={ticket.id}>

                                    <td>#{ticket.id}</td>

                                    <td>{ticket.title}</td>

                                    <td>{ticket.category}</td>

                                    <td>

                                        <span className={`priority ${ticket.priority.toLowerCase()}`}>
                                            {ticket.priority}
                                        </span>

                                    </td>

                                    <td>

                                        <span className={`status ${ticket.status.toLowerCase().replace("_","-")}`}>
                                            {ticket.status}
                                         </span>

                                    </td>

                                    <td>
                                        {new Date(ticket.createdAt).toLocaleDateString()}
                                    </td>

                                    <td>

                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDelete(ticket.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default MyTickets;
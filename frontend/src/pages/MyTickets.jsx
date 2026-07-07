import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {getAllTickets, deleteTicket, updateTicketStatus} from "../services/ticketService";
import "../styles/MyTickets.css";

function MyTickets() {

    const [tickets, setTickets] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("ALL");
    const [statusFilter, setStatusFilter] = useState("ALL");
    const [categoryFilter, setCategoryFilter] = useState("ALL");
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadTickets();

    }, []);

    const loadTickets = async () => {

        try {

            setLoading(true);

            const data = await getAllTickets();

            setTickets(data);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

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
    const handleStatusChange = async (id, newStatus) => {

        try {

            await updateTicketStatus(id, newStatus);

            loadTickets();

        }

        catch (error) {

            console.error("Failed to update status", error);

            alert("Failed to update ticket status.");

        }

    };
    const filteredTickets = tickets.filter((ticket) => {

        const matchesSearch =

            ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||

            ticket.category.toLowerCase().includes(searchTerm.toLowerCase()) ||

            ticket.priority.toLowerCase().includes(searchTerm.toLowerCase()) ||

            ticket.status.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesPriority =

            priorityFilter === "ALL" ||

            ticket.priority === priorityFilter;

        const matchesStatus =

            statusFilter === "ALL" ||

            ticket.status === statusFilter;

        const matchesCategory =

            categoryFilter === "ALL" ||

            ticket.category === categoryFilter;

        return (

            matchesSearch &&

            matchesPriority &&

            matchesStatus &&

            matchesCategory

        );

    });
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

                    <div className="search-container">

                        <input

                            type="text"

                            placeholder="Search tickets..."

                            className="ticket-search"

                            value={searchTerm}

                            onChange={(e) => setSearchTerm(e.target.value)}

                        />

                    </div>

                    <div className="filters">

                        <select
                            value={priorityFilter}
                            onChange={(e) => setPriorityFilter(e.target.value)}
                        >
                            <option value="ALL">All Priorities</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="ALL">All Status</option>
                            <option value="OPEN">Open</option>
                            <option value="IN_PROGRESS">In Progress</option>
                            <option value="RESOLVED">Resolved</option>
                            <option value="CLOSED">Closed</option>
                        </select>

                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option value="ALL">All Categories</option>
                            <option value="Software">Software</option>
                            <option value="Hardware">Hardware</option>
                            <option value="Network">Network</option>
                            <option value="Access">Access</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>


                    {loading ? (

                        <h3>Loading tickets...</h3>

                    ) : (

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

                                {filteredTickets.length === 0 ? (

                                    <tr>

                                        <td colSpan="7" className="empty-state">

                                            <h3>No Tickets Found</h3>

                                            <p>
                                                Try changing the search or filter options.
                                            </p>

                                        </td>

                                    </tr>

                                ) : (

                                    filteredTickets.map((ticket) => (

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

                                                <select
                                                    className="status-dropdown"
                                                    value={ticket.status}
                                                    onChange={(e) =>
                                                        handleStatusChange(ticket.id, e.target.value)
                                                    }
                                                >

                                                    <option value="OPEN">OPEN</option>
                                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                                    <option value="RESOLVED">RESOLVED</option>
                                                    <option value="CLOSED">CLOSED</option>

                                                </select>

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

                                    ))

                                )}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}

export default MyTickets;
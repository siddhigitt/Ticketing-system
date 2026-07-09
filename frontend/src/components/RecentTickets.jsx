import { useEffect, useState } from "react";
import { getAllTickets } from "../services/ticketService";
import "../styles/RecentTickets.css";

function RecentTickets() {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {

        loadTickets();

    }, []);

    const loadTickets = async () => {

        try {

            const data = await getAllTickets();

            setTickets(data);

        } catch (error) {

            console.error("Failed to load tickets", error);

        }

    };

    return (

        <div className="recent-tickets">

            <div className="table-header">

                <h2>Recent Tickets</h2>

                <button>View All</button>

            </div>

            <table>

                <thead>

                <tr>

                    <th>ID</th>
                    <th>Title</th>
                    <th>User</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Created</th>

                </tr>

                </thead>

                <tbody>

                {tickets.length === 0 ? (

                    <tr>

                        <td colSpan="5" className="empty-state">
                            No tickets found.
                        </td>

                    </tr>

                ) : (

                    tickets.map((ticket) => (

                        <tr key={ticket.id}>

                            <td>
                <span className="ticket-id">
                    #{ticket.id}
                </span>
                            </td>

                            <td className="ticket-title">
                                {ticket.title}
                            </td>

                            <td>{ticket.user?.name}</td>

                            <td>
                <span className={`status ${ticket.status.toLowerCase().replace("_","-")}`}>
                    {ticket.status}
                </span>
                            </td>

                            <td className="ticket-date">
                                {new Date(ticket.createdAt).toLocaleDateString()}
                            </td>

                        </tr>

                    ))

                )}

                </tbody>

            </table>

        </div>

    );

}

export default RecentTickets;
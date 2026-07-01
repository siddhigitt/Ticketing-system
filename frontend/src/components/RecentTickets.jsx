import "../styles/RecentTickets.css";
import { recentTickets } from "../data/dashboardData";

function RecentTickets() {

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
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Created</th>
                </tr>

                </thead>

                <tbody>

                {recentTickets.map((ticket) => (

                    <tr key={ticket.id}>

                        <td>
                                <span className="ticket-id">
                                    {ticket.id}
                                </span>
                        </td>

                        <td className="ticket-title">
                            {ticket.title}
                        </td>

                        <td>
                                <span className={`priority ${ticket.priority.toLowerCase()}`}>
                                    {ticket.priority}
                                </span>
                        </td>

                        <td>
                                <span className={`status ${ticket.status.toLowerCase().replace(" ", "-")}`}>
                                    {ticket.status}
                                </span>
                        </td>

                        <td className="ticket-date">
                            {ticket.date}
                        </td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>

    );

}

export default RecentTickets;
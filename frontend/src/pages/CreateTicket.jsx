import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { createTicket } from "../services/ticketService";
import "../styles/CreateTicket.css";

function CreateTicket() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Software");
    const [priority, setPriority] = useState("Low");

    const handleClear = () => {

        setTitle("");
        setDescription("");
        setCategory("Software");
        setPriority("Low");

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!title.trim() || !description.trim()) {

            alert("Please fill in all required fields.");

            return;

        }

        const ticket = {

            title,
            description,
            category,
            priority,

            user: {
                id: 1
            }

        };

        try {

            const savedTicket = await createTicket(ticket);

            console.log(savedTicket);

            alert("Ticket created successfully.");

            handleClear();

        } catch (error) {

            console.error(error);

            alert("Failed to create ticket.");

        }

    };

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="create-ticket-page">

                    <div className="page-header">

                        <h1>Create Ticket</h1>

                        <p>Submit a new support request.</p>

                    </div>

                    <div className="ticket-form-card">

                        <form onSubmit={handleSubmit}>

                            <div className="form-group">

                                <label>Ticket Title *</label>

                                <input
                                    type="text"
                                    placeholder="Enter ticket title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />

                            </div>

                            <div className="form-group">

                                <label>Description *</label>

                                <textarea
                                    rows="6"
                                    placeholder="Describe your issue..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>

                            </div>

                            <div className="form-row">

                                <div className="form-group">

                                    <label>Category</label>

                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >

                                        <option>Software</option>
                                        <option>Hardware</option>
                                        <option>Network</option>
                                        <option>Access</option>
                                        <option>Other</option>

                                    </select>

                                </div>

                                <div className="form-group">

                                    <label>Priority</label>

                                    <select
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                    >

                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Critical</option>

                                    </select>

                                </div>

                            </div>

                            <div className="button-group">

                                <button
                                    type="button"
                                    className="secondary-btn"
                                    onClick={handleClear}
                                >
                                    Clear
                                </button>

                                <button
                                    type="submit"
                                    className="primary-btn"
                                >
                                    Submit Ticket
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default CreateTicket;
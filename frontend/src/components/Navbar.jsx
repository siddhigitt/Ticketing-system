import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar-title">
                Home
            </div>

            <div className="navbar-right">

                <input
                    type="text"
                    placeholder="Search tickets..."
                    className="search-box"
                />

                <div className="profile">
                    <div className="profile-avatar">
                        SR
                    </div>

                    <div>
                        <h4>Siddhi Rudrakshi</h4>
                        <p>Administrator</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Navbar;
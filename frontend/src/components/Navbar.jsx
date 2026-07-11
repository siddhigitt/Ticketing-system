import "../styles/Navbar.css";

function Navbar() {
    const user = JSON.parse(localStorage.getItem("user"));
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
                        {user?.name
                            ?.split(" ")
                            .map((word) => word[0])
                            .join("")}
                    </div>

                    <div>
                        <h4>{user?.name}</h4>
                        <p>{user?.role}</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Navbar;
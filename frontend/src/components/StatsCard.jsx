import "../styles/StatsCard.css";
function StatsCard({ title, count, color }) {
    return (
        <div className="stats-card">

            <div
                className="top-line"
                style={{ background: color }}
            ></div>

            <h3>{title}</h3>

            <h1>{count}</h1>

            <p>Updated today</p>

        </div>
    );
}

export default StatsCard;
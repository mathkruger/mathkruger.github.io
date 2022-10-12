import "./ProgressBar.css";

function ProgressBar({ label, percentage }) {
    return (
        <div className="custom-progress-bar">
            <p>{label}</p>
            <div className="progress-bar progress-bar-no-arrow">
                <div className="progress-bar-filled" style={{width: percentage + "%"}} data-filled="Loading 60%"></div>
            </div>
        </div>
    )
}

export default ProgressBar;
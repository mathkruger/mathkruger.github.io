import "./ProgressBar.css";

function ProgressBar({ label, percentage, icon }) {
    return (
        <div className="custom-progress-bar">
            <p>
                { icon.length > 0 ? (<i className={"devicon-" + icon}></i>) : "" } {label}
            </p>
            <div className="progress-bar progress-bar-no-arrow">
                <div className="progress-bar-filled" style={{width: percentage + "%"}} data-filled="Loading 60%"></div>
            </div>
        </div>
    )
}

export default ProgressBar;
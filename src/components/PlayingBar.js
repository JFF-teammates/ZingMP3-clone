import React from "react";

export default function PlayingBar(props) {
    return (
        <div className="playing-bar">
            <p>PlayingBar</p>
        <div className="playing-bar__progress-bar">
            <div className="playing-bar__progress-bar-fill" />
        </div>
        <div className="playing-bar__time-display">
            <div className="playing-bar__time-display-current">0:00</div>
            <div className="playing-bar__time-display-separator">/</div>
            <div className="playing-bar__time-display-total">0:00</div>
        </div>
        </div>
    );
}
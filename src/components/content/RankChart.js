import React from "react";

export default function RankChart() {
    return (
        <div className="rank-chart">
        <div className="rank-chart__item">
            <div className="rank-chart__item-icon">
            <i className="fas fa-search" />
            </div>
            <div className="rank-chart__item-text">Search</div>
        </div>
        <div className="rank-chart__item">
            <div className="rank-chart__item-icon">
            <i className="fas fa-plus" />
            </div>
            <div className="rank-chart__item-text">Create Playlist</div>
        </div>
        <div className="rank-chart__item">
            <div className="rank-chart__item-icon">
            <i className="fas fa-ellipsis-h" />
            </div>
            <div className="rank-chart__item-text">More</div>
        </div>
        </div>
    );
}
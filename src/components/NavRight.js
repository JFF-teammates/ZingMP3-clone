import React from "react";

export default function NavRight(props) {
    return (
        <div className="nav-right">
        <div className="nav-right__item">
            <div className="nav-right__item-icon">
            <i className="fas fa-search" />
            </div>
            <div className="nav-right__item-text">Search</div>
        </div>
        <div className="nav-right__item">
            <div className="nav-right__item-icon">
            <i className="fas fa-plus" />
            </div>
            <div className="nav-right__item-text">Create Playlist</div>
        </div>
        <div className="nav-right__item">
            <div className="nav-right__item-icon">
            <i className="fas fa-ellipsis-h" />
            </div>
            <div className="nav-right__item-text">More</div>
        </div>
        </div>
    );
}
import React from "react";

export default function NavLeft(props) {
    return (
        <div className="nav-left">
        <div className="nav-left__item">
            <div className="nav-left__item-icon">
            <i className="fas fa-search" />
            </div>
            <div className="nav-left__item-text">Search</div>
        </div>
        <div className="nav-left__item">
            <div className="nav-left__item-icon">
            <i className="fas fa-plus" />
            </div>
            <div className="nav-left__item-text">Create Playlist</div>
        </div>
        <div className="nav-left__item">
            <div className="nav-left__item-icon">
            <i className="fas fa-ellipsis-h" />
            </div>
            <div className="nav-left__item-text">More</div>
        </div>
        </div>
    );
}
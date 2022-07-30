import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <p>Footer</p>
        <div className="footer__item">
            <div className="footer__item-icon">
            <i className="fas fa-search" />
            </div>
            <div className="footer__item-text">Search</div>
        </div>
        <div className="footer__item">
            <div className="footer__item-icon">
            <i className="fas fa-plus" />
            </div>
            <div className="footer__item-text">Create Playlist</div>
        </div>
        <div className="footer__item">
            <div className="footer__item-icon">
            <i className="fas fa-ellipsis-h" />
            </div>
            <div className="footer__item-text">More</div>
        </div>
        </div>
    );
}
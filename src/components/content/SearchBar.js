import React from "react";

export default function SearchBar(props) {
    return (
        <div className="search-bar">
            <p>SearchBar</p>
        <input
            className="search-bar__input"
            type="text"
            placeholder="Search"
            onChange={props.onChange}
        />
        </div>
    );
}
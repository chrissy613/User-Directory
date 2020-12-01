import React from "react"
import "./style.css";

function Search(props) {
    return (
        <div>
            <input 
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for an employee!"
            id="search"
            />
        </div>
    )
}

export default Search
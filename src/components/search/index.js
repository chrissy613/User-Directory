import React from "react"
import "./style.css";

function Search(props) {
    return (
        <div>
            <input 
            type="text" 
            name="search" 
            onChange={props.handleInputChange}
            value={props.search} 
            placeholder="Enter an employee's name to search!"
            />
        </div>
    )
}

export default Search
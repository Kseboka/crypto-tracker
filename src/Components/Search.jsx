import React, {useState} from "react";
import "../Styles/search.css";

export default function Search(props){
    const [searchInput, setSearchInput] = useState("");

    function handleChange(e){
        const {value} = e.target;
        setSearchInput(value);
        props.searchFunc(searchInput);
        props.isSearchFunc(searchInput);
    }

    return (
        <div className="search-bar">
            <input onChange={handleChange} type="text" value={searchInput} placeHolder="Search a coin"/>
        </div>
    )
}
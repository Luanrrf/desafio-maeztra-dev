import React from "react";
import "./searchbar.scss"

const SearchBar = () => {
    return (
    <div className="searchGroup">
        <form action="/" method="get" className="searchForm">
            <input
                type="text"
                id="header-search"
                placeholder="O Que Você Busca?"
                name="s" className="searchInput"
            />
            <button type="submit" className="searchButton normalButton">Buscar</button>
        </form>
    </div>
    )
}

export default SearchBar;
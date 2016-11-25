import React from 'react';

function Search() {
    return (
        <p className="Search control has-addons">
          <input className="input" type="text" placeholder="Find a to-do" />
          <button className="button is-info">
            Search
          </button>
        </p>
    );
}


export default Search;

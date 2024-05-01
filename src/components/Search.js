import React from "react";
import { MdSearch } from "react-icons/md";

export default function Search({ handleSearchTxt }) {
  return (
    <div className="input-group rounded"> 
      <span className="input-group-text">
        <MdSearch size="1.3em" />
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Type to search your expenses..."
        onChange={(event) => handleSearchTxt(event.target.value)}
      />
    </div>
  );
}

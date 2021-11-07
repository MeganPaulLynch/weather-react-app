import React from "react";

export default function Form() {
  return (
    <div>
      <div className="mb-3">
        <form id="searchForm">
          <input
            type="text"
            className="form-control"
            id="explore"
            placeholder="Enter a city"
            autocomplete="off"
            autofocus
          />
          <input
            type="submit"
            className="btn btn-primary ms-2"
            value="Search"
          />
          <input
            type="submit"
            className="btn btn-secondary"
            value="Current"
            id="current-location"
          />
        </form>
      </div>
    </div>
  );
}

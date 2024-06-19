import React from "react";

function Trips() {
  console.log("Trips");
  return (
    <div className="main">
      <h2>Trip Management</h2>
      <div className="filter_section">
        <button type="button" className="btn btn-primary">
          Add Trip
        </button>
      </div>
      <div className="main__section">
        <img
          src="./images/table.png"
          style={{ width: "1125px", height: "540px" }}
        />
      </div>
    </div>
  );
}

export default Trips;

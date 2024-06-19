import React from "react";

function Company() {
  console.log("Companys");
  return (
    <div className="main">
      <h2>Company Management</h2>
      <div className="filter_section">
        <button type="button" className="btn btn-primary">
          Add Company
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

export default Company;

import React from "react";
import { Link } from "react-router-dom";


// link to the pages that related to admin
const Homeadmin = () => {
  return (
    <>
      <main className="homeadmin">
        <div>
            <br/>
            <br/>
         <center>

          <button>
            <Link to="/view-all">View All the customer details </Link>
          </button>
        <br/>
        <br/>
          <button>Delete confirmed Activity Details</button>

          <br/>
          <br/>

          <button>
            <Link to="/view-report">Monthly report </Link>
          </button>

          </center>
        </div>
      </main>
    </>
  );
};

export default Homeadmin;
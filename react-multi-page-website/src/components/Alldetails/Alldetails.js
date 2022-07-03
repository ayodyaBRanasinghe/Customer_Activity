import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./alldetails.css";

//fetch all the activity details from database.

export default function Alldetails() {
  const [activity, setactivity] = useState([]);


  //connect to the database

  useEffect(() => {
    axios
      .get("http://localhost:8070/activity")
      .then((res) => {
        setactivity(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div className="activity-container">
        <br/>
        <br/>
        <center>
      <h4><em><b>...All Activity Details...</b></em></h4>
      </center>
      <main className="reg-form">
        <div>
          {activity.length === 0 ? (
            <>
              <div className="spin"></div>
            </>
          ) : (
            <div className="table-wrapper">
              <table>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>email address</th>
                  <th>phone</th>
                  <th>adults</th>
                  <th>kids</th>
                  <th>hotel</th>
                  <th>activity</th>
                  <th>check_in_date</th>
                  <th>check_out_date</th>
                  <th>nationality</th>
                </tr>
                {activity.map((item, key) => {
                  return (
                    <tr>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email_address}</td>
                      <td>{item.phone_number}</td>
                      <td>{item.adults}</td>
                      <td>{item.kids}</td>
                      <td>{item.hotel}</td>
                      <td>{item.activity_name}</td>
                      <td>{item.check_in_date}</td>
                      <td>{item.check_out_date}</td>
                      <td>{item.nationality}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          )}
          <div class="btn-block">
          <button>
            <Link to="/">GO BACK</Link>
          </button>
          </div>
        </div>
      </main>
    </div>
  );
}

//link to the go back button
import React from "react";
import "./Hiring.css";
import ITable from "./ITable"
import PTable from "./PTable"

class Hiring extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="box">
          <div className="flexd">
            <div align="middle" className="heading">
              <div>
                <br />
                <b>For hiring of FTEs/Interns(2/6 months)</b>
              <br />
              <hr />
              <br />
              </div>
          
            </div>
            <div className="flexlink">
              <div align="middle">
                <a href="#">Internship Calender</a>
                <ITable />
              </div>
              <div align="middle" class="pcal">
                <a href="#">Placement Calender</a>
                <PTable/>
              </div>
            </div>

            <br />
            <div class="hiring_text">
              The Preplacement Talks will be commencing from 1st weeek of
              October.
            </div>
            <div class="hiring_text">
              The recruitment season will start from 1st of December and the
              process will continue upto May 2019.
            </div>
            <div>
              <p />
            </div>
            <div align="middle">
              <button type="submit">Register</button>
              <p />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hiring;

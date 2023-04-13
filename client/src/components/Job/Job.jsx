import React from "react";
import "./job.css";
function Job() {
  return (
    <div className="mainJob">
      <div className="name">Software Engineer</div>
      <div className="company">Morabaa Software Solutions</div>
      <div className="country">Turkey - İstanbul</div>
      <div className="option">
        <div className="salary">9.000 TL - 20.000 TL</div>
        <div className="typeOfjob">Full Time</div>
      </div>
      <button className="detailBtn">Details</button>
    </div>
  );
}

export default Job;

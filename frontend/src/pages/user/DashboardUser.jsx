import React from "react";
import vdicon from "./pic/vdicon.png";
import taleicon from "./pic/taleicon.png";
import gameicon from "./pic/gameicon.png";

function DashboardUser() {
  return (
    <div
      className="userDash"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
        marginTop: 150,
      }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={vdicon} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Videos</h5>
          <p className="card-text">To watch some videos .</p>
          <a href="#" className="btn btn-primary">
            Show videos
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={taleicon} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Tales</h5>
          <p className="card-text">To watch some tales.</p>
          <a href="#" className="btn btn-primary">
            Show tales
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={gameicon} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Games</h5>
          <p className="card-text">to play some games.</p>
          <a href="#" className="btn btn-primary">
            Show games
          </a>
        </div>
      </div>
    </div>
  );
}

export default DashboardUser;

import React, { useEffect } from "react";
import vdicon from "./pic/vdicon.png";
import taleicon from "./pic/taleicon.png";
import gameicon from "./pic/gameicon.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { reset, getVideos } from "../../features/videos/videoSlice";
import { getTales } from "../../features/tales/taleSlice";
function DashboardUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authUser);
  const { isLoading, isError, message } = useSelector((state) => state.Videos);
  const {
    isLoading: loadingTales,
    isError: errorTales,
    message: messageTales,
  } = useSelector((state) => state.Tales);

  useEffect(() => {
    if (isError) {
      const messages = message.split("\n");
      messages.forEach((message) => {
        toast.error(message);
      });
    }

    if (!user) {
      navigate("/login");
    }

    if (user) {
      dispatch(getVideos());
      dispatch(getTales());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, navigate, dispatch]);

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
          <Link to="/tales" className="btn btn-primary">
            Show tales
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={taleicon} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Tales</h5>
          <p className="card-text">To watch some tales.</p>
          <Link to="/videos" className="btn btn-primary">
            Show videos
          </Link>
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

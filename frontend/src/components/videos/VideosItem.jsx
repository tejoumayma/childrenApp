import React from "react";
import { useDispatch } from "react-redux";
import { deleteVideo, unsetCurrent } from "../../features/videos/videoSlice";

const VideoItem = ({ video }) => {
  const dispatch = useDispatch();
  const { URLvd, vdName, vdDescription, createdAt } = video;

  const onDelete = () => {
    dispatch(deleteVideo(vdName));
    dispatch(unsetCurrent());
  };

  return (
    <div className="card mt-3" style={{ width: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">
          {vdName}
          <br />
          <small className="text-secondary fs-6">
            {new Date(createdAt).toDateString()} at{" "}
            {new Date(createdAt).toLocaleTimeString()}
          </small>
        </h5>

        <p className="card-text">{vdName && <span>{vdName}</span>}</p>
        <p className="card-text">{URLvd && <span>{URLvd}</span>}</p>
        <p className="card-text">
          {vdDescription && <span>{vdDescription}</span>}
        </p>

        <button className="btn btn-danger me-3" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default VideoItem;

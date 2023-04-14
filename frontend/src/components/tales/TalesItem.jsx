import React from "react";
import { useDispatch } from "react-redux";
import { deleteTale, unsetCurrentTale } from "../../features/tales/taleSlice";

const TaleItem = ({ tale }) => {
  const dispatch = useDispatch();
  const { URLtale, taleName, taleDescription, createdAt } = tale;

  const onDelete = () => {
    dispatch(deleteTale(taleName));
    dispatch(unsetCurrentTale());
  };

  return (
    <div className="card mt-3" style={{ width: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">
          {taleName}
          <br />
          <small className="text-secondary fs-6">
            {new Date(createdAt).toDateString()} at{" "}
            {new Date(createdAt).toLocaleTimeString()}
          </small>
        </h5>

        <p className="card-text">{taleName && <span>{taleName}</span>}</p>
        <p className="card-text">{URLtale && <span>{URLtale}</span>}</p>
        <p className="card-text">
          {taleDescription && <span>{taleDescription}</span>}
        </p>

        <button className="btn btn-danger me-3" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaleItem;

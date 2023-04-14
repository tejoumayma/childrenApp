import React from "react";
import { useSelector } from "react-redux";
import TalesItem from "./TalesItem";

const Tales = () => {
  const { tales } = useSelector((state) => state.Tales);
  if (tales.length === 0) {
    return <h3 className="text-center">You have not set any tales</h3>;
  }
  return tales.map((tale) => <TalesItem key={tale._id} tale={tale} />);
};

export default Tales;

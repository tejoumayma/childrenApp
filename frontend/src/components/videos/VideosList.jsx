import React from "react";
import { useSelector } from "react-redux";
import VideosItem from "./VideosItem";

const Videos = () => {
  const { videos } = useSelector((state) => state.Videos);
  if (videos.length === 0) {
    return <h3 className="text-center">You have not set any videos</h3>;
  }
  return videos.map((video) => <VideosItem key={video._id} video={video} />);
};

export default Videos;

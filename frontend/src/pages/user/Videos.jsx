import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import VideosList from "../../components/videos/VideosList";
import { getVideos, reset } from "../../features/videos/videoSlice";

const Videos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authUser);
  const { isLoading, isError, message } = useSelector((state) => state.Videos);

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
    }

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, navigate, dispatch]);

  return (
    <div>
      <H3>Welcom to our videos space my little {user.childName}</H3>
      <div>
        {" "}
        <VideosList />{" "}
      </div>
    </div>
  );
};

export default Videos;

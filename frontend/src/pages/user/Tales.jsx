import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TalesList from "../../components/tales/TalesList";
import { getTales, reset } from "../../features/tales/taleSlice";

const Tales = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authUser);
  const { isLoading, isError, message } = useSelector((state) => state.Tales);

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
      dispatch(getTales());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, navigate, dispatch]);

  return (
    <div>
      <H3>Welcom to our tales space my little {user.childName}</H3>
      <div>
        {" "}
        <TalesList />{" "}
      </div>
    </div>
  );
};

export default Tales;

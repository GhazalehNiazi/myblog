import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Redirect404 = () => {
  let navigate = useNavigate();

  useEffect(() => {
    let path = localStorage.getItem("path");
    if (path) {
      localStorage.removeItem("path");
      console.log(path);
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
};

export default Redirect404;

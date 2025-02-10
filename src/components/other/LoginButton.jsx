import React from "react";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/Login">
      <button className="btn">
        <CiLogin />
        Login
      </button>
    </Link>
  );
};

export default LoginButton;

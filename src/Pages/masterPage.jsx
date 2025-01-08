import React from "react";
import MyNavBar from "../Componets/MyNavBar";
import { Outlet } from "react-router-dom";

const MasterPage = () => {
  return (
    <>
      <MyNavBar></MyNavBar>
      <Outlet></Outlet>
    </>
  );
};

export default MasterPage;

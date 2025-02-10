import React, { useEffect, useState } from "react";
import NavBar from "../components/other/NavBar";
import axiosInstance from "../config/AuxiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { setUser, removeUser } from "../redux/slice/UserSlice";
import Banner from "../components/other/Banner";

const HomePage = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const checkUserLogged = async () => {
    try {
      const responce = await axiosInstance({
        method: "GET",
        url: "/user/userProfile",
      });
      console.log("responce===>", responce.data.data);
      dispatch(setUser(responce.data.data));

      // console.log(responce.data.data);
      // console.log(responce);
    } catch (err) {}
  };

  useEffect(() => {
    checkUserLogged();
    console.log("Redux_user", user);
  }, []);

  return (
    <>
      <NavBar></NavBar>
    
    </>
  );
};

export default HomePage;

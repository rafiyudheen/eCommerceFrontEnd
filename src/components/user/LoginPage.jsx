import { useEffect, useState } from "react";
import logo from "../../ICO/logo.svg";
import axiosInstance from "../../config/AuxiosInstance";
import ErrorAlert from "../alert/ErrorAlert";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [ShowError, setShowError] = useState();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // console.log("Logging in with", user, password);
    try {
      const responce = await axiosInstance({
        method: "POST",
        url: "/user/login",
        data: { USER_NAME: user, PASSWORD: password },
      });
      navigate("/");
      // console.log(responce);
    } catch (err) {
      let errorMessage = err.response.data.message;
      alert(errorMessage);
    }
  };

  return (
    <>
      <div className="flex  items-center justify-center h-screen neutral-content">
        <div className="card secondary-content shadow-lg p-8 rounded-xl w-96">
          <h3 className="text-2xl font-bold text-center ">Login</h3>
          <div className="my-5 flex justify-center">
            <img
              src={logo}
              alt=""
              //   className="flex items-center justify-center"
              style={{ width: "150px" }}
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Username / Mobile No</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username or mobile"
              className="input input-bordered w-full"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-full mt-6" onClick={handleLogin}>
            Login
          </button>
          {ShowError && <ErrorAlert errorMessage={ShowError}></ErrorAlert>}
          <div className="text-center mt-4">
            <p className="">
              Don't have an account?{" "}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => {
                  navigate("/Register");
                }}
              >
                Register Now
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

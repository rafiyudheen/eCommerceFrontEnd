import { useState } from "react";
import logo from "../ICO/logo.svg";
import { useNavigate } from "react-router-dom";

const RegistrationSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();
  const handleSelection = (role) => {
    setSelectedRole(role);
  };
  const proceedToRegistration = () => {
    if (selectedRole === "User") {
      console.log(selectedRole);
      navigate("/Register/user");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-6 ">
      <img
        className="mb-5"
        src={logo}
        alt=""
        //   className="flex items-center justify-center"
        style={{ width: "250px" }}
      />
      <h1 className="text-2xl font-bold mb-6">Select Registration Type</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`card w-80 bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105 ${
            selectedRole === "User" ? "border-4 border-primary" : ""
          }`}
          onClick={() => handleSelection("User")}
        >
          <div className="card-body text-center">
            <h2 className="card-title">User</h2>
            <p>Register as a user to explore our services.</p>
          </div>
        </div>

        <div
          className={`card w-80 bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer transition-transform transform hover:scale-105 ${
            selectedRole === "Seller" ? "border-4 border-primary" : ""
          }`}
          onClick={() => handleSelection("Seller")}
        >
          <div className="card-body text-center">
            <h2 className="card-title">Seller</h2>
            <p>Register as a seller to list and manage products.</p>
          </div>
        </div>
      </div>

      {selectedRole && (
        <div className="mt-6">
          <button
            className="btn btn-primary mt-4"
            onClick={proceedToRegistration}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationSelection;

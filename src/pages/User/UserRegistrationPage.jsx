import { useState } from "react";

const UserRegistrationPage = () => {
  const [formData, setFormData] = useState({
    USER_NAME: "",
    FULL_NAME: "",
    MOBILE_NO: "",
    E_MAIL: "",
    PASSWORD: "",
    confirmPassword: "",
    USER_TYPE: "User",
    profilePic: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.PASSWORD !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // const { confirmPassword, ...submittedData } = formData;
    console.log("Form Submitted", submittedData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 p-6">
      <div className="w-full max-w-lg bg-base-200 shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Registration</h1>
        <form
          className="bg-base-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <input
            className="input input-bordered w-full mb-4"
            type="text"
            name="USER_NAME"
            placeholder="User Name"
            value={formData.USER_NAME}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full mb-4"
            type="text"
            name="FULL_NAME"
            placeholder="Full Name"
            value={formData.FULL_NAME}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full mb-4"
            type="tel"
            name="MOBILE_NO"
            placeholder="Mobile No"
            value={formData.MOBILE_NO}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full mb-4"
            type="email"
            name="E_MAIL"
            placeholder="Email ID"
            value={formData.E_MAIL}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full mb-4"
            type="password"
            name="PASSWORD"
            placeholder="Password"
            value={formData.PASSWORD}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full mb-4"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <input
            className="file-input file-input-bordered w-full mb-4"
            type="file"
            name="profilePic"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
          <button className="btn btn-primary w-full" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationPage;

import { useState } from "react";
import { Input, Button } from "../../Components/Comp_index.js";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ChangePassword() {
  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChangePassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "http://localhost:8000/api/v1/user/change-password",
        changePassword,
        { withCredentials: true }
      );
      toast.success(
        response?.data?.message || "Password changed successfully!"
      );
      setChangePassword({ oldPassword: "", newPassword: "" });
    } catch (error) {
      const errorMsg =
        error?.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-gray-900 to-green-900 px-4 py-8">
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-green-300 mb-6 text-center tracking-wide drop-shadow">
          🔐 Change Password
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Old Password */}
          <div className="relative">
            <Input
              placeholder="Enter your old password"
              className="bg-green-800/60 text-white w-full border border-green-400/30 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-green-200"
              type={showOldPassword ? "text" : "password"}
              name="oldPassword"
              value={changePassword.oldPassword}
              onChange={handleChange}
            />
            <div
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-green-200 hover:text-white cursor-pointer transition"
            >
              {showOldPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
          </div>

          {/* New Password */}
          <div className="relative">
            <Input
              placeholder="Enter your new password"
              className="bg-green-800/60 text-white w-full border border-green-400/30 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-green-200"
              type={showNewPassword ? "text" : "password"}
              name="newPassword"
              value={changePassword.newPassword}
              onChange={handleChange}
            />
            <div
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-green-200 hover:text-white cursor-pointer transition"
            >
              {showNewPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
          </div>

          <Button
            className="bg-gradient-to-r from-green-500 to-green-700 text-white text-lg font-semibold py-2 px-4 rounded-lg shadow-md hover:from-green-600 hover:to-green-800 transition-all duration-200 ease-in-out"
            text="Change Password"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;

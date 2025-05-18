import React from "react";
import { useState } from "react";
import { Input, Button } from "../../Components/Comp_index.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        formData
      );
      document.getElementById("my_modal_3").close();
      toast.success(response?.data?.message || "login successful!", {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      console.log(error.response);
      const errorMsg =
        error?.response?.data || "Something went wrong. Please try again.";
      setErrorMessage(errorMsg);
      toast.error(errorMsg);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-green-800">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black text-white">
              ✕
            </button>
          </form>
          <div className="flex flex-col items-center justify-center dark">
            <div className="w-full max-w-md bg-green-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <Input
                  placeholder="Email address"
                  className="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Password"
                  className="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="flex items-center justify-between flex-wrap">
                  <label
                    className="text-sm text-gray-200 cursor-pointer"
                    for="remember-me"
                  >
                    <Input className="mr-2" id="remember-me" type="checkbox" />
                    Remember me
                  </label>
                  <a
                    className="text-sm text-blue-400 hover:underline mb-0.5"
                    href="#"
                  >
                    Forgot password?
                  </a>
                  <p className="text-white mt-4">
                    {" "}
                    Don't have an account?{" "}
                    <a
                      className="text-sm text-blue-400 -200 hover:underline mt-4"
                      href="#"
                    >
                      Signup
                    </a>
                  </p>
                </div>
                <Button
                  className="bg-gradient-to-r from-green-500 to-green-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-green-600 transition ease-in-out duration-150"
                  type="submit"
                  text="login"
                />
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

import React from "react";
import { useState } from "react";
import { SignUpPic } from "../../assets/img_index.js";
import { Input, Button } from "../../Components/Comp_index.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Login } from "../Index.js";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
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
        "http://localhost:8000/api/v1/user/register",
        formData
      );
      setFormData({ fullName: "", userName: "", email: "", password: "" });
      toast.success(response?.data?.message || "Registration successful!", {
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      const errorMsg =
        error?.response?.data || "Something went wrong. Please try again.";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50  px-4 sm:px-6 lg:px-8 mb-5">
      <div className="max-w-6xl mx-auto">
        <div className="bg-green-900 text-white  rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left side - Form */}
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold  mb-2">Sign Up Form</h2>
                <p className="">Please fill in your details below</p>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="userName"
                    className="block text-sm font-medium mb-2"
                  >
                    userName
                  </label>
                  <Input
                    id="userName"
                    name="userName"
                    type="text"
                    required
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 outline-none"
                    placeholder="Enter userName"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium  mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required={true}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 outline-none"
                    placeholder="Enter your father's name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-2"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required={true}
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 outline-none"
                    placeholder="Enter your phone password"
                  />
                </div>
                <div>
                  <p>
                    already have account!{" "}
                    <a
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      className="underline text-blue-400 cursor-pointer"
                    >
                      login
                    </a>
                    <Login />
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  text="Sign Up"
                />
              </form>
            </div>

            {/* Right side - Image */}
            <div className="bg-gray-100 hidden items-center justify-center p-8 md:flex">
              <div className="relative w-full h-full min-h-[400px]">
                <img
                  src={SignUpPic}
                  alt="Token"
                  className="object-cover w-full h-full  rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

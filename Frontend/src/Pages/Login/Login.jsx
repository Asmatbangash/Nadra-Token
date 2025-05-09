import React from "react";
import { useState } from "react";
import { LoginPic } from "../../assets/img_index.js";
import { Input, Button } from "../../Components/Comp_index.js";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-green-800">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black text-white">
              ✕
            </button>
          </form>
          <div class="flex flex-col items-center justify-center dark">
            <div class="w-full max-w-md bg-green-800 rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-bold text-gray-200 mb-4">Login</h2>
              <form class="flex flex-col">
                <input
                  placeholder="Email address"
                  class="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="email"
                />
                <input
                  placeholder="Password"
                  class="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="password"
                />
                <div class="flex items-center justify-between flex-wrap">
                  <label
                    class="text-sm text-gray-200 cursor-pointer"
                    for="remember-me"
                  >
                    <input class="mr-2" id="remember-me" type="checkbox" />
                    Remember me
                  </label>
                  <a
                    class="text-sm text-blue-400 hover:underline mb-0.5"
                    href="#"
                  >
                    Forgot password?
                  </a>
                  <p class="text-white mt-4">
                    {" "}
                    Don't have an account?{" "}
                    <a
                      class="text-sm text-blue-400 -200 hover:underline mt-4"
                      href="#"
                    >
                      Signup
                    </a>
                  </p>
                </div>
                <button
                  class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

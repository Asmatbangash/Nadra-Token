import React from "react";
import { useState } from "react";
import { Input, Button } from "../Comp_index";
import axios from "axios";

export default function TokenForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    contactNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/token/generate-token",
        formData
      );
      console.log(response);
      setFormData({
        fullName: "",
        fatherName: "",
        contactNo: "",
      });
    } catch (error) {}
  };

  return (
    <dialog id="token-form" className="modal">
      <div className="modal-box bg-green-800">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black text-white">
            ✕
          </button>
        </form>
        <div className="flex flex-col items-center justify-center dark">
          <div className="w-full max-w-md bg-green-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
              Token Form
            </h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <Input
                placeholder="enter full name"
                className="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 transition ease-in-out duration-150"
                type="text"
                required={true}
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              <Input
                placeholder="father name"
                className="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                required={true}
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
              />
              <Input
                placeholder="contact No"
                className="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="number"
                required={true}
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
              />
              <Button
                className="bg-gradient-to-r from-green-500 to-green-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-green-600 transition ease-in-out duration-150 cursor-pointer"
                type="submit"
                text="Generate Token"
              />
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
}

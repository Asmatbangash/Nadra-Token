import React from "react";
import { useState } from "react";
import { Input, Button } from "../Comp_index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function TokenForm() {
  const serviceTypes = [
    { value: "cnic", label: "CNIC Registration/Renewal" },
    { value: "nicop", label: "NICOP Application" },
    { value: "frc", label: "Family Registration Certificate" },
    { value: "childReg", label: "Child Registration Certificate" },
    { value: "poc", label: "Pakistan Origin Card" },
    { value: "deathCert", label: "Death Certificate" },
    { value: "birthCert", label: "Birth Certificate" },
    { value: "smartCard", label: "Smart Card" },
  ];

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    contactNo: "",
    serviceType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/token/generate-token",
        formData,
        {
          withCredentials: true,
        }
      );
      toast.success("Token generated successfully!");
      setTimeout(() => {
        navigate("/tokens");
        window.location.reload();
      }, 2500);
      setFormData({
        fullName: "",
        fatherName: "",
        contactNo: "",
        serviceType: "",
      });
      document.getElementById("token-form").close();
    } catch (error) {
      const errorMsg = error.response.data?.message || "something went wrong";
      toast.error(errorMsg);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <dialog id="token-form" className="modal">
        <div className="modal-box bg-green-800">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black text-white">
              ✕
            </button>
          </form>
          <div className="flex flex-col items-center justify-center dark">
            <div className="w-full max-w-md bg-green-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-200">Token Form</h2>
              <p className="text-md mb-5">
                Enter your details to generate a token
              </p>
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <label
                  htmlFor="fullName"
                  className="text-left block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <Input
                  id="fullName"
                  placeholder="enter full name"
                  className="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 transition ease-in-out duration-150"
                  type="text"
                  required={true}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <label
                  htmlFor="fatherName"
                  className="text-left block text-sm font-medium mb-2"
                >
                  Father Name
                </label>
                <Input
                  id="fatherName"
                  placeholder="father name"
                  className="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                  required={true}
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                />
                <label
                  htmlFor="serviceType"
                  className="text-left block text-sm font-medium mb-2"
                >
                  Select Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 w-full focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 transition ease-in-out duration-150"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceTypes.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>

                <label
                  htmlFor="contactNo"
                  className="text-left block text-sm font-medium mb-2"
                >
                  Contact No
                </label>
                <Input
                  id="contactNo"
                  placeholder="03XXXXXXXXX"
                  className="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="text"
                  required={true}
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  minLength={11}
                  maxLength={11}
                  pattern="03[0-9]{9}"
                  title="Enter a valid with out space 11-digit Pakistani number starting with 03"
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
    </>
  );
}

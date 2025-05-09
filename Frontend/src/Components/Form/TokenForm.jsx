import React from "react";
import { useState } from "react";
import { Input, Button } from "../Comp_index";

export default function TokenForm() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    number: "",
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
    <dialog id="token-form" className="modal">
      <div className="modal-box bg-green-800">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black text-white">
            ✕
          </button>
        </form>
        <div class="flex flex-col items-center justify-center dark">
          <div class="w-full max-w-md bg-green-800 rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-bold text-gray-200 mb-4">Token Form</h2>
            <form class="flex flex-col">
              <Input
                placeholder="full name"
                class="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
              />
              <Input
                placeholder="father name"
                class="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
              />
              <Input
                placeholder="contact No"
                class="bg-green-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-green-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="number"
              />
              <Button
                class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
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

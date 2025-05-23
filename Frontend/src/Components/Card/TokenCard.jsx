import React, { useContext, useState } from "react";
import { NadraTokenContext } from "../../Context/NadraTokenContext";
import { Tekmark } from "../Comp_index";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "../Comp_index";

function TokenCard({ token, id }) {
  const { role } = useContext(NadraTokenContext);
  const [showMenu, setShowMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editableFields, setEditableFields] = useState({
    fullName: token.fullName,
    fatherName: token.fatherName,
    contactNo: token.contactNo,
  });

  const handleUpdate = async (tokenId) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/v1/token/update-token-detail/${tokenId}`,
        editableFields,
        { withCredentials: true }
      );
      toast.success(response.data?.message || "Token updated successfully!");
      setIsEditing(false);
      setShowMenu(false);
      setTimeout(() => window.location.reload(), 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update token.");
      console.log(error);
    }
  };

  const handleDelete = async (tokenId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v1/token/delete-token/${tokenId}`,
        { withCredentials: true }
      );
      toast.success(response.data?.message);
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete token.");
      console.log(error);
    }
  };

  const handleConfirm = () => {
    console.log("Confirm", token);
    setShowMenu(false);
  };

  const onEditClick = () => {
    setEditableFields({
      fullName: token.fullName,
      fatherName: token.fatherName,
      contactNo: token.contactNo,
    });
    setIsEditing(true);
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
      <div className="relative min-w-72 hover:scale-105 duration-200 mx-6">
        <div className="absolute top-2 right-2 z-20">
          <div className="relative">
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="text-white focus:outline-none cursor-pointer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 2a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 110 4 2 2 0 010-4z" />
              </svg>
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-1 bg-white text-black rounded shadow-lg z-30 w-28">
                {isEditing ? (
                  <button
                    onClick={() => handleUpdate(id)}
                    className="block w-full text-left px-4 py-2 hover:bg-green-600"
                  >
                    Update
                  </button>
                ) : (
                  <button
                    onClick={onEditClick}
                    className="block w-full text-left px-4 py-2 hover:bg-green-600"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(id)}
                  className="block w-full text-left px-4 py-2 hover:bg-green-600"
                >
                  Delete
                </button>
                {role === "admin" && (
                  <button
                    onClick={handleConfirm}
                    className="block w-full text-left px-4 py-2 hover:bg-green-600"
                  >
                    Confirm
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center bg-green-900 min-w-80 h-auto pt-5 pb-7 border border-green-500 rounded-lg hover:scale-105 duration-200">
          <section className="flex flex-col text-center space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Nadra Token
            </h2>
            <p className="text-white text-sm mb-2">Pakistan</p>
          </section>
          <section className="space-y-2">
            <div className="flex gap-2">
              <Tekmark />
              {isEditing ? (
                <>
                  <label htmlFor="contactNo" className="text-white">
                    FullName:
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required={true}
                    value={editableFields.fullName}
                    onChange={(e) =>
                      setEditableFields((prev) => ({
                        ...prev,
                        fullName: e.target.value,
                      }))
                    }
                    className="text-white text-sm border-1 outline-none bg-transparent"
                  />
                </>
              ) : (
                <span className="text-white text-sm">
                  FullName: {token.fullName}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <Tekmark />
              {isEditing ? (
                <>
                  <label htmlFor="contactNo" className="text-white">
                    FatherName:
                  </label>
                  <Input
                    id="fatherName"
                    name="fatherName"
                    type="text"
                    value={editableFields.fatherName}
                    onChange={(e) =>
                      setEditableFields((prev) => ({
                        ...prev,
                        fatherName: e.target.value,
                      }))
                    }
                    className="text-white text-sm border-1 outline-none bg-transparent"
                  />
                </>
              ) : (
                <span className="text-white text-sm">
                  FatherName: {token.fatherName}
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <Tekmark />
              <span className="text-white text-sm">
                Service Type: {token.serviceType}
              </span>
            </div>
            <div className="flex gap-2">
              <Tekmark />
              <span className="text-white text-sm">
                Token No : {token.TokenNo}
              </span>
            </div>
            <div className="flex gap-2">
              <Tekmark />
              {isEditing ? (
                <>
                  <label htmlFor="contactNo" className="text-white">
                    Contact No:
                  </label>
                  <Input
                    id="contactNo"
                    name="contactNo"
                    type="text"
                    required={true}
                    minLength={11}
                    maxLength={11}
                    pattern="03[0-9]{9}"
                    value={editableFields.contactNo}
                    onChange={(e) =>
                      setEditableFields((prev) => ({
                        ...prev,
                        contactNo: e.target.value,
                      }))
                    }
                    className="text-white text-sm border-1 outline-none bg-transparent"
                  />
                </>
              ) : (
                <span className="text-white text-sm">
                  Contact No: {token.contactNo}
                </span>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default TokenCard;

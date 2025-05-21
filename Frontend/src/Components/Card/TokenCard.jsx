import React, { useContext, useState } from "react";
import { NadraTokenContext } from "../../Context/NadraTokenContext";

function TokenCard({ token }) {
  const { role } = useContext(NadraTokenContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleEdit = () => {
    console.log("Edit", token);
    setShowMenu(false);
  };

  const handleDelete = () => {
    console.log("Delete", token);
    setShowMenu(false);
  };

  const handleConfirm = () => {
    console.log("Confirm", token);
    setShowMenu(false);
  };

  return (
    <div className="relative w-72 hover:scale-105 duration-200 m-3">
      {/* Three-dot menu (always visible) */}
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
              <button
                onClick={handleEdit}
                className="block w-full text-left px-4 py-2 hover:bg-green-600"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="block w-full text-left px-4 py-2 hover:bg-green-600"
              >
                Delete
              </button>
              {role === "admin" ? (
                <button
                  onClick={handleConfirm}
                  className="block w-full text-left px-4 py-2 hover:bg-green-600"
                >
                  Confirm
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col items-center bg-green-900 w-72 h-auto pt-5 pb-7 border border-green-500 rounded-lg space-y-8 hover:scale-105 duration-200">
        <section className="flex flex-col text-center space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Nadra Token
          </h2>
          <p className="text-white text-sm">pakistan</p>
        </section>
        <section className="space-y-2">
          <div className="flex gap-2">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-5 h-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              />
            </svg>
            <span className="text-white text-sm">Name : {token.Name}</span>
          </div>
          <div className="flex gap-2">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-5 h-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              />
            </svg>
            <span className="text-white text-sm">
              FatherName : {token.FatherName}
            </span>
          </div>
          <div className="flex gap-2">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-5 h-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              />
            </svg>
            <span className="text-white text-sm">
              Token No : {token.TokenNo}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TokenCard;

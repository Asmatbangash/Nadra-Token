import React, { useContext } from "react";
import { NadraTokenContext } from "../../Context/NadraTokenContext";
import { userImg, warningGif } from "../../assets/img_index";

function UserProfile() {
  const { user } = useContext(NadraTokenContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-900 via-gray-900 to-green-900 p-4">
      {!user ? (
        <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
          <img
            src={warningGif}
            alt="Warning"
            className="w-28 h-28 mb-4 animate-bounce bg-white"
          />
          <h1 className="text-xl font-semibold text-red-400">
            You are not a registered user
          </h1>
        </div>
      ) : (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white flex flex-col items-center gap-6">
          <div className="w-32 h-32 rounded-full border-4 border-green-400 overflow-hidden shadow-lg">
            <img
              src={userImg}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-200 drop-shadow">
              {user.fullName}
            </h2>
            <p className="text-sm text-green-100">✔ Registered User</p>
          </div>

          <ul className="w-full space-y-3 text-sm text-green-100">
            <li className="flex justify-between border-b border-green-700 pb-1">
              <span className="font-medium">📧 Email:</span>
              <span>{user.email}</span>
            </li>
            <li className="flex justify-between border-b border-green-700 pb-1">
              <span className="font-medium">📅 Created:</span>
              <span>{new Date(user.createdAt).toLocaleDateString()}</span>
            </li>
            <li className="flex justify-between border-b border-green-700 pb-1">
              <span className="font-medium">🕓 Updated:</span>
              <span>{new Date(user.updatedAt).toLocaleDateString()}</span>
            </li>
          </ul>

          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:from-blue-600 hover:to-blue-800 transition duration-300">
            ✏ Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;

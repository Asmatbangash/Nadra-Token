import React from "react";

function TokenCard({ token }) {
  return (
    <>
      <div className="flex flex-col items-center bg-green-900  w-72 h-auto pt-5 pb-7 border border-green-500 rounded-lg space-y-8 hover:scale-105 duration-200">
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
                clip-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span className="text-white text-sm">Name : {token.Name} </span>
          </div>
          <div className="flex gap-2">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-5 h-5 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span className="text-white text-sm">
              FatherName : {token.FatherName}{" "}
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
                clip-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span className="text-white text-sm">
              Token No : {token.TokenNo}{" "}
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

export default TokenCard;

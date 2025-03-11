import React from "react";

function Token() {
  const tokens = [
    { Name: "a", FatherName: "f", TokenNo: "1" },
    { Name: "b", FatherName: "d", TokenNo: "2" },
    { Name: "c", FatherName: "c", TokenNo: "3" },
    { Name: "d", FatherName: "b", TokenNo: "4" },
    { Name: "f", FatherName: "a", TokenNo: "5" },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center space-x-3 space-y-3 mt-4 mb-15">
      {tokens.map((token) => (
        <div class="flex flex-col items-center bg-white w-72 h-auto pt-5 pb-7 border border-green-500 rounded-lg space-y-8">
          <section class="flex flex-col text-center space-y-1">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">
              Nadra Token
            </h2>
            <p class="text-slate-500 text-sm">pakistan</p>
          </section>
          <section class="space-y-2">
            <div class="flex gap-2">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                class="w-5 h-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span class="text-slate-500 text-sm">Name : {token.Name} </span>
            </div>
            <div class="flex gap-2">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                class="w-5 h-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span class="text-slate-500 text-sm">
                FatherName : {token.FatherName}{" "}
              </span>
            </div>
            <div class="flex gap-2">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                class="w-5 h-5 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span class="text-slate-500 text-sm">
                Token No : {token.TokenNo}{" "}
              </span>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Token;

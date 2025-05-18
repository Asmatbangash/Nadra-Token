import React from "react";
import { TokenCard } from "../../Components/Comp_index";

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
        <TokenCard token={token} />
      ))}
    </div>
  );
}

export default Token;

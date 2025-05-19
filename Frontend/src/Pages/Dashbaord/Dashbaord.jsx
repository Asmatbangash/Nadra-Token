import React from "react";
import { TokenCard } from "../../Components/Comp_index";
function Dashbaord() {
  const tokens = [
    { Name: "Ahmad", FatherName: "Muhammad", TokenNo: "1" },
    { Name: "Zaid", FatherName: "Abdullah", TokenNo: "2" },
    { Name: "Hassan", FatherName: "Umar", TokenNo: "3" },
    { Name: "Bilal", FatherName: "Yusuf", TokenNo: "4" },
    { Name: "Ali", FatherName: "Khalid", TokenNo: "5" },
  ];
  return (
    <div className="flex flex-wrap justify-center items-center space-x-3 space-y-3 mt-4 mb-15">
      {tokens.map((token) => (
        <>
          <TokenCard token={token} />
        </>
      ))}
    </div>
  );
}

export default Dashbaord;

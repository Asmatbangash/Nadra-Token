import React, { useContext } from "react";
import { TokenCard } from "../../Components/Comp_index";
import { NadraTokenContext } from "../../Context/NadraTokenContext";
function Dashbaord() {
  const { allToken } = useContext(NadraTokenContext);
  return (
    <div className="flex flex-wrap justify-center items-center space-x-3 space-y-5 mt-4 mb-15 min-h-screen">
      {allToken.map((token) => (
        <>
          <TokenCard token={token} />
        </>
      ))}
    </div>
  );
}

export default Dashbaord;

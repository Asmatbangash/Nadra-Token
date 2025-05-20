import React, { useContext } from "react";
import { TokenCard } from "../../Components/Comp_index";
import { NadraTokenContext } from "../../Context/NadraTokenContext";

function Token() {
  const { tokens } = useContext(NadraTokenContext);
  return (
    <>
      {tokens ? (
        <div className="flex min-h-screen flex-wrap justify-center items-center space-x-3 space-y-5 mt-4 mb-15">
          {tokens.map((token) => (
            <TokenCard token={token} />
          ))}
        </div>
      ) : (
        <h1 className="flext justify-center items-center min-h-screen">
          Your are not generated Any Token
        </h1>
      )}
    </>
  );
}

export default Token;

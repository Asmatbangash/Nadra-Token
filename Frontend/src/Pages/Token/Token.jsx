import React, { useContext } from "react";
import { TokenCard } from "../../Components/Comp_index";
import { NadraTokenContext } from "../../Context/NadraTokenContext";

function Token() {
  const { currentUserTokens } = useContext(NadraTokenContext);

  return (
    <>
      {currentUserTokens.length === 0 ? (
        <h1 className="text-black text-5xl min-h-screen text-center mt-20">
          You have not generated any token
        </h1>
      ) : (
        <div className="flex min-h-screen flex-wrap justify-center items-center gap-5 mt-4 mb-10">
          {currentUserTokens.map((token) => (
            <TokenCard key={token._id || token.id} token={token} />
          ))}
        </div>
      )}
    </>
  );
}

export default Token;

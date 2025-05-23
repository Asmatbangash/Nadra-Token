import React, { useContext } from "react";
import { TokenCard } from "../../Components/Comp_index";
import { NadraTokenContext } from "../../Context/NadraTokenContext";
import { warningGif } from "../../assets/img_index";

function Token() {
  const { user, currentUserTokens } = useContext(NadraTokenContext);

  return (
    <>
      {user && currentUserTokens.length === 0 ? (
        <div className="flex flex-col min-h-screen justify-center items-center">
          <img src={warningGif} alt="" className="w-40 h-40" />
          <h1 className="text-black text-5xl text-center mt-15">
            You have not generated <br /> any Token
          </h1>
        </div>
      ) : (
        <div className="flex min-h-screen  flex-wrap justify-center items-center gap-4 mt-4 ">
          {currentUserTokens.map((token) => (
            <>
              <TokenCard
                id={token._id}
                key={token._id || token.id}
                token={token}
              />
            </>
          ))}
        </div>
      )}
    </>
  );
}

export default Token;

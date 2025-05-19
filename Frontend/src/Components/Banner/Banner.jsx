import { useContext } from "react";
import { line1 } from "../../assets/img_index.js";
import { Button, TokenForm } from "../../Components/Comp_index.js";
import { NadraTokenContext } from "../../Context/NadraTokenContext.jsx";
import { ToastContainer, toast } from "react-toastify";

function Banner() {
  const { user } = useContext(NadraTokenContext);
  const handlOnclick = () => {
    if (user) {
      document.getElementById("token-form").showModal();
    } else {
      toast.error("please login before generating Token!");
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${line1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md absolute top-85">
            <h1 className="mb-5 text-3xl font-bold">
              Say Goodbye to Long line — Get Your Token Online!
            </h1>
            <p className="mb-5">
              A fast and simple way to get your NADRA token online — no more
              waiting in long lines. Book your token in seconds from anywhere!
            </p>
            <Button
              className="btn bg-green-900 rounded-sm text-white"
              text="Generate Token"
              onClick={handlOnclick}
            />
            <TokenForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

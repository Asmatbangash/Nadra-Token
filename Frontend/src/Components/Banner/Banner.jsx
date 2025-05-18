import { line11 } from "../../assets/img_index.js";
import { Button, TokenForm } from "../../Components/Comp_index.js";

function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${line11})`,
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
            onClick={() => document.getElementById("token-form").showModal()}
          />
          <TokenForm />
        </div>
      </div>
    </div>
  );
}

export default Banner;

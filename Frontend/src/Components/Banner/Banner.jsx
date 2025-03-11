import { Link } from "react-router-dom";
import { line } from "../../assets/img_index.js";
import { Button } from "../../Components/Comp_index.js";

function Banner() {
  return (
    <div
      className="w-full inset-0 opacity-90 px-6 lg:px-8 py-24 sm:py-32 text-center"
      style={{
        backgroundImage: `url(${line})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center w-full mt-50">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-7xl ">
          No more standing in line!
        </h2>
        <ul className=" mt-8 text-lg font-medium text-white sm:text-xl ">
          <li>No more waiting in long line!</li>
          <li>Just click the token generation button
          and save your time.</li>
          <li>Say goodbye to unnecessary delays and generate your
          token online effortlessly</li>
        </ul>
        <Link to='/generat-token'>
        <Button
          className="cursor-pointer bg-lime-900 hover:bg-lime-950 active:border active:border-lime-900 rounded-md duration-100 p-2 text-white mt-7" type="button" text="Click here to Generate Token"
        />
        </Link>
      </div>
    </div>
  );
}

export default Banner;

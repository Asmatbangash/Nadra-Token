import React from "react";
import "aos/dist/aos.css";

function Card({ key, service, className = "" }) {
  return (
    <div className={`card ${className}`}>
      <figure className="">
        <img src={service.img} alt="Shoes" className="rounded-t-xl " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.title}</h2>
        <p>{service.desc}</p>
      </div>
    </div>
  );
}

export default Card;

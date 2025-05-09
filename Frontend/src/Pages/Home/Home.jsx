import React from "react";
import { Card, Banner } from "../../Components/Comp_index";
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
} from "../../assets/img_index.js";

function Home() {
  const services = [
    {
      img: card1,
      title: "National Identity Card",
      desc: "National Identity Card (NIC) is issued to the citizens of Pakistan.",
    },
    {
      img: card2,
      title: "Juvenile Card",
      desc: "Juvenile card is an identity card issued to children under the age of 18 years.",
    },
    {
      img: card3,
      title: "Pakistan Origin Card",
      desc: "Pakistan Origin Card (POC) program endeavors to provide eligible foreigners.",
    },
    {
      img: card4,
      title: "Cancellation Certificate",
      desc: "Cancellation Certificate (CC) program endeavors to provide Cancellation Certificate",
    },
    {
      img: card5,
      title: "National Identity Card for Overseas",
      desc: "National Identity Card for Overseas Pakistanis is issued to the overseas of Pakistan.",
    },
    {
      img: card6,
      title: "Child Registration Certificate",
      desc: "Child Registration Certificate is a means of registering a new born with your NADRA record",
    },
    {
      img: card7,
      title: "Family Registration Certificate",
      desc: "Family Registration Certificate (FRC) is a means of being identified with NADRA’s record",
    },
    {
      img: card8,
      title: "Succession Certificate",
      desc: "Succession Certificate and Letter of Administration is issued to successor on behalf of deceased person",
    },
  ];
  return (
    <div>
      <Banner />
      <div className="px-4 py-2 text-center text-white">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Identity <span className="text-lime-300">Documents</span>
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            NADRA has gained international recognition for its success in
            providing solutions for identification, e-governance and secure
            documents that deliver multiple goals of mitigating identity theft,
            safe-guarding the interests of our clients and facilitating the
            public.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center pb-10">
        {services.map((service, index) => (
          <Card
            key={index}
            service={service}
            className="w-60 h-80 hover:scale-105 duration-200 bg-green-900 text-white shadow-sm m-3"
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

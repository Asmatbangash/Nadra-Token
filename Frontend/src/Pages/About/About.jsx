import React from "react";
import { line, timePic, onlineToken } from "../../assets/img_index";
import { Card } from "../../Components/Comp_index";

function About() {
  const services = [
    {
      img: line,
      title: "No waiting in line",
    },
    {
      img: timePic,
      title: "Time Saving",
    },
    {
      img: onlineToken,
      title: "Generate Token Online",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 text-white">
      <h1 className="text-2xl font-bold text-center my-4">
        NO LINE || TIME SAVING
      </h1>

      {/* Responsive Paragraphs Section */}
      <div className="para flex flex-wrap justify-center items-center text-center lg:text-left">
        <p className="p1 lg:border-l-2 border-gray-400 pl-4 lg:w-1/4 sm:w-full mb-4">
          No more waiting in long lines! With our online token generation
          system, you can say goodbye to frustrating delays and long queues.
        </p>
        <p className="p2 lg:border-l-2 border-gray-400 pl-4 lg:w-1/4 sm:w-full mb-4">
          Gone are the days of standing in crowded waiting areas for hours.
          Simply access the website, click the token generation button, and
          receive your token instantly.
        </p>
        <p className="p3 lg:border-l-2 border-gray-400 pl-4 lg:w-1/4 sm:w-full mb-4">
          Our system is designed to streamline the process, making it convenient
          for everyone. Secure your place in the queue without physically being
          there.
        </p>
        <p className="p4 lg:border-l-2 border-gray-400 pl-4 lg:w-1/4 sm:w-full mb-4">
          Embrace the future of smart queuing and enjoy the convenience of
          online token generation. Get your token now and experience efficiency
          like never before!
        </p>
      </div>

      {/* Responsive Cards Section */}
      <div className="w-full flex justify-center flex-wrap  items-center pb-10">
        {services.map((service, index) => (
          <Card
            key={index}
            service={service}
            className="w-60 h-60 hover:scale-105 duration-200 bg-green-900 text-white shadow-sm m-3"
          />
        ))}
      </div>
    </div>
  );
}

export default About;

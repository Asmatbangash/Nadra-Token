import React from 'react';
import { line, timePic, onlineToken } from "../../assets/img_index.js";
import { Card } from '../../Components/Comp_index';

function About() {
  const services = [
    {
      picture: line,
      title: "No waiting in line",
    },
    {
      picture: timePic,
      title: "Time Saving",
    },
    {
      picture: onlineToken,
      title: "Generate Token Online",
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16'>
      <h1 className="text-2xl font-bold text-center my-4">NO LINE || TIME SAVING</h1>

      {/* Responsive Paragraphs Section */}
      <div className="para flex flex-wrap justify-center items-center text-center lg:text-left">
        <p className="p1 lg:border-l-2 border-gray-400 pl-4 lg:w-1/4 sm:w-full mb-4">
          No more waiting in long lines! With our online token generation system, you can say goodbye to frustrating delays and long queues.
        </p>
        <p className="p2 lg:border-l-2 border-gray-400 pl-4 lg:w-1/4 sm:w-full mb-4">
          Gone are the days of standing in crowded waiting areas for hours. Simply access the website, click the token generation button, and receive your token instantly.
        </p>
        <p className="p3 lg:border-l-2 border-gray-400 pl-4 lg:w-1/4 sm:w-full mb-4">
          Our system is designed to streamline the process, making it convenient for everyone. Secure your place in the queue without physically being there.
        </p>
        <p className="p4 lg:border-l-2 border-gray-400 pl-4 lg:w-1/4 sm:w-full mb-4">
          Embrace the future of smart queuing and enjoy the convenience of online token generation. Get your token now and experience efficiency like never before!
        </p>
      </div>

      {/* Responsive Cards Section */}
      <div className="w-full flex flex-wrap justify-center items-center gap-6 pb-20">
        {services.map((service, index) => (
          <Card
            key={index}
            picture={service.picture}
            title={service.title}
          />
        ))}
      </div>
    </div>
  );
}

export default About;

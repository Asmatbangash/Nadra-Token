import React, { useEffect } from "react";
// import { National, junila, origin, overses, success, album2, album3, album4, album5, album6, album7 } from "../../assets/img_index";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card({ picture, title = "Title", desc = "" }) {
      useEffect(() => {
        AOS.init({ duration: 2000 });
    
        return () => {
          AOS.refresh();
        };
      }, []);
    
  return (
          <div
            key={title}
            className="profile-card w-[270px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group m-2"
            data-aos='fade-down'
          >
            <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
              <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                <img
                  src={picture}
                  alt={title}
                  className="size-36 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                />
                <div className="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
              </div>
            </div>
            <div className="headings *:text-center *:leading-4">
              <p className="text-xl font-serif font-semibold text-[#434955]">{title}</p>
            </div>
            <div className="w-full items-center justify-center flex">
              <p className="text-center">{desc}</p>
            </div>
            <hr className="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
          </div>
   
  )
}

export default Card
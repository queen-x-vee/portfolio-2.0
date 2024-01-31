import React from "react";

import Image from "next/image";
import HtmlIcon from "../../public/htmlIcon.svg";
import CssIcon from "../../public/css.svg";
import TailwindIcon from "../../public/tailwind.svg";
import ReactIcon from "../../public/react.svg";
import JavascriptIcon from "../../public/javascript.svg";

const frontendIcons = [
  {
    icon: HtmlIcon,
    text: "HTML",
  },
  {
    icon: CssIcon,
    text: "CSS",
  },
  {
    icon: TailwindIcon,
    text: "Tailwind",
  },
  {
    icon: ReactIcon,
    text: "React",
  },
  {
    icon: JavascriptIcon,
    text: "Javascript",
  },
];

const Techstack = () => {
  return (
    <div
      className="px-6  md:py-10 h-[70vh] flex flex-col  w-screen md:w-full overflow-hidden "
      id="tech-stack"
    >
      <div className="grid grid-cols-3 w-11/12 mx-auto">
        <div className=" relative">
          <div className="flex flex-col ">
            <div className="flex flex-col scroll-container primary ">
              {frontendIcons.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-24 md:w-48 my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                  >
                    <div>
                      <Image src={icon.icon} alt={icon.icon} />
                    </div>
                    <span className="text-[#F9FAFB] text-base">
                      {icon.text}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col scroll-container secondary ">
              {frontendIcons.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-24 md:w-48 my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                  >
                    <div>
                      <Image src={icon.icon} alt={icon.icon} />
                    </div>
                    <span className="text-[#F9FAFB] text-base">
                      {icon.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" relative">
          <div className="flex flex-col ">
            <div className="flex flex-col scroll-container primary ">
              {frontendIcons.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-24 md:w-48 my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                  >
                    <div>
                      <Image src={icon.icon} alt={icon.icon} />
                    </div>
                    <span className="text-[#F9FAFB] text-base">
                      {icon.text}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col scroll-container secondary ">
              {frontendIcons.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-24 md:w-48 my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                  >
                    <div>
                      <Image src={icon.icon} alt={icon.icon} />
                    </div>
                    <span className="text-[#F9FAFB] text-base">
                      {icon.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" relative">
          <div className="flex flex-col ">
            <div className="flex flex-col scroll-container primary ">
              {frontendIcons.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-24 md:w-48 my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                  >
                    <div>
                      <Image src={icon.icon} alt={icon.icon} />
                    </div>
                    <span className="text-[#F9FAFB] text-base">
                      {icon.text}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col scroll-container secondary ">
              {frontendIcons.map((icon, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-24 md:w-48 my-2 flex-col items-center  py-2  bg-[#AEAEAB33] border border-[#5B63D3] rounded-md"
                  >
                    <div>
                      <Image src={icon.icon} alt={icon.icon} />
                    </div>
                    <span className="text-[#F9FAFB] text-base">
                      {icon.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroll-container {
          display: flex;
          white-space: nowrap;
          position: absolute;
          inset-inline-start: 0%;
          inset-block-start: 0%;
          block-size: inherit;
          inline-size: inherit;
          align-items: center;
        }

        .primary {
          animation: primary 20s linear infinite;
        }
        .secondary {
          animation: secondary 20s linear infinite;
        }

        @keyframes primary {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        @keyframes secondary {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }

        /*@keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
           
          }
          
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .scroll-item {
          inline-size: 100%; 
          float: inline-start; 
        }*/
      `}</style>
    </div>
  );
};

export default Techstack;

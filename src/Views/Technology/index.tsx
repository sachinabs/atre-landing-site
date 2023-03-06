import React from "react";
import { CircleSvg } from "../../Icons";
import Tech from "../../Constant/tech.json"
import { Link } from "react-router-dom";

const Technology = () => {
  return (
    <div
      className="bg-white  md:flex justify-center py-28 relative"
      id="technology"
    >
      <div>
        <div className="flex flex-col items-center gap-6">
          <p className="text-3xl font-bold text-[#4DB648] font-sans">
            Technology
          </p>
          <div className="flex flex-col p-4 md:p-0">
            <span className="text-center text-[#484D48]">
              From concept to product, and from edge to cloud!<br />
              We deliver cutting edge technology solutions.
            </span>
          </div>
        </div>
        <div className="mt-16 px-4 flex flex-wrap gap-10 md:gap-20 justify-center">
          {Tech.map((info, index) => {
            return (
              <div aria-disabled key={index} className={`cursor-pointer justify-evenly  transition ease-in-out duration-500  hover:-translate-y-1 hover:scale-110 p-4 border flex flex-col gap-4 rounded-lg w-80 hover:shadow-lg hover:border-0`}>
                <img
                  className="object-cover  rounded-lg"
                  alt=""
                  src={info.image}
                />
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-lg whitespace-nowrap">{info.title}</p>
                  <span className="text-[#6E6B72] ">
                    {info.description}
                  </span>
                </div>
                <div className="flex justify-center mb-6">
                  {info.id !== 2 ?
                    <Link
                      to={`/product/${info.id}`}
                      className="text-[#4DB648] text-base font-semibold underline"
                    >
                      Know More
                    </Link> : <a
                      aria-disabled
                      className="text-[#4DB648] text-base font-semibold"
                    >
                      Coming Soon
                    </a>}

                </div>
              </div>
            );
          })}
        </div>
      </div>
      <span className="hidden absolute bottom-20 -left-72 md:block">
        <CircleSvg />
      </span>
      <span className="hidden absolute top-2 -right-72 md:block">
        <CircleSvg />
      </span>
    </div>
  );
};

export default Technology;

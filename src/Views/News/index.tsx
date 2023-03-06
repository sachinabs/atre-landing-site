import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArticlesList } from "../../Constant/articles";

const News = () => {


  const [disableSmoothScroll, setDisableSmoothScroll] = React.useState(false);
  const [preventInteraction, setPreventInteraction] = React.useState(false);
  const [autoScroll, setAutoScroll] = React.useState(true);
  const [optionText, setOptionText] = React.useState('Auto scroll');
  const [height, setHeight] = useState();
  const [messages, setMessages] = React.useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        return;
      }
    }, 100);

    return () => clearInterval(interval);
  }, [messages]);


  return (
    <div
      className="bg-[#FAFAFA] xl:h-full h-auto md:flex justify-center py-16 "
      id="news"
    >
      <div className="">
        <div className="flex flex-col items-center gap-6 p-4 md:p-0">
          <p className="text-3xl font-bold text-[#4DB648] font-sans">
            News & Article
          </p>
          <div className="flex flex-col">
            <span className="text-center text-[#484D48]">
              New product features, the latest in technology, solutions and updates.
            </span>
          </div>
        </div>
        <div className="mt-16 px-4 flex flex-wrap gap-10 md:gap-20  justify-center">
          <Link state={ArticlesList[0]} to={'/article/1'} className="w-[563px] shadow-lg  rounded-md">
            <img
              alt=""
              className="h-auto w-full rounded-tl-lg rounded-tr-lg"
              src={ArticlesList[0].img_url}
            />
            <div className="py-10">
              <div className="md:flex gap-10 justify-evenly px-10">
                <div className="flex items-center gap-4 md:flex-col md:gap-0 opacity-50">
                  {ArticlesList[0].published}
                </div>
                <div className="">
                  <div className="font-medium text-lg text-[#4DB648]">
                    {ArticlesList[0].title}
                  </div>
                  <div className="text-[#6E6B72] mt-5 text-base font-normal">
                    {ArticlesList[0].para_one}
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="shadow-custom2 w-[400px] custom-overflow h-[600px] rounded-md p-10 flex flex-col gap-5">
            {ArticlesList.map((info, index) => {
              return (
                <>
                  <Link state={info} to={`/article/${info.artile_id}`} className="flex flex-col">
                    <p className="text-[#4DB648]">{info.published}</p>
                    <p className="underline font-medium text-[#484D48]">{info.title}</p>
                  </Link>
                  {index === ArticlesList.length - 1 ? <></> : <hr />}
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

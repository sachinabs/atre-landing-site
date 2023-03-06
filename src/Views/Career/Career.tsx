import React, { useState } from "react";
import Footer from "../../Components/Footer";
import GroupImage from "../../Images/groupImage.png";
import { ArrowRight, BriefCase, Bulb, FullC, LinkedIn } from "../../Icons";
import { Openings } from "../../Constant/opening"

type Props = {};

type openingsType = {
  position: string;
  location: string;
  experience: string;
  description: string[];
}

const Career = (props: Props) => {


  const [showForm, setShowForm] = useState(false)
  const [openings, setOpenings] = useState<openingsType>()

  const [name, setName] = useState('')
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<any>()

  const showFormHandler = (job: openingsType) => {
    setShowForm(true)
    setOpenings(job)

  }

  console.log(name);
  console.log(description);
  console.log(file);


  return (
    <div id="career" className="">
      <div className="flex flex-col gap-4 p-4 items-center justify-center md:items-center md:px-40 md:py-20 bg-[#F6F9F6] pt-20 md:pt-10 md:h-screen">
        <p className="font-bold text-3xl mt-10 md:text-5xl ">Let’s make it happen</p>
        <p className="text-center">
          Through innovation, dedication, and daring, we are
          shaping the future. We have a clear vision.
          <br /> To develop advanced, responsible technology solutions for
          healthcare. Be a part of innovative tech of the future!
        </p>
        <img src={GroupImage} className="object-fill" alt="" />
      </div>
      <div className="flex w-full flex-col items-center justify-evenly my-5 gap-10 bg-[#ffffff] h-auto  ">
        <div className="flex flex-col items-center mt-20 gap-10">
          {/* <p className="text-[#4DB648] text-3xl px-5 font-3xl gap-10">
            Why you should join us
          </p> */}
          <div className="mt-5 flex flex-col gap-10 md:grid md:grid-cols-3 md:px-28 p-4  justify-center">
            {[1, 2, 3].map((info, index) => {
              return (
                <div>
                  <p className="font-medium text-base">🏡 Work from Home </p>
                  <p>
                    Value the ability to work anywhere? We too.
                    <br /> Once a week, you choose where you work from.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          <div className="absolute w-[400px] md:top-40 flex flex-col ">
            <p id="dancing_script" className="md:mt-44 text-center font-medium">
              And above all...
            </p>
            <span id="dancing_script_sub" className="">
              A growing and talented team,fueled by a quality driven culture
            </span>
          </div>
          <span className="w-[800px] -z-0 hidden absolute md:block">
            <FullC />
          </span>
        </div>
        <div className="md:mt-20 mt-44 p-4">
          <p className="text-[#4DB648] text-center text-3xl px-5 font-bold md:mt-[600px] gap-10">
            Our Open positions
          </p>
          <span className="text-[#6E6B72]">We're always on the lookout for talented people.</span>
        </div>
        <div className={`${showForm ? 'hidden' : 'md:mt-10 md:grid md:grid-cols-3 flex flex-col justify-center gap-4 md:gap-10 p-4'} `}>
          {Openings.map((job, index) => {
            return (
              <div className="flex cursor-pointer transition ease-in-out duration-500 shadow-lg hover:shadow-2xl rounded-lg  gap-10 items-center p-4">
                <BriefCase />
                <div>
                  <p className="font-bold">{job.position}</p>
                  <span className="text-[#6E6B72]">{job.location}</span>
                </div>
                <button onClick={() => showFormHandler(job)} className="flex gap-2 items-center">
                  <p className="text-[#4DB648]">Apply</p>
                  <ArrowRight />
                </button>
              </div>
            );
          })}
        </div>
        <div className={`${showForm ? 'block' : 'hidden'} h-auto rounded-lg max-w-screen-md  mx-auto p-5 shadow-lg`}>
          <div className="flex xl:flex-nowrap flex-wrap gap-10  items-start">
            <div>
              <BriefCase />
            </div>
            <div className="">
              <div className="flex flex-wrap justify-between">
                <p className="font-bold ">{openings?.position}</p>
                <p onClick={() => setShowForm(false)} className="cursor-pointer">X</p>
              </div>
              <p className="mt-5 text-[#6E6B72]">{openings?.experience}</p>
              <p className="mt-10 text-[#6E6B72]">{openings?.location}</p>
              {openings?.description.map((des, index) => {
                return <li key={index} className="mt-5 text-[#6E6B72]">{des}</li>
              })}
              <div className="mt-10">
                <div className="flex flex-wrap gap-10">
                  <input
                    type="text"
                    onChange={(e) => setName(e.currentTarget.value)}
                    id="name"
                    className="relative w-auto outline-none border border-[#919191] rounded py-1 px-2  bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                    placeholder="Enter your name ..."
                  />
                  <input
                    onChange={(e: any) => setFile(e.target.files[0])}
                    type="file"
                    id="name"
                    className="w-auto"
                    placeholder=""
                  />
                </div>
                <div className=" flex flex-col mt-5 gap-2">
                  <textarea
                    onChange={(e) => setDescription(e.currentTarget.value)}
                    className="w-auto outline-none border p-4 border-[#919191] rounded"
                    placeholder="Tell us how you fit for this job"
                  ></textarea>
                </div>

              </div>
              <button className="shadow mt-5 bg-[#4DB648]  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                Send Message
              </button>
            </div>

          </div>

        </div>
        <p className="font-bold mb-5 text-black text-center">Don’t see something you fit into? No worries Please fill the form and well be in
          touch.<span className="text-[#4DB648]"><a href=""> Apply</a></span></p>
        <div className="flex-col gap-20 items-center my-10 hidden">
          <p>Oh, and it’s not only about work!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;

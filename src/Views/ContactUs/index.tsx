import React from "react";
import { Facebook, Instagram, LinkedIn, Twitter } from "../../Icons";

const ContactUs = () => {
  return (
    <div id="contact-us" className="bg-white   md:flex justify-center  relative">
      <div>
        <div className="flex h-auto flex-col items-center gap-6">
          <p className="text-3xl font-bold text-[#4DB648] font-sans">
            Contact Us
          </p>
        </div>
        <div className="mt-16 px-4 flex flex-wrap gap-10 md:gap-20 justify-center">
          <div className="w-[475px] shadow-custom2 rounded-lg  p-10">
            <div className="p-2 flex flex-col justify-between gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="relative outline-none border border-[#919191] rounded py-1 px-2 w-full bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="relative outline-none border border-[#919191] rounded py-1 px-2 w-full bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                    placeholder=""
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium">
                    Designination
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="relative outline-none border border-[#919191] rounded py-1 px-2 w-full bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium">
                    Email ID
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="relative outline-none border border-[#919191] rounded py-1 px-2 w-full bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                    placeholder=""
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="relative outline-none border border-[#919191] rounded py-1 px-2 w-full bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Describe Briefly
                </label>
                <textarea
                  className="w-full outline-none border p-4 border-[#919191] rounded resize-none"
                  placeholder="We build fine acmes."
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-[#4DB648] h-12 w-56 text-white font-medium text-base rounded-lg">
                  Contact us
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[475px]">
            <div className="flex flex-col justify-between items-center">
              <p className="text-base text-center font-medium md:text-2xl">
                Write to us <br />
                <span className="text-[#4DB648]">info@atrehealthtech.com</span>
              </p>
              <p className="text-sm">We will back with in 2 business days.</p>
            </div>
            <hr className="my-10" />
            <div className="flex flex-col my-10 gap-4">
              <p className="text-base font-medium md:text-xl">Reach Us Here</p>
              <div className="flex ">
                <div className="w-44">
                  <p className="text-xs">
                    <b>Atre Health Tech</b><br /> 45, Kamaraj Road,<br /> Red Fields,, Coimbatore, Coimbatore, Tamil Nadu.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <LinkedIn />
                  <Twitter />
                  <Facebook />
                  <Instagram />
                </div>
              </div>
            </div>
            <iframe
              title="asd"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.224753474042!2d78.56472881528005!3d17.400998406991583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f2013ded203%3A0x7a9c9727630e855e!2sARE%20TECH%20CONSULTANTS!5e0!3m2!1sen!2sin!4v1674832566459!5m2!1sen!2sin"
              className="w-80 md:w-full h-56 mt-5"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

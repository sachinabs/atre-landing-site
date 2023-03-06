import React, { useRef, useState } from "react";
import ImageTwo from "../../Images/ImageTwo.png";
import ImageThree from "../../Images/ImageThree.png";
import Person from "../../Images/person.png";
import { Bulb, Linked, LinkedIn, Surgical, Ultrasound, Vision } from "../../Icons";
import Footer from "../../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Teams } from "../../Constant/crew"
import Investors from "../../Constant/invester.json"
import 'swiper/swiper-bundle.min.css';
import Invest from "../../Components/Invest";
const About = () => {


  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)


  return (
    <div id="aboutus" className="">
      <div className="mt-16">
        <img src={ImageTwo} className="w-full " alt="" />
      </div>
      <div className="flex flex-col items-center mt-20 gap-10">
        {/* <p className="text-[#4DB648] text-3xl font-bold gap-10">Our journey</p> */}
        <div className="flex flex-col  w-auto px-10 md:flex-row items-center md:items-start gap-5">
          <img className="h-auto md:w-auto  px-4" src={ImageThree} alt="" />
          <div className="flex flex-col px-4 gap-5">
            <p className="font-medium text-3xl ">
              Leading through innovation and creativity
            </p>
            <p className="whitespace-wrap">
              At Atre, the focus is to advance health responsibly through the use of cutting-edge technology. We believe that by leveraging the power of robotics, ML, and AI, we can improve patient outcomes and support the medical professionals who care for them.<br /><br />
              Our team is composed of experts in the fields of robotics, AI, and medicine, all of whom are dedicated to developing innovative solutions that improve patient care. We are committed to responsible innovation and are dedicated to ensuring that our technology is safe, effective, and accessible to all, regardless of their economic or social circumstances.<br /><br />
              Our current focus is on teleoperated medical devices, such as our teleoperated ultrasound system. We believe that by providing medical professionals with remote diagnostic tools, we can democratize quality healthcare.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center mt-5 py-10 gap-10 bg-[#F6F9F6] h-auto">
        <p className="text-[#4DB648] text-3xl font-bold  gap-10 ">
          Our Mission
        </p>
        <div className="flex flex-wrap md:flex-nowrap  md:gap-20">
          <div className="flex  md:w-[450px] p-4 md:p-0 items-center  gap-5">
            <span className="w-20 h-20 md:h-auto md:w-40">
              <Bulb />
            </span>
            <div className="flex flex-col items-start">
              <p className="font-medium">Mission </p>
              <span>
                Our mission is to be at the forefront of advancing health responsibly through the development and deployment of cutting-edge medical robotics technology.
              </span>
            </div>
          </div>
          <div className="flex  md:w-[450px] p-4 md:p-0 items-center  gap-5">
            <span className="w-20 h-20 md:h-auto md:w-40">
              <Vision />
            </span>
            <div className="flex flex-col items-start">
              <p className="font-medium">Vision </p>
              <span>
                We envision a future where medical robotics plays a crucial role in delivering efficient, effective and accurate medical care to improve the lives of patients worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white my-10">
        <p className="text-[#4DB648] text-center text-3xl font-bold mt-10 md:mt-0 ">
          Our Team
        </p>
        <div
          id="controls-carousel"
          className="mt-5">
          <Swiper

            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            className="w-1/2 hidden md:block"
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            effect={"creative"}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
          >
            {Teams.map((member, index) => {
              return <SwiperSlide>
                <div className="flex flex-col items-center gap-5">
                  <div className="relative mb-4 rounded-2xl">
                    <img style={{
                      width: "205px",

                      objectFit: 'contain'
                    }} src={member.img} className='rounded-lg transition-shadow duration-300 group-hover:shadow-2xl' alt={member.name} />
                    <div className="absolute p-5 custom-overflow rounded-lg bg-gray-200 bg-opacity-80 h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-300  z-10 bottom-0">
                      <p className="text-start select-none">
                        {member.caption}
                      </p>
                      <a href={member.linkedIN} className="mt-5">
                        <Linked />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="font-bold text-sm whitespace-nowrap">{member.name}</p>
                    <p className="text-[#6E6B72]">{member.position}</p>
                  </div>

                </div>

              </SwiperSlide>

            })}
          </Swiper>
          <Swiper

            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            className="w-1/2 md:hidden"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            effect={"creative"}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
          >
            {Teams.map((member, index) => {
              return <SwiperSlide>
                <div className="flex flex-col items-center gap-5">
                  <div className="relative mb-4 rounded-2xl">
                    <img style={{
                      width: "305px",
                      objectFit: 'contain'
                    }} src={member.img} className='rounded-lg transition-shadow duration-300 group-hover:shadow-2xl' alt={member.name} />
                    <div className="absolute custom-overflow p-5 rounded-lg bg-gray-200 bg-opacity-80 h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-300  z-10 bottom-0">
                      <p className="text-start select-none">
                        {member.caption}
                      </p>
                      <a href={member.linkedIN} className="mt-5">
                        <Linked />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="font-bold ">{member.name}</p>
                    <p className="text-[#6E6B72]">{member.position}</p>
                  </div>

                </div>

              </SwiperSlide>

            })}
          </Swiper>
        </div >

      </div>
      <div className="mt-10  flex flex-col">
        <p className="text-[#4DB648] text-center text-3xl font-bold mt-10 md:mt-0 ">
          Our advisors
        </p>
        <div className="text-center px-4 mt-4">
          <p className="font-semibold text-2xl">Invest in responsible revolutionizing healthtech with Atre</p>
          <p className="text-sm">We are on a mission to bring advancements to healthcare that benefit every stakeholder.<br />
            We can’t do it without our visionary investors, who steer us toward a bright, renewable future.</p>
        </div>
        <div className="flex justify-center mt-5">
          <button onClick={() => setOpen(true)} className="bg-[#4DB648] h-12 w-44 text-white font-medium text-base rounded-lg">
            Invest in Atre
          </button>
        </div>

        <div className="flex flex-wrap xl:flex-nowrap px-10 mt-20 gap-10">
          <div>
            <p className="font-bold text-xl">Krishnamoorty Raman</p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Krishnamoorthy Raman has over 35 years of industrial experience in developing new
              products, innovative technology and has conceptualised many new designs in the
              area of Industrial Products. He did his B.Tech degree in Electrical Engineering from
              University of Calicut and Master’s degree in Applied Electronics from PSG College of
              Technology, Coimbatore.<br /><br /> He joined an Indian Multinational Engineering
              Conglomerate in their Engineering Services Vertical and incubated Motion Control
              and Power Electronic Practice and setup several labs in the area of Motion Control,
              Lighting, Building Automation and Robotics. He is also an avid practitioner of
              Spiritual teachings and conducted several value-based leadership programs for
              young engineers and first-time managers to become successful leaders in their area
              of work.</span>
          </div>
          <div>
            <p className="font-bold text-xl">Arjun Prakash</p>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arjun Prakash has over 35 years of industrial experience in developing new
              products, innovative technology and has conceptualised many new designs in the
              area of Industrial Products. He did his B.Tech degree in Electrical Engineering from
              University of Calicut and Master’s degree in Applied Electronics from PSG College of
              Technology, Coimbatore.<br /> <br />He joined an Indian Multinational Engineering
              Conglomerate in their Engineering Services Vertical and incubated Motion Control
              and Power Electronic Practice and setup several labs in the area of Motion Control,
              Lighting, Building Automation and Robotics. He is also an avid practitioner of
              Spiritual teachings and conducted several value-based leadership programs for
              young engineers and first-time managers to become successful leaders in their area
              of work.</span>
          </div>
        </div>
      </div>
      <Invest setOpen={setOpen} open={open} cancelButtonRef={cancelButtonRef} />
      <Footer />
    </div>
  );
};

export default About;

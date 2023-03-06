import Footer from "../../Components/Footer";
import ContactUs from "../ContactUs";
import News from "../News";
import Technology from "../Technology";

const Home = () => {



  return (
    <>
      <div
        className="bg-[#F6F9F6] h-auto pt-20 md:flex xl:h-full items-center md:justify-between "
        id="home"
      >
        <div className="flex flex-col gap-5 md:w-[600px] lg:ml-44 lg:items-start justify-center p-4 pt-0">
          <p className="text-3xl break-all font-medium">
            Want anything to be easy with Doosan.
          </p>
          <p className="text-[#484D48]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <a href="#contact-us" className="bg-[#4DB648] h-12 w-44 flex items-center justify-center text-white font-medium text-base rounded-lg">
            Contact us
          </a>
        </div>
        <div className="">
          <img src={'https://www.crossco.com/wp-content/uploads/2022/07/Doosan-Robotics-H2515-3.png'} className='' alt="" />
        </div>
      </div>
      <Technology />
      {/* <News /> */}
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;

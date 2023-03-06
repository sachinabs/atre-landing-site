import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import { ArticlesList } from "../../Constant/articles";

const Articles = () => {
    return (
        <div
            className=""
            id="news"
        >
            {/* <div className="relative w-full">
                <img src='https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt="bg" className="h-[600px] object-cover w-full opacity-60" />
            </div> */}
            <div className="my-20 flex justify-center">
                <div className="flex flex-wrap gap-20 justify-center px-10 md:px-20">
                    {ArticlesList.map((info, index) => {
                        return <Link state={info} to={`/article/${info.artile_id}`} className="">
                            <div key={index} className="cursor-pointer justify-evenly hover:shadow-2xl transition ease-in-out w-auto md:w-96 duration-500 shadow-lg  p-4 flex flex-col gap-4 rounded-lg ">
                                <img
                                    className="object-cover  h-36 rounded-lg"
                                    alt=""
                                    src={info.img_url}
                                />
                                <div className="flex flex-col gap-2">
                                    <p className="font-medium text-lg ">{info.title}</p>
                                    <span className="text-[#6E6B72] ">
                                        {info.para_one}
                                    </span>
                                </div>
                                <div className="flex justify-start gap-5 ">
                                    <div className="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
                                        <img src={info.published_img} className="rounded-full" />
                                    </div>
                                    <div className="">
                                        <p>{info.articleby}</p>
                                        <p>{info.possition}</p>
                                    </div>
                                </div>
                            </div></Link>
                    })}
                </div>
            </div>
            <div className="py-10 px-10 flex flex-col items-center bg-green-100">
                <div className="flex xl:flex-nowrap flex-wrap xl:px-20 px-10">
                    <div>
                        <p className="mt-5 text-xl font-bold">Be on the front seat of
                            our journey towards
                            responsible healthtech!</p>
                    </div>
                    <div className="mt-5 gap-10">
                        <div>
                            <p>Get our press releases and news
                                pieces delivered to your inbox by
                                signing up for our dedicated news list.</p>
                        </div>
                        <div className="mt-5">
                            <input type="email" className="shadow-sm h-[50px] border-gray-300 rounded-lg md:w-72  focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400" placeholder="Enter your email"></input>
                            <button className="bg-[#4DB648] h-12 w-44 text-white font-medium text-base rounded-lg">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Articles;

import { useLocation } from "react-router-dom";
import Footer from "../../Components/Footer"
import { Vattam } from "../../Icons"
import { articles } from "../../types/article.types";


type Props = {}

const ArticlesDetails = (props: Props) => {


    const location = useLocation();
    const state: articles = location.state;

    return (
        <div className="">
            <div id="newsdetails" className='pb-20 pt-10 relative'>
                <img className="w-full object-fill  h-44 md:h-auto opacity-100" src={state.img_url} alt="" />
                <span className="absolute opacity-40 md:opacity-100 top-56 -z-50 right-0">
                    <Vattam />
                </span>
                <div className="mt-20 w-full px-10 md:px-44">
                    <h4 className=" md:text-5xl text-3xl font-bold">{state.title}</h4>
                    <p className="text-[#6E6B72] font-medium">{state.published}</p>
                    <div className="mt-10 text-[#6E6B72] font-medium leading-loose text-xl">
                        {state.para_one}
                    </div>
                    <div className="xl:flex gap-20 my-10 justify-evenly items-center">
                        <img className="rounded-2xl shadow-2xl md:h-[632px]" src={state.img_url_two} alt="" />
                        <div className=" mt-5">
                            {state.para_two.map((para) => {
                                return <p className="text-[#6E6B72] text-xl font-medium leading-loose">
                                    {para}
                                </p>
                            })}
                        </div>
                    </div>
                    <span className="absolute opacity-40 rotate-180 md:opacity-100 top-1/2 -z-50 left-0 ">
                        <Vattam />
                    </span>
                    <div className="my-10">
                        {state.para_array.map((para) => {
                            return <p className="text-[#6E6B72] text-xl font-medium leading-loose">{para}
                            </p>
                        })}
                    </div>
                    <div className="w-full mt-20 gap-10 flex flex-wrap justify-evenly ">
                        {
                            state.img_list.map((img) => {
                                return (
                                    <img className="rounded-2xl shadow-2xl md:h-[532px]" src={img} alt="" />
                                )
                            })
                        }

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ArticlesDetails
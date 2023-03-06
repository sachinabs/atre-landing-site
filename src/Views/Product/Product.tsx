import Footer from '../../Components/Footer'
import { Bulb, FullVattam, Vattam } from '../../Icons'
import product from "../../Images/product.png"

type Props = {}

const Product = (props: Props) => {
    return (
        <div>
            <div className='pb-20 pt-10 relative'>
                <div className='hidden xl:block absolute bg-[#F6F9F6] h-screen -z-50 w-[600px]'></div>
                <span className="absolute opacity-40 md:opacity-100 bottom-0 -z-50 right-0">
                    <Vattam />
                </span>
                <div className='xl:flex  items-center justify-center px-10 xl:px-20 '>
                    <img className='w-[900px] mt-10' src={product} alt="" />
                    <div className='flex flex-col items-center xl:items-start'>
                        <p className='font-bold text-2xl xl:text-4xl'>Tele-Robotic Ultrasound System</p>
                        <p className='text-[#6E6B72] mt-5 font-medium'>Breaking through the limitations of traditional ultrasound scanning
                            method, TRUS assists with quick precise imaging over long distance,
                            making ultrasound diagnosis more accessible in spite of the uneven
                            distribution of medical resources</p>
                        <div className='mt-5  xl:pl-10 flex flex-col gap-4   items-center'>
                            {[1, 2, 3, 4, 5].map((info) => {
                                return <div className='flex flex-col mt-3 xl:flex-row items-center gap-10'>
                                    <Bulb />
                                    <div className='xl:w-72 flex justify-center'>
                                        <p className='text-[#6E6B72] text-center font-medium'>Doctor can perform an ultrasound on a patient located remotely.</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-10 my-10 xl:px-80 flex flex-col'>
                <p className='text-4xl mt-20 text-center font-medium'>Benefits you get when using our services</p>
                <div className='flex items-center xl:flex-nowrap flex-wrap justify-center mt-10 gap-10'>
                    {[1, 2, 3].map((info) => {
                        return <div className='flex flex-col flex-wrap items-center justify-center'>
                            Icons
                            <p className='font-bold'>Save Time and Cost</p>
                            <p className='text-center text-[#6E6B72]'>Save Time and Cost of travel. Reduced scan times allow care to more patients.
                            </p>
                        </div>
                    })}
                </div>
                <div className='flex flex-col items-center justify-center relative'>
                    <FullVattam />
                    <p className='absolute text-center text-5xl font-bold'>Interested in discussing<br /> a project with us?</p>
                    <button className="bg-[#4DB648] absolute bottom-20 h-12 w-56 text-white font-medium text-base rounded-lg">
                        Contact us
                    </button>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Product
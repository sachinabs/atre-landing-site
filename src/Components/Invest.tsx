import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

type Props = {
    cancelButtonRef: React.MutableRefObject<null>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
};

const Invest = ({ cancelButtonRef, open, setOpen }: Props) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="max-w-screen-md h-[500px] overflow-y-scroll mx-auto p-10 shadow-lg">
                                    <div className="text-center mb-2">
                                        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
                                            Please Leave Your Contact Details. When it is Opportune, a Member of Our Invest Team Will React Out   We are excited to start the conversation
                                        </p>
                                    </div>

                                    <form className="w-full">
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    First Name
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                    Last Name
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    Email Address
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                    City
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                    Country
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                    Phone Number
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap -mx-3 mb-6">
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    Your Message
                                                </label>
                                                <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                                                </textarea>
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                    How Did you Hear about Atre Health Tech ?
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" />
                                            </div>
                                            <div className="w-full px-3">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                    Targeted Investment Size
                                                </label>
                                                <select className='w-full outline-none border-t-0 border-r-0 border-l-0 border-b-2  focus:ring-0'>
                                                    <option disabled selected value="">-- Select Targeted Investment Size --</option>
                                                    <option>5000</option>
                                                </select>
                                            </div>
                                            <div className='w-full align-middle mt-5 px-3'>
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                    Contact Perference
                                                </label>
                                                <form className="flex flex-wrap gap-2 w-full max-w-screen-sm">
                                                    <div>
                                                        <input className="hidden" id="radio_1" type="radio" name="radio" />
                                                        <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_1">
                                                            <span className="text-xs font-semibold uppercase">Telephone</span>

                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input className="hidden" id="radio_2" type="radio" name="radio" />
                                                        <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_2">
                                                            <span className="text-xs font-semibold uppercase">Email</span>

                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input className="hidden" id="radio_3" type="radio" name="radio" />
                                                        <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_3">
                                                            <span className="text-xs font-semibold uppercase">Whatsapp</span>

                                                        </label>
                                                    </div>
                                                </form>

                                            </div>
                                            <div className="flex flex-wrap justify-between w-full px-3 mt-5">
                                                <div className="md:flex md:items-center">
                                                    <label className="block text-gray-500 font-bold">
                                                        <input className="mr-2 leading-tight" type="checkbox" />
                                                        <span className="text-sm">
                                                            Send me Emails regarding Atre Health Tech's Latest news and Events
                                                        </span>
                                                    </label>
                                                </div>
                                                <button className="shadow bg-[#4DB648]  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                                                    Send Message
                                                </button>
                                            </div>

                                        </div>

                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Invest;

/* 
<div className="max-w-screen-md  mx-auto p-5 shadow-lg">
            <div className="text-center mb-16">
                <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
                    Please Leave Your Contact Details. When it is Opportune, a Member of Our Invest Team Will React Out   We are excited to start the conversation
                </p>
            </div>

            <form className="w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Email Address
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            City
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Country
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Phone Number
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Your Message
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                        </textarea>
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            How Did you Hear about Lightyear ?
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" />
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Targeted Investment Size
                        </label>
                        <select className='w-full outline-none border-t-0 border-r-0 border-l-0 border-b-2  focus:ring-0'>
                            <option disabled selected value="">-- Select Targeted Investment Size --</option>
                            <option>5000</option>
                        </select>
                    </div>
                    <div className='w-full align-middle mt-5 px-3'>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Contact Perference
                        </label>
                        <form className="grid grid-cols-3 gap-2 w-full max-w-screen-sm">
                            <div>
                                <input className="hidden" id="radio_1" type="radio" name="radio" />
                                <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_1">
                                    <span className="text-xs font-semibold uppercase">Telephone</span>

                                </label>
                            </div>
                            <div>
                                <input className="hidden" id="radio_2" type="radio" name="radio" />
                                <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_2">
                                    <span className="text-xs font-semibold uppercase">Email</span>

                                </label>
                            </div>
                            <div>
                                <input className="hidden" id="radio_3" type="radio" name="radio" />
                                <label className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer" htmlFor="radio_3">
                                    <span className="text-xs font-semibold uppercase">Whatsapp</span>

                                </label>
                            </div>
                        </form>

                    </div>
                    <div className="flex justify-between w-full px-3 mt-5">
                        <div className="md:flex md:items-center">
                            <label className="block text-gray-500 font-bold">
                                <input className="mr-2 leading-tight" type="checkbox" />
                                <span className="text-sm">
                                    Send me Emails regarding Atre Health Tech's Latest news and Events
                                </span>
                            </label>
                        </div>
                        <button className="shadow bg-[#4DB648]  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                            Send Message
                        </button>
                    </div>

                </div>

            </form>
        </div>

*/

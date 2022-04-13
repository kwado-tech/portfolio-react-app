import React from "react";

import workImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';

const Work = () => {
    return (
        <div name='work' className="w-full md:h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-center">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
                    <p className="py-4">Checkout some of my recent work</p>
                </div>

                {/* container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* container item - card */}
                    <div
                        style={{ backgroundImage: `url(${workImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* container item - card */}
                    <div
                        style={{ backgroundImage: `url(${realEstate})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* container item - card */}
                    <div
                        style={{ backgroundImage: `url(${workImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* container item - card */}
                    <div
                        style={{ backgroundImage: `url(${realEstate})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* container item - card */}
                    <div
                        style={{ backgroundImage: `url(${workImg})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* container item - card */}
                    <div
                        style={{ backgroundImage: `url(${realEstate})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        {/* hover effect */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold tracking-wider">
                                React JS Application
                            </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Demo</button>
                                </a>
                                <a href="/">
                                    <button className="text-lg font-bold text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
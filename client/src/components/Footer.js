import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="bg-gray-800 pt-10 sm:mt-10">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                {/* Col-1 */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/* Col Title */}
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Getting Started
                    </div>
                    {/* Links */}
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Installation
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Release Notes
                    </a>
                </div>
                {/* Col-2 */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/* Col Title */}
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Core Concepts
                    </div>
                    {/* Links */}
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Utility-First
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Responsive Design
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Hover, Focus, & Other States
                    </a>
                </div>
                {/* Col-3 */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/* Col Title */}
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Customization
                    </div>
                    {/* Links */}
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Configuration
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Theme Configuration
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Breakpoints
                    </a>
                </div>
                {/* Col-4 */}
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    {/* Col Title */}
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Community
                    </div>
                    {/* Links */}
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        GitHub
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Discord
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Twitter
                    </a>
                </div>
            </div>
            <div>
                <div className="flex pb-5 px-3 m-auto pt-5
                border-t border-gray-500 text-gray-400 text-sm
                flex-col md:flex-row max-w-6xl justify-center items-center">
                    <div className="mt-2"> © 2023 Pratham Nikam. All rights reserved.</div>
                    {/* <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-youtube"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    </>
  )
}

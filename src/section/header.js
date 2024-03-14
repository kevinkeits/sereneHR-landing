import React, { useState } from 'react'
import hamburgmenu from '../icon/hamburger-menu-svgrepo-com.svg'
import '../App.css';

const Header = () => {
const [isOpen, setIsOpen] = useState(false);
  
return (
    <div className="fixed z-20 top-0 w-screen">
        <div className="flex backdrop-blur-md bg-black bg-opacity-60 md:justify-center justify-between items-center lg:px-28 lg:py-5 py-3 font-semibold">
            <h1 className='text-xl font-medium text-white px-4 mx-2'>SereneHR</h1>
            <div className="md:flex md:flex-auto md:justify-center text-white hidden">
                <div className="mx-10 hover:cursor-pointer">
                    <a href="#fitur-div" className="animated-link"><h4 className="text-lg font-medium">Fitur</h4></a>
                </div>
                <div className="mx-6">
                    <a href="#harga-div" className="animated-link"><h4 className="text-lg font-medium hover:cursor-pointer">Harga</h4></a>
                </div>
                <div className="mx-6">
                    <a href="#tentang-div" className="animated-link"><h4 className="text-lg font-medium hover:cursor-pointer">Tentang Kami</h4></a>
                </div>
                <div className="mx-6">
                    <a href="#faq-div" className="animated-link"><h4 className="text-lg font-medium hover:cursor-pointer">FAQ</h4></a>
                </div>
            </div>

            <div className="md:flex hidden mx-3 px-4">
                <div className="p-2 px-6 mx-4 rounded-md border border-white hover:bg-blue-900 shadow-md hover:shadow-xl hover:cursor-pointer">
                    <h4 className="text-white font-semibold">Log In</h4>
                </div>
                <div className="p-2 px-6 mr-10 bg-blue-700 rounded-md shadow-md hover:bg-blue-900 hover:shadow-xl hover:cursor-pointer">
                    <h4 className="text-white font-semibold ">Coba Gratis</h4>
                </div>
            </div>
            <img src={hamburgmenu} alt="Menu" onClick={() => setIsOpen(!isOpen)} className="h-6 w-10 mx-6 block md:hidden hover:cursor-pointer"/>
        </div>     

        {/* <!-- Hamburg Menu --> */}
        {isOpen && ( 
            <div id="menu-list" className="border-t-2 border-white backdrop-blur-md bg-black bg-opacity-15">
                <div>
                    <div className="flex items-center justify-center hover:cursor-pointer">
                        <a href="#fitur-div" className="animated-link"><h4 className="text-lg font-medium text-white">Fitur</h4></a>
                    </div>
                    <div className="flex items-center justify-center">
                        <a href="#harga-div" className="animated-link"><h4 className="text-lg font-medium hover:cursor-pointer text-white">Harga</h4></a>
                    </div>
                    <div className="flex items-center justify-center">
                        <a href="#tentang-div" className="animated-link"><h4 className="text-lg font-medium hover:cursor-pointer text-white">Tentang Kami</h4></a>
                    </div>
                    <div className="flex items-center justify-center">
                        <a href="#faq-div" className="animated-link"><h4 className="text-lg font-medium hover:cursor-pointer text-white">FAQ</h4></a>
                    </div>
                </div>
            </div>
            )}
    </div>
  );
}

export default Header;

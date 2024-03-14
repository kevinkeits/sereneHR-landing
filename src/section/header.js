import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div className="fixed top-0 z-10">
        <div className="bg-black bg-opacity-70 backdrop-blur-md md:py-4 md:space-x-3 md:flex md:items-center justify-between md:justify-center w-screen">
            {/* <!-- Header - Menu - Left--> */}
            <div className="mx-10 hidden md:block">
                <a href="#mainpage-div" className="animated-link"><h4 className="text-lg text-white font-medium hover:cursor-pointer px-3">SereneHR</h4></a>
            </div>
            
            {/* <!-- Header - Menu - Center--> */}
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

            {/* <!-- Header - Menu - Right--> */}
            <div className="md:flex p-2 hidden">
                <div className="p-2 px-6 mx-4 rounded-md border border-white hover:bg-blue-900 shadow-md hover:shadow-xl hover:cursor-pointer">
                    <h4 className="text-white font-semibold">Log In</h4>
                </div>
                <div className="p-2 px-6 mr-10 bg-blue-700 rounded-md shadow-md hover:bg-blue-900 hover:shadow-xl hover:cursor-pointer">
                    <h4 className="text-white font-semibold ">Coba Gratis</h4>
                </div>
            </div>

            {/* <!-- Hamburg Menu --> */}
            <div className="md:hidden w-screen py-4">
                <div className="flex justify-between items-center px-5">
                    <h4 className="text-lg text-white font-medium hover:cursor-pointer">SereneHR</h4>
                </div>
                <div id="menu-list" className="hidden border-t-2 mt-2 border-white">
                    <a href="#fitur-div" className="animated-link"><p className="hover:cursor-pointer hover:bg-blue-900 py-2 px-5 text-white">Fitur</p></a>
                    <a href="#harga-div" className="animated-link"><p className="hover:cursor-pointer hover:bg-blue-900 py-2 px-5 text-white">Harga</p></a>
                    <a href="#tentang-div" className="animated-link"><p className="hover:cursor-pointer hover:bg-blue-900 py-2 px-5 text-white">Tentang</p></a>
                </div>
            </div>
        </div>        
    </div>
  );
}

export default Header;

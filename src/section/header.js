import React, { useState, useEffect} from 'react'
import hamburgmenu from '../icon/hamburger-menu-svgrepo-com.svg'
import logo from '../icon/logo.png'
import '../App.css';

const Header = () => {
const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 80 || scrollPosition > 890) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  
return (
    <div id="Navbar" className={`fixed z-10 top-0 w-screen ${scrolled ? 'scrolled' : ''}`}>
      <div className="flex md:justify-center justify-between items-center font-semibold mx-auto max-w-screen-lg border-b">
        <div className={`${scrolled ? 'filter-effect' : ''}`}>
            <a href="#mainpage-div"><img src={logo} alt="Menu" className="hover:cursor-pointer h-20" style={{ filter: scrolled ? 'invert(70%) sepia(89%) saturate(2273%) hue-rotate(217deg) brightness(104%) contrast(96%)' : 'none' }}></img></a>
        </div>
        <div className="md:flex md:flex-auto md:justify-center text-white hidden">
          <div id="fontHeader" className={`mx-6 hover:cursor-pointer ${scrolled ? 'text-black' : ''}`}>
            <a href="#fitur-div" ><h4 className="text-md font-normal">Fitur</h4></a>
          </div>
          <div id="fontHeader" className={`mx-6 hover:cursor-pointer ${scrolled ? 'text-black' : ''}`}>
            <a href="#harga-div" ><h4 className="text-md font-normal hover:cursor-pointer">Harga</h4></a>
          </div>
          <div id="fontHeader" className={`mx-6 hover:cursor-pointer ${scrolled ? 'text-black' : ''}`}>
            <a href="#tentang-div" ><h4 className="text-md font-normal hover:cursor-pointer">Tentang Kami</h4></a>
          </div>
          <div id="fontHeader" className={`mx-6 hover:cursor-pointer ${scrolled ? 'text-black' : ''}`}>
            <a href="#faq-div" ><h4 className="text-md font-normal hover:cursor-pointer">FAQ</h4></a>
          </div>
        </div>
        <div className="md:flex text-white hidden">
            <div id="borderColor" className={`p-2 px-6 rounded-md hover:bg-blue-800 hover:text-white hover:shadow-xl hover:cursor-pointer mx-2 ${scrolled ? 'text-black' : ''}`}>
                <h4 id="headerLeft" className="font-semibold">Log In</h4>
            </div>
            <div id="borderColor2" className="p-2 px-6 bg-blue-700 rounded-md shadow-md hover:bg-blue-900 hover:shadow-xl hover:cursor-pointer">
                <h4 id="headerLeft" className="font-semibold ">Coba Gratis</h4>
            </div>
        </div>
        <img src={hamburgmenu} alt="Menu" onClick={() => setIsOpen(!isOpen)} className="h-6 w-10 mx-6 block md:hidden hover:cursor-pointer" style={{ filter: scrolled ? 'invert(70%) sepia(89%) saturate(2273%) hue-rotate(217deg) brightness(104%) contrast(96%)' : 'none' }}></img>
      </div>

      {/* Hamburg Menu */}
      {isOpen && (
          <div id="menu-list" className="border-white bg-opacity-60 backdrop-blur-lg bg-black md:hidden drop-shadow-lg">
            <div className="py-6">
              <div className="mx-4 hover:cursor-pointer py-4">
                <a href="#fitur-div" className="animated-link"><h4 className="text-lg font-small text-white">Fitur</h4></a>
              </div>
              <div className="mx-4 py-4">
                <a href="#harga-div" className="animated-link"><h4 className="text-lg font-small hover:cursor-pointer text-white">Harga</h4></a>
              </div>
              <div className="mx-4 py-4">
                <a href="#tentang-div" className="animated-link"><h4 className="text-lg font-small hover:cursor-pointer text-white">Tentang Kami</h4></a>
              </div>
              <div className="mx-4 py-4   ">
                <a href="#faq-div" className="animated-link"><h4 className="text-lg font-small hover:cursor-pointer text-white">FAQ</h4></a>
              </div>
            </div>
          </div>
      )}
    </div>
  );
}

export default Header;

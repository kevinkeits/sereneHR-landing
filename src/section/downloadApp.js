import React from 'react';
import backgroundImage from '../icon/google-play-badge-logo-svgrepo-com.svg';
import backgroundImage2 from '../icon/download-on-the-app-store-apple-logo-svgrepo-com.svg';

const DownloadApp = () => {
  return (
    <div class="bg-black">
        <p class="text-white text-center lg:text-3xl text-2xl font-bold pt-16">Download Now</p>
        <div class="flex items-center justify-center md:gap-4 mx-auto ">
            <div className="mx-auto justify-center bg-center flex items-center"> 
              <div className="flex items-center justify-center mx-4">
                <img src={backgroundImage} alt="Description" className="hover:cursor-pointer h-36 lg:h-full"/>
              </div>
              <div>
                <img src={backgroundImage2} alt="Description" className="hover:cursor-pointer h-36 lg:h-full"/>
              </div>
            </div>
        </div>
    </div>
  );
}

export default DownloadApp;

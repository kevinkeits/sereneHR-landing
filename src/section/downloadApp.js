import React from 'react';
import backgroundImage from '../icon/google-play-badge-logo-svgrepo-com.svg';
import backgroundImage2 from '../icon/download-on-the-app-store-apple-logo-svgrepo-com.svg';

const DownloadApp = () => {
  return (
    <div class="bg-black">
        <p class="text-white text-center text-3xl font-bold pt-20">Download Now</p>
        <div class="flex items-center justify-center md:gap-4">
            <div className="bg-center flex items-center"> 
              <div className="mx-4">
                <img src={backgroundImage} alt="Description" />
              </div>
              <div>
                <img src={backgroundImage2} alt="Description" />
              </div>
            </div>
        </div>
    </div>
  );
}

export default DownloadApp;

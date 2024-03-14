import React, { useRef, useEffect } from 'react';
import BgVideo from '../image/bg-video.mp4';
import '../App.css';

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.playbackRate = 1.2;
      });
    }
  }, []);

  return (
    <div id="mainpage-div" className="relative">
      <video ref={videoRef} src={BgVideo} autoPlay muted loop className="blur-background" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <div className="container mx-auto text-center text-white">
          <h1 className="animated-link text-5xl font-bold mb-4">SereneHR - Solusi HR Terpadu Anda</h1>
          <h2 className="animated-link text-2xl font-semibold mb-8">Meringankan Proses HR Anda dengan Mudah</h2>
          <div className="flex items-center justify-center space-x-4">
            <h4 className="bg-blue-50 text-blue-600 font-semibold border rounded-md shadow-lg text-center hover:bg-blue-900 hover:text-white hover:shadow-xl hover:cursor-pointer p-2 mx-2 w-48">Mulai Sekarang</h4>
            <h4 className="bg-blue-600 text-white font-semibold rounded-md shadow-lg text-center hover:bg-blue-900 hover:shadow-xl hover:cursor-pointer p-2 mx-2 w-48">Coba Gratis</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

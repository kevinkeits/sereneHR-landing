import React from 'react';
import './App.css';

import Header from './section/header';
import MainPage from './section/mainPage';
import Fitur from './section/fitur';
import DownloadApp from './section/downloadApp';
import Pricing from './section/price';
import About from './section/about';
import Faq from './section/FAQ';

function App() {
  return (
    <div className="App">
     <Header />
     <MainPage />
     <Fitur />
     <DownloadApp />
     <Pricing />
     <About />
     <Faq />
     <DownloadApp />
    </div>
  );
}

export default App;

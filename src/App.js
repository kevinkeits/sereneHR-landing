import React from 'react';
import './styles.css';
import backgroundImage from './Image-Thumb/homepage.png';

function App() {
  return (
    <div  
      style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '300px' // Adjust height as needed
    }}
    >
      <div id="Navbar" class="flex md:justify-center justify-between items-center lg:px-28 font-semibold sticky top-0 left-0">
        <div id="logoColor">
            <h1 class="text-2xl px-4 mx-2"><a href="#homeSerenePOS">SereneHR</a></h1>
        </div>
        <div id="fontHeader" class="md:flex md:grow justify-center hidden">
            <h1 class="text-lg py-2 px-4"><a href="#fitur">Fitur</a></h1>
            <h1 class="text-lg mx-2 py-2 px-4"><a href="#pricing">Harga</a></h1>
            <h1 class="text-lg mx-2 py-2 px-4"><a href="#aboutUs">Tentang Kami</a></h1>
            <h1 class="text-lg mx-2 py-2 px-4"><a href="#callUs">Hubungi Kami</a></h1>
        </div>
        <div id="headerLeft" class="md:flex hidden">
            <h1 id="borderColor" class="text-sm mx-2 py-2 px-4 border-white border rounded-full">Log In</h1>
            <h1 id="borderColor2" class="text-sm mx-2 py-2 px-4 bg-white text-black rounded-full">Coba Gratis</h1>
        </div>
        <img src="src/Icon/hamburger-menu-svgrepo-com.svg" alt="Menu" class="h-5 w-5 mx-4 md:hidden"></img>
      </div>

     <div img src={require('./Image-Thumb/homepage.png')} alt="card" class="" style={{width:1920}} > 
      </div>

      <div id="headerTop" class="bg-indigo-800 py-72">
        <div id="homeSerenePOS" class="my-28 lg:px-10 lg:mx-28">
              <h1 class="text-6xl lg:text-4xl mx-10 mt-10 text-center font-bold text-slate-50">SereneHR - Solusi HR Terpadu Anda</h1>
              <h2 class="text-xl align-middle m-5 text-center text-slate-50">Meringankan Proses HR Anda dengan Mudah</h2>
              <div id="headerTopStart" class="flex items-center justify-center">
                  <h2 class="text-lg m-3 p-2 border-2 rounded-md text-center bg-slate-200 text-blue-800 font-semibold :bg-slate-800"><a href="#startNow">Mulai Sekarang</a></h2>
                  <h2 class="text-lg m-3 p-2 border-2 border-blue-500 rounded-md text-center bg-blue-500 text-white font-semibold :bg-slate-800"><a href="#tryFree">Coba Gratis</a></h2>
              </div>
        </div>
      </div>

      <div id="headerTop" class="bg-blue-600 pt-5 pb-5">
        <h2 class="text-2xl align-middle m-5 font-semibold text-center text-white">Fitur</h2>
        <div id="homeDetails" class="m-2 py-20 lg:px-10 lg:mx-28  grid grid-cols-1 md:grid-cols-3 items-center">
            <div class="m-2 col-span-2">
                <h4 class="text-2xl text-white m-5 font-semibold">Management Data Karyawan</h4>
                <p class="m-5 text-lg text-white flex justify-center">SereneHR memungkinkan Anda untuk dengan mudah mengelola informasi lengkap tentang karyawan, termasuk data pribadi, riwayat pekerjaan, dan dokumen-dokumen terkait.</p>
                <div id="headerTopStart" class="flex items-center justify-center">
                  <h2 class="text-lg m-3 p-2 border-2 rounded-md text-center bg-slate-200 text-blue-800 font-semibold :bg-slate-800"><a href="#startNow">Mulai Sekarang</a></h2>
                  <h2 class="text-lg m-3 p-2 border-2 border-blue-500 rounded-md text-center bg-blue-500 text-white font-semibold :bg-slate-800"><a href="#tryFree">Coba Gratis</a></h2>
                </div>
            </div>
            <div class="m-2">
                <img src={require('./Image-Thumb/Rectangle17.png')} alt="card" class="" />
            </div>
        </div>
      </div>

      <div id="headerTop" class="pt-5 pb-5">
        <div id="homeDetails" class="m-2 py-20 lg:px-10 lg:mx-28  grid grid-cols-1 md:grid-cols-3 items-center">
            <div class="m-2">
                <img src={require('./Image-Thumb/Rectangle18.png')} alt="card" class="" />
            </div>
            <div class="m-2 col-span-2">
                <h4 class="text-2xl text-black m-5 font-semibold">Penggajian Otomatis</h4>
                <p class="m-5 text-lg text-black">Dengan fitur penggajian otomatis, SereneHR menghitung gaji karyawan secara akurat berdasarkan parameter yang telah ditetapkan, termasuk potongan, bonus, dan tunjangan.</p>
                <div id="headerTopStart" class="flex items-center justify-center">
                  <h2 class="text-lg m-3 p-2 border-2 rounded-md text-center bg-slate-200 text-blue-800 font-semibold :bg-slate-800"><a href="#startNow">Mulai Sekarang</a></h2>
                  <h2 class="text-lg m-3 p-2 border-2 border-blue-500 rounded-md text-center bg-blue-500 text-white font-semibold :bg-slate-800"><a href="#tryFree">Coba Gratis</a></h2>
                </div>
            </div>
        </div>
      </div>

      <div id="headerTop" class="bg-blue-600 pt-5 pb-5">
        <div id="homeDetails" class="m-2 py-20 lg:px-10 lg:mx-28  grid grid-cols-1 md:grid-cols-3 items-center">
            <div class="m-2 col-span-2">
                <h4 class="text-2xl text-white m-5 font-semibold">Pengelolaan Absensi dan Cuti</h4>
                <p class="m-5 text-lg text-white flex justify-center">SereneHR memfasilitasi pelacakan absensi dan pengajuan cuti karyawan secara online, memudahkan proses pengelolaan kehadiran dan waktu kerja.</p>
                <div id="headerTopStart" class="flex items-center justify-center">
                  <h2 class="text-lg m-3 p-2 border-2 rounded-md text-center bg-slate-200 text-blue-800 font-semibold :bg-slate-800"><a href="#startNow">Mulai Sekarang</a></h2>
                  <h2 class="text-lg m-3 p-2 border-2 border-blue-500 rounded-md text-center bg-blue-500 text-white font-semibold :bg-slate-800"><a href="#tryFree">Coba Gratis</a></h2>
                </div>
            </div>
            <div class="m-2">
                <img src={require('./Image-Thumb/Rectangle19.png')} alt="card" class="" />
            </div>
        </div>
      </div>

      <div id="headerTop" class="pt-5 pb-5">
        <div id="homeDetails" class="m-2 py-20 lg:px-10 lg:mx-28  grid grid-cols-1 md:grid-cols-3 items-center">
            <div class="m-2">
                <img src={require('./Image-Thumb/Rectangle20.png')} alt="card" class="" />
            </div>
            <div class="m-2 col-span-2">
                <h4 class="text-2xl text-black m-5 font-semibold">Pelaporan dan Analisis</h4>
                <p class="m-5 text-lg text-black">SereneHR menyediakan berbagai laporan yang dapat disesuaikan dan analisis data yang mendalam tentang berbagai aspek SDM, membantu manajemen dalam pengambilan keputusan yang terinformasi.</p>
                <div id="headerTopStart" class="flex items-center justify-center">
                  <h2 class="text-lg m-3 p-2 border-2 rounded-md text-center bg-slate-200 text-blue-800 font-semibold :bg-slate-800"><a href="#startNow">Mulai Sekarang</a></h2>
                  <h2 class="text-lg m-3 p-2 border-2 border-blue-500 rounded-md text-center bg-blue-500 text-white font-semibold :bg-slate-800"><a href="#tryFree">Coba Gratis</a></h2>
                </div>
            </div>
        </div>
      </div>

      <div class="bg-gray-950 py-40">
        <h3 class="text-2xl m-5 font-bold text-center text-slate-50">Download Now</h3>
        <div class="flex justify-center items-center">
          <img src={require('./Image-Thumb/appStore.png')} alt="card" class="m-2" />
          <img src={require('./Image-Thumb/googlePlay.png')} alt="card" class="" />
        </div>
      </div>

      <div id="FeaturesPoint-Row1" class="grid md:grid-cols-3 grid-cols-1 mx-20 md:mx-20">
        <div id="headerTop" class="bg-white pt-5 pb-5">
          <div class="bg-slate-50 m-2 rounded-lg shadow-lg relative">
              <div class="bg-blue-900 rounded-t-lg">
                  <h3 class="font-bold text-white text-2xl py-5 mx-5">Paket Dasar</h3>
              </div>
              <div class="bg-slate-50 p-5 md:px-5">
                  <p class="text-lg">Ingin memiliki semua fitur yang tersedia tanpa batasan? Kami memiliki paket Pro untuk anda</p>
                          <li>Dashboard Penjualan</li>
                          <li>Management Produk</li>
                          <li>Management Karyawan</li>
                          <li>Management Pelanggan</li>
                          <li>Daily Recap By Email </li>
                          <li>Laporan Penjualan</li>
                          <li>Management Outlet</li>
              </div> 
              <div class="absolute bottom-2 left-0 min-w-full px-3">
                  <h1 class="text-lg m-2 p-2 text-center bg-blue-900 text-white rounded-full font-semibold">Coba paket Pro</h1>
              </div>
          </div>
        </div>
      </div>

      

{/* 
      <div id="homeFeatures" class="bg-slate-100 py-10 xl:px-28">
        <h4 class="text-lg text-blue-700 m-5 text-center font-bold mt-10">FITUR</h4>
        <h3 class="text-4xl m-5 font-bold text-center">Fitur-fitur Unggulan untuk Aplikasi POS Anda.</h3>
        <p class="m-5 mb-28 text-lg text-center">Buka potensi bisnis Anda dengan aplikasi POS canggih kami.</p>
      </div>

      <div id="FeaturesPoint-Row1" class="grid grid-cols-1 md:grid-cols-2 items-center m-2 lg:mx-28">
        <div class="bg-slate-50 px-6 m-5 xl:my-10 md:h-full rounded-lg">
            <h3 class="font-semibold text-2xl py-5 text-center">Antarmuka yang Ramah Pengguna</h3>
            <div class="flex items-center justify-center">
            </div>
            <p class="text-lg">Antarmuka yang Intuitif dan Mudah Digunakan untuk Navigasi yang Lancar.</p>
        </div>
        <div class="bg-slate-50 px-6 m-5 xl:my-10 md:h-full rounded-lg ">
            <h3 class="font-semibold text-2xl py-5 text-center">Manajemen Inventaris</h3>
            <div class="flex items-center justify-center">
            </div>
            <p class="text-lg">Lacak dan kelola tingkat inventaris dengan efisien untuk mencegah kehabisan stok dan kelebihan persediaan</p>
        </div>
      </div> */}

      <div id="FeaturesPoint-Row2" class="grid grid-cols-1 md:grid-cols-2 items-center m-2 lg:mx-28">
            <div class="bg-slate-50 px-6 m-5 xl:my-10 md:h-full rounded-lg">
                <h3 class="font-semibold text-2xl py-5 text-center">Analisis Penjualan Mendalam</h3>
                <div class="flex items-center justify-center">
                </div>
                <p class="text-lg">Dapatkan wawasan berharga mengenai kinerja penjualan dan perilaku pelanggan dengan analisis yang komprehensif</p>
            </div>
            <div class="bg-slate-50 px-6 m-5 xl:my-10 md:h-full rounded-lg">
                <h3 class="font-semibold text-2xl py-5 text-center">Proses Pembayaran yang Aman</h3>
                <div class="flex items-center justify-center">
                </div>
                <p class="text-lg">Memastikan pemrosesan pembayaran yang aman dan dapat diandalkan untuk transaksi yang lancar</p>
            </div>
        </div>
    </div>
  );
}

export default App;

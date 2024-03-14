import React from 'react';
import backgroundImage from '../image/jungon-kim.png';

const About = () => {
  return (
    <div id="tentang-div" class="bg-white p-2 md:flex md:items-center md:justify-center gap-2 md:px-20 px-4 py-20">
      <div class="py-10 md:max-w-lg mx-auto md:mx-1">
          <h1 class="text-3xl font-semibold my-5 px-5">Tentang Kami</h1>
          <p class="text-xl my-5 px-5">SereneHR adalah platform HRIS (Human Resources Information System) yang menyediakan solusi lengkap untuk mengelola semua aspek sumber daya manusia secara efisien dan efektif. 
              Dengan SereneHR, perusahaan dapat mengotomatiskan proses administrasi HR, termasuk manajemen data karyawan, penggajian, absensi, cuti, evaluasi kinerja, dan lebih banyak lagi.
          </p>
          <p class="text-xl my-5 px-5">Keunggulan SereneHR terletak pada antarmuka yang intuitif dan ramah pengguna, memudahkan pengguna untuk mengakses dan menggunakan berbagai fitur tanpa kesulitan. 
              Dilengkapi dengan teknologi canggih, SereneHR memberikan visibilitas yang jelas dan akurat terhadap informasi karyawan serta analisis data yang mendalam untuk mendukung pengambilan keputusan strategis perusahaan.
          </p>
          <p class="text-xl my-5 px-5">Dengan SereneHR, perusahaan dapat meningkatkan produktivitas, mengurangi biaya administrasi, dan meningkatkan kepuasan karyawan. 
              SereneHR adalah solusi modern yang dapat diandalkan untuk membawa departemen SDM ke level berikutnya dalam era digital ini.
          </p>
          {/* <!-- Fitur - Main - CTA --> */}
          <div class="flex items-center justify-center ">
              <h4 class="bg-blue-50 text-lg text-blue-600 font-semibold border rounded-md shadow-lg text-center hover:bg-blue-900 hover:text-white hover:shadow-xl hover:cursor-pointer p-2 mx-2 w-48">Mulai Sekarang</h4>
              <h4 class="bg-blue-600 text-white text-lg font-semibold rounded-md shadow-lg text-center hover:bg-blue-900 hover:shadow-xl hover:cursor-pointer p-2 mx-2 w-48">Coba Gratis</h4>
          </div>
      </div>
      <div class="md:max-w-lg max-w-md mx-auto md:mx-1">
        <img src={backgroundImage} alt="Description" class="mx-auto md:mx-2"/>
      </div> 
  </div>
  );
}

export default About;

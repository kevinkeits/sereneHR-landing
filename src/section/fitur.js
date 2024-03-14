import React from 'react';
import '@dotlottie/player-component';

const Fitur = () => {
  return (
    <div id="fitur-div" class="">
        {/* <!-- Fitur - Manajemen Data Karyawan --> */}
        <h1 class="bg-blue-600 flex items-center justify-center text-3xl text-white font-semibold pt-16">Fitur</h1>
        <div class="bg-blue-600 p-2 md:flex md:items-center md:gap-2 mx-auto md:px-20 px-2 justify-center py-24">
            <div class="py-10 max-w-lg mx-auto md:mx-1">
                <h1 class="text-3xl text-white font-semibold my-5 px-5 ">Manajemen Data Karyawan</h1>
                <p class="text-white text-xl my-5 px-5">SereneHR memungkinkan Anda untuk dengan mudah mengelola informasi lengkap tentang karyawan, termasuk data pribadi, riwayat pekerjaan, dan dokumen-dokumen terkait.</p>
                {/* <!-- Fitur - Main - CTA --> */}
                <div class="flex items-center justify-center py-4">
                    <h4 class="bg-blue-50 text-lg text-blue-600 font-semibold border rounded-md shadow-lg text-center hover:bg-blue-900 hover:text-white hover:shadow-xl hover:cursor-pointer p-2 mx-2 md:w-48 w-40">Mulai Sekarang</h4>
                    <h4 class="bg-blue-500 text-white text-lg font-semibold rounded-md shadow-lg text-center hover:bg-blue-900 hover:shadow-xl hover:cursor-pointer p-2 mx-2 md:w-48 w-40">Coba Gratis</h4>
                </div>
            </div>
            <div class="md:max-w-lg max-w-md px-3 mx-auto md:mx-1">
                <dotlottie-player src="https://lottie.host/3f1ff56f-da8f-4e70-a0a9-f50fb8069c84/zdS2yizuMk.json" background="transparent" speed="0.5" class="mx-auto max-w-lg" loop autoplay></dotlottie-player>
            </div> 
        </div>

        {/* <!-- Fitur - Penggajian Otomatis --> */}
        <div class="bg-white p-2 md:flex md:items-center gap-2 md:px-20 px-2 md:justify-center py-24">
            <div class="md:max-w-lg max-w-md px-3 mx-auto md:mx-1">
                <dotlottie-player src="https://lottie.host/775cc88d-3640-4f14-98ef-cb78367c203f/7LqEiG91Vd.json" background="transparent" speed="0.5" class="mx-auto" loop autoplay></dotlottie-player>
            </div> 
            <div class="py-10 max-w-lg mx-auto md:mx-1">
                <h1 class="text-3xl  font-semibold my-5 px-5">Penggajian Otomatis</h1>
                <p class="text-xl my-5 px-5">Dengan fitur penggajian otomatis, SereneHR menghitung gaji karyawan secara akurat berdasarkan parameter yang telah ditetapkan, termasuk potongan, bonus, dan tunjangan.</p>
                {/* <!-- Fitur - Main - CTA --> */}
                <div class="flex items-center justify-center py-4">
                    <h4 class="bg-blue-50 text-lg text-blue-600 font-semibold border rounded-md shadow-lg text-center hover:bg-blue-900 hover:text-white hover:shadow-xl hover:cursor-pointer p-2 mx-2 w-48">Mulai Sekarang</h4>
                    <h4 class="bg-blue-600 text-white text-lg font-semibold rounded-md shadow-lg text-center hover:bg-blue-900 hover:shadow-xl hover:cursor-pointer p-2 mx-2 w-48">Coba Gratis</h4>
                </div>
            </div>
        </div>

        {/* <!-- Fitur - Pengelolaan Absensi dan Cuti --> */}
        <div class="bg-blue-600 p-2 md:flex md:gap-2 md:items-center md:justify-center md:px-20 px-2 py-24">
            <div class="py-10 max-w-lg mx-auto md:mx-1">
                <h1 class="text-3xl text-white font-semibold my-5 px-5">Pengelolaan Absensi dan Cuti</h1>
                <p class="text-white text-xl my-5 px-5">SereneHR memfasilitasi pelacakan absensi dan pengajuan cuti karyawan secara online, memudahkan proses pengelolaan kehadiran dan waktu kerja.
                </p>
                {/* <!-- Fitur - Main - CTA --> */}
                <div class="flex items-center justify-center py-4">
                    <h4 class="bg-blue-50 text-lg text-blue-600 font-semibold border rounded-md shadow-lg text-center hover:bg-blue-900 hover:text-white hover:shadow-xl hover:cursor-pointer p-2 mx-2 w-48">Mulai Sekarang</h4>
                    <h4 class="bg-blue-500 text-white text-lg font-semibold rounded-md shadow-lg text-center hover:bg-blue-900 hover:shadow-xl hover:cursor-pointer p-2 mx-2 w-48">Coba Gratis</h4>
                </div>
            </div>
            <div class="md:max-w-lg max-w-md px-3 mx-auto md:mx-1">
                <dotlottie-player src="https://lottie.host/edf4da27-568a-4514-8f17-ec0a94c38ca8/s4vEmkUcZ8.json" background="transparent" speed="0.5" class="mx-auto" loop autoplay></dotlottie-player>
            </div> 
        </div>

        {/* <!-- Fitur - Pelaporan dan Analisis --> */}
        <div class="bg-white p-2 md:flex md:items-center md:justify-center md:px-20 px-2 gap-2 py-24">
            <div class="md:max-w-lg max-w-md px-3 mx-auto md:mx-1">
                <dotlottie-player src="https://lottie.host/cdb6a857-05d1-43cc-8d61-4d03628f4fb3/1FvqWCUcLT.json" background="transparent" speed="0.5" class="mx-auto" loop autoplay></dotlottie-player>
            </div> 
            <div class="py-10 max-w-lg mx-auto md:mx-1">
                <h1 class="text-3xl font-semibold my-5 px-5">Pelaporan dan Analisis</h1>
                <p class="text-xl my-5 px-5">SereneHR menyediakan berbagai laporan yang dapat disesuaikan dan analisis data yang mendalam tentang berbagai aspek SDM, membantu manajemen dalam pengambilan keputusan yang terinformasi.
                </p>
                {/* <!-- Fitur - Main - CTA --> */}
                <div class="flex items-center justify-center py-4">
                    <h4 class="bg-blue-50 text-lg text-blue-600 font-semibold border rounded-md shadow-lg text-center hover:bg-blue-900 hover:text-white hover:shadow-xl hover:cursor-pointer p-2 mx-2 w-48">Mulai Sekarang</h4>
                    <h4 class="bg-blue-600 text-white text-lg font-semibold rounded-md shadow-lg text-center hover:bg-blue-900 hover:shadow-xl hover:cursor-pointer p-2 mx-2 w-48">Coba Gratis</h4>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Fitur;

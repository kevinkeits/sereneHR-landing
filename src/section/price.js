import React from 'react';
import Image1 from '../icon/check-circle-1-svgrepo-com.svg';
import Image2 from '../icon/close-circle-svgrepo-com.svg';

const Pricing = () => {
  return (
    <div id="harga-div" class="">
        <div class="container mx-auto pb-10 pt-20 lg:max-w-5xl">
            <h1 class="text-3xl font-bold text-center py-2 px-6">Harga</h1>
            <p class="text-lg font-medium text-center py-2 px-6">Perkuat keberhasilan bisnis Anda dengan solusi HRIS kami. Harga terjangkau, manfaat tak terbatas. Bergabunglah sekarang untuk transformasi yang lebih baik!</p>
        </div>
        <div class="md:container md:mx-auto md:grid md:grid-cols-3 lg:max-w-5xl gap-2 py-10 px-6">
            {/* <!-- Paket Dasar --> */}
            <div class="border border-blue-500 rounded-lg my-2 max-w-md mx-auto">
                <h1 class="bg-blue-500 text-white md:py-6 py-10 text-center text-2xl font-semibold rounded-t-lg">Paket Dasar</h1>
                <div class="px-2 py-2">
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Manajemen Karyawan</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Pelacakan Waktu & Kehadiran</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Penggajian Dasar</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image2} alt="Description" class="w-6 h-auto"/>
                        <p>Evaluasi Kinerja</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image2} alt="Description" class="w-6 h-auto"/>
                        <p>Manajemen Pelatihan</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image2} alt="Description" class="w-6 h-auto"/>
                        <p>Laporan Analisis HR</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image2} alt="Description" class="w-6 h-auto"/>
                        <p>Manajemen Rekrutmen</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image2} alt="Description" class="w-6 h-auto"/>
                        <p>Integrasi Sistem Lain</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image2} alt="Description" class="w-6 h-auto"/>
                        <p>Pengaturan Penyesuaian Lanjutan</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3">
                          <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Dukungan Pelanggan: Email</p>
                    </div>
                </div>
                <div class="p-2">
                    <h1 class="hover:bg-blue-400 hover:text-white hover:cursor-pointer border border-blue-400 m-2 text-center py-2 rounded-lg shadow-lg text-blue-500 text-lg font-medium">Gratis</h1>
                </div> 
            </div>

            {/* <!-- Paket Pro --> */}
            <div class="border border-blue-800 rounded-lg my-2 max-w-md mx-auto">
                <h1 class="bg-blue-800 text-white md:py-6 py-10 text-center text-2xl font-semibold rounded-t-lg">Paket Pro</h1>
                <div class="px-2 py-2">
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Manajemen Karyawan</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Pelacakan Waktu & Kehadiran</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Penggajian Dasar</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Evaluasi Kinerja</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Manajemen Pelatihan</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Laporan Analisis HR</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image2} alt="Description" class="w-6 h-auto"/>
                        <p>Manajemen Rekrutmen</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image2} alt="Description" class="w-6 h-auto"/>
                        <p>Integrasi Sistem Lain</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image2} alt="Description" class="w-6 h-auto"/>
                        <p>Pengaturan Penyesuaian Lanjutan</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Dukungan Pelanggan: Email</p> 
                    </div>
                </div>    
                <div class="p-2">
                    <h1 class="bg-blue-800 hover:bg-blue-950 hover:cursor-pointer m-2 text-center py-2 rounded-lg shadow-lg text-white text-lg font-medium">Rp. 99.000 / Bulan</h1>
                </div> 
            </div>  
            
            {/* <!-- Paket Enterprise --> */}
            <div class="border border-green-500 rounded-lg my-2 max-w-md mx-auto">
                <h1 class="bg-green-500 text-white md:py-6 py-10 text-center text-2xl font-semibold rounded-t-lg">Paket Enterprise</h1>
                <div class="px-2 py-2">
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Manajemen Karyawan</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Pelacakan Waktu & Kehadiran</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Penggajian Dasar</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Evaluasi Kinerja</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Manajemen Pelatihan</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Laporan Analisis HR</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Manajemen Rekrutmen</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Integrasi Sistem Lain</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3 items-start">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Pengaturan Penyesuaian Lanjutan</p>
                    </div>
                    <div class="flex gap-2 py-1 pl-3">
                        <img src={Image1} alt="Description" class="w-6 h-auto"/>
                        <p>Dukungan Pelanggan: Email</p>
                    </div>
                </div>
                <div class="p-2">
                    <h1 class="bg-green-500 hover:bg-green-600 hover:cursor-pointer m-2 text-center py-2 rounded-lg shadow-lg text-white text-lg font-medium">Harga Khusus</h1>
                </div> 
            </div> 
        </div>
    </div>
  );
}

export default Pricing;

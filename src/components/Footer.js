import React from "react";

function Footer() {
  return (
    <div className="mt-24 pt-12 pb-8">
      {/* Menggunakan grid 4 kolom: Logo mengambil 2 kolom agar posisinya menyamping lebar seperti aslinya */}
      <div className="container mb-12 text-center sm:text-left grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Kolom 1: Logo dan Tulisan (Memakan 2 porsi/kolom di layar besar) */}
        <div className="mx-auto sm:ml-0 lg:col-span-2">
          <img
            className="cursor-pointer"
            src="./images/logo.png"
            alt="logo"
            width="140" 
          />
          {/* Tulisan sebagai pengganti ikon sosmed */}
          <p className="mt-4 text-gray-500 text-sm max-w-sm mx-auto sm:ml-0 leading-relaxed">
            Sensasi soda dingin berpadu sirup leci premium dan biji selasih. Diramu dadakan untuk menjamin kesegaran di setiap tegukan.
          </p>
        </div>

        {/* Kolom 2: Resources (Menu) */}
        <div>
          <h6 className="font-medium text-xl mb-4">Resources</h6>
          <Link text="Tentang Kami"/>
          <Link text="Kelebihan Produk"/>
          <Link text="Daftar Harga"/>
          <Link text="Testimoni"/>
        </div>

        {/* Kolom 3: Legal Stuff */}
        <div>
          <h6 className="font-medium text-xl mb-4">Legal Stuff</h6>
          <Link text="Cara Pesan"/>
          <Link text="Makassar, Sulsel"/>
          <Link text="Privacy Policy"/>
          <Link text="Terms of Service"/>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;

export function Link({text}) {
  return <p className="cursor-pointer mt-2 text-gray-600 hover:text-[#02897A] transition-colors">{text}</p>;
}
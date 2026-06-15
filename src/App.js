import React from "react";
// Impor komponen yang digunakan
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PriceTable from "./components/PriceTable";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// Komponen di bawah ini sengaja tidak diimpor agar aplikasi lebih ringan
// import Benefits from "./components/Benefits";
// import OurExperts from "./components/OurExperts";
// import Blogs from "./components/Blogs";

function App() {
  return (
    <div>
      <Header />

      {/* Bagian 1: Penawaran Utama & Gambar Gelas */}
      <Hero />

      {/* Bagian 2: 3 Keunggulan Bahan (Marjan, Sprite, Selasih) */}
      <Features />

      {/* Bagian 3: Daftar Menu dan Harga Minuman */}
      <PriceTable/>

      {/* Bagian 4: Ulasan Pelanggan yang sudah mencoba */}
      <Testimonials/>


      {/* Bagian 6: Catatan Kaki (Lokasi & Jam Buka) */}
      <Footer/>
      
      {/* Catatan: Komponen Benefits, OurExperts, dan Blogs disembunyikan.
        Jika suatu saat Anda butuh, Anda tinggal memanggilnya kembali.
      */}
    </div>
  );
}

export default App;
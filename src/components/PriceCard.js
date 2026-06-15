import React from "react";

function PriceCard() {
  return (
    <div style={{
      width: "100%",
      maxWidth: "480px", // KARTU DIPERBESAR (sebelumnya 360px)
      backgroundColor: "#02897A",
      borderRadius: "24px",
      overflow: "hidden", 
      boxShadow: "0 25px 50px -12px rgba(2, 137, 122, 0.5)", // Efek bayangan lebih dramatis
      display: "flex",
      flexDirection: "column",
      margin: "0 auto"
    }}>

      {/* Bagian Gambar (Dibuat jauh lebih tinggi) */}
      <div style={{ width: "100%", height: "600px", backgroundColor: "#ffffff" }}>
        <img 
          src="./images/poster.png" 
          alt="Promo Leci Squash" 
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} 
        />
      </div>

      {/* Pembungkus Teks (Tetap dipertahankan ringkas dan pendek) */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px 20px 20px 20px" // Jarak tetap dibuat tipis
      }}>

        {/* Teks Produk */}
        <h3 style={{ fontSize: "18px", color: "#ffffff", fontWeight: "bold", margin: "0 0 2px 0" }}>
          Leci Squash
        </h3>
        <p style={{ fontSize: "13px", color: "#ccfbf1", margin: "0 0 8px 0" }}>
          Segar Nikmat with Selasih
        </p>

        {/* Angka Harga */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", marginBottom: "12px" }}>
          <span style={{ fontSize: "40px", fontWeight: "900", color: "#ffffff", lineHeight: "1" }}>10</span>
          <span style={{ fontSize: "14px", color: "#ffffff", marginLeft: "4px", fontWeight: "bold" }}>Ribu</span>
        </div>

        {/* List Keunggulan (Dirapatkan) */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          color: "#ffffff", 
          fontSize: "13px", 
          lineHeight: "1.4", // Rapat
          marginBottom: "15px" 
        }}>
          <span>Cup Ukuran Besar</span>
          <span>Ekstra Biji Selasih</span>
          <span>Sirup Leci Premium</span>
        </div>

        {/* Tombol Order Now (Tetap pipih) */}
        <a 
          href="https://wa.me/6285397786286" 
          style={{
            backgroundColor: "#ffffff",
            color: "#02897A",
            padding: "10px 0",
            width: "100%", 
            maxWidth: "200px",
            textAlign: "center",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "14px",
            textDecoration: "none"
          }}
        >
          Pesan Sekarang
        </a>

      </div>
    </div>
  );
}

export default PriceCard;
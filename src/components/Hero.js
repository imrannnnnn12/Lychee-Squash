import React from "react";

function Hero() {
  return (
    // Latar belakang diubah menjadi #f9fafb agar senada dan menyatu dengan Header baru Anda
    <div style={{ backgroundColor: "#f9fafb", minHeight: "85vh", width: "100%", display: "flex", alignItems: "center" }}>
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 20px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Sisi Kiri: Teks */}
        <div style={{ flex: "1", paddingRight: "40px" }}>
          <h1 style={{ fontSize: "80px", fontWeight: "800", lineHeight: "1.1", color: "#064e3b", marginBottom: "30px" }}>
            Leci Squash <br />
            <span style={{ color: "#059669" }}>with Selasih</span>
          </h1>
          <p style={{ fontSize: "28px", color: "#065f46", marginBottom: "40px", fontWeight: "500" }}>
            Rasakan sensasi soda dingin berpadu sirup leci premium. Dilengkapi ekstra biji selasih untuk sensasi asyik di setiap tegukan.
          </p>
          <a 
            href="https://wa.me/6285397786286" 
            style={{ backgroundColor: "#10b981", color: "white", padding: "20px 40px", borderRadius: "50px", fontSize: "22px", fontWeight: "bold", textDecoration: "none", display: "inline-block" }}
          >
            Pesan
          </a>
        </div>

        {/* Sisi Kanan: Gambar */}
        <div style={{ flex: "1", display: "flex", justifyContent: "center", position: "relative" }}>
          <div style={{ backgroundColor: "#d1fae5", padding: "30px", borderRadius: "50px", transform: "rotate(3deg)" }}>
            <img 
              src="./images/kewirus-removebg-preview.png" 
              alt="Leci Squash" 
              style={{ width: "450px", height: "450px", objectFit: "contain" }} 
            />
          </div>
        </div>

      </main>
    </div>
  );
}

export default Hero;
import React from "react";
import PriceCard from "./PriceCard";

function PriceTable() {
  return (
    <section 
      id="pricing" // Kunci Navigasi: Menghubungkan ke tombol "Harga" di Header
      style={{ 
        backgroundColor: "#f8fafc", 
        padding: "100px 20px", 
        width: "100%",
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center",
        boxSizing: "border-box", 
        margin: "0 auto" 
      }}
    >
      
      {/* Bagian Judul (Rata Tengah Mutlak) */}
      <div style={{ 
        textAlign: "center", 
        marginBottom: "40px", 
        width: "100%", 
        maxWidth: "600px" 
      }}>
        <h2 style={{ fontSize: "36px", fontWeight: "900", color: "#22343D", marginBottom: "10px" }}>
          Harga Spesial
        </h2>
        <p style={{ fontSize: "16px", color: "#64748b" }}>
          Nikmati kesegaran dengan harga terbaik
        </p>
      </div>

      {/* Pembungkus Kartu Harga (Memaksa Kartu Tepat di Tengah) */}
      <div style={{ 
        width: "100%", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center" 
      }}>
        <PriceCard />
      </div>

    </section>
  );
}

export default PriceTable;
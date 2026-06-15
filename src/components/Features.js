import React from "react";

function Features() {
  return (
    // Latar belakang menggunakan hijau mint sangat halus (#ecfdf5) untuk membedakan dari Hero
    <section style={{ backgroundColor: "#ecfdf5", width: "100%", padding: "100px 20px" }}>
      <section id="features" className="..."></section>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Judul Bagian */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: "900", color: "#064e3b", marginBottom: "15px" }}>
            Terbuat dari <span style={{ color: "#10b981" }}>Bahan Berkualitas</span>
          </h2>
          <p style={{ fontSize: "22px", color: "#065f46", fontWeight: "500" }}>
            Kombinasi sempurna untuk menyegarkan harimu
          </p>
        </div>

        {/* Grid Container untuk 3 Kolom */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "40px" 
        }}>

          {/* Kartu 1 */}
          <div style={{ 
            backgroundColor: "#ffffff", // Kartu putih agar teks sangat kontras
            borderRadius: "30px", 
            padding: "40px 30px", 
            textAlign: "center", 
            boxShadow: "0 10px 25px rgba(4, 120, 87, 0.05)",
            borderBottom: "8px solid #10b981" // Aksen garis bawah hijau cerah
          }}>
            <div style={{ width: "160px", height: "160px", margin: "0 auto 25px auto", borderRadius: "50%", overflow: "hidden", border: "5px solid #d1fae5" }}>
              <img 
                src="./images/buah.png" 
                alt="Sirup Premium" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
            <h3 style={{ fontSize: "28px", fontWeight: "800", color: "#064e3b", marginBottom: "15px" }}>
              Sirup Premium
            </h3>
            <p style={{ fontSize: "18px", color: "#047857", lineHeight: "1.6", fontWeight: "500" }}>
              Menggunakan sirup pilihan dengan rasa manis yang pas, tidak bikin tenggorokan gatal.
            </p>
          </div>

          {/* Kartu 2 */}
          <div style={{ 
            backgroundColor: "#ffffff", 
            borderRadius: "30px", 
            padding: "40px 30px", 
            textAlign: "center", 
            boxShadow: "0 10px 25px rgba(4, 120, 87, 0.05)",
            borderBottom: "8px solid #10b981"
          }}>
            <div style={{ width: "160px", height: "160px", margin: "0 auto 25px auto", borderRadius: "50%", overflow: "hidden", border: "5px solid #d1fae5" }}>
              <img 
                src="./images/lemon.png" 
                alt="Sensasi Sparkling" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
            <h3 style={{ fontSize: "28px", fontWeight: "800", color: "#064e3b", marginBottom: "15px" }}>
              Sensasi Sparkling
            </h3>
            <p style={{ fontSize: "18px", color: "#047857", lineHeight: "1.6", fontWeight: "500" }}>
              Air soda ekstra dingin yang memberikan sensasi melegakan seketika saat cuaca panas.
            </p>
          </div>

          {/* Kartu 3 */}
          <div style={{ 
            backgroundColor: "#ffffff", 
            borderRadius: "30px", 
            padding: "40px 30px", 
            textAlign: "center", 
            boxShadow: "0 10px 25px rgba(4, 120, 87, 0.05)",
            borderBottom: "8px solid #10b981"
          }}>
            <div style={{ width: "160px", height: "160px", margin: "0 auto 25px auto", borderRadius: "50%", overflow: "hidden", border: "5px solid #d1fae5" }}>
              <img 
                src="./images/ess.png" 
                alt="Selalu Segar" 
                style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.2)" }} 
              />
            </div>
            <h3 style={{ fontSize: "28px", fontWeight: "800", color: "#064e3b", marginBottom: "15px" }}>
              Selalu Segar
            </h3>
            <p style={{ fontSize: "18px", color: "#047857", lineHeight: "1.6", fontWeight: "500" }}>
              Pesanan diracik dadakan (made to order) dengan tambahan biji selasih untuk tekstur yang asyik.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;
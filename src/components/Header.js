import React from "react";
import "../index.css";
import { MenuIcon } from "@heroicons/react/solid";

function Header() {
  // Fungsi untuk mendeteksi ID dan menggeser layar secara mulus
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ backgroundColor: "#f9fafb", width: "100%" }}>
      <header className="container mx-auto flex justify-between items-center shadow-md md:shadow-none h-20 px-6">
        
        {/* Logo Lengkap (Desktop) */}
        <img
          className="md:hidden lg:inline-flex cursor-pointer"
          src="./images/logo.png"
          alt="Logo Leci Squash"
          width="180"
        />
        
        {/* Logo Singkat (Tablet) */}
        <img
          className="hidden md:inline-block lg:hidden cursor-pointer"
          src="./images/logo.png"
          alt="Logo Leci Squash"
          width="45"
        />
        
        <div className="flex items-center">
          <MenuIcon className="h-10 md:hidden text-[#064e3b] cursor-pointer" />
          
          {/* Menu Navigasi dengan Fungsi Klik */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <p 
              onClick={() => scrollToSection("features")} // Mengarah ke id="features"
              className="nav-item cursor-pointer font-bold text-[#064e3b] hover:text-[#10b981] transition-colors"
              style={{ fontSize: "22px" }}
            >
              Produk
            </p>
            <p 
              onClick={() => scrollToSection("pricing")} // Mengarah ke id="pricing"
              className="nav-item cursor-pointer font-bold text-[#064e3b] hover:text-[#10b981] transition-colors"
              style={{ fontSize: "22px" }}
            >
              Harga
            </p>
            <p 
              onClick={() => scrollToSection("testimonials")} // Mengarah ke id="testimonials"
              className="nav-item cursor-pointer font-bold text-[#064e3b] hover:text-[#10b981] transition-colors"
              style={{ fontSize: "22px" }}
            >
              Testimoni
            </p>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default Header;
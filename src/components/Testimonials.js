import React from "react";
import TestimonialItem from "./TestimonialItem";

function Testimonials() {
  return (
    <section 
      id="testimonials" // Kunci Navigasi: Menghubungkan ke tombol "Testimoni" di Header
      className="container mt-36 text-center flex flex-col items-center"
    >
      <h3 className="text-4xl font-bold">Apa Kata Mereka</h3>
      <p className="font-medium mt-4 max-w-lg">
        Testimoni jujur dari pelanggan yang sudah mencoba kesegaran Leci Squash kami.
      </p>

      <div className="mt-12 min-w-[80vw] justify-center md:gap-4 md:min-w-full grid gap-8 md:grid-cols-3">
        
        {/* Testimoni 1: Faizal */}
        <TestimonialItem
          name="Faizal"
          designation="Teknik Sipil"
          userImg="https://i.pravatar.cc/150?img=11"
          rating={4}
          testimonial="Seger banget! Pas banget buat nemenin nugas gambar teknik sampai malam. Rasa lecinya premium dan selasihnya bikin tambah nikmat. Bakal sering order nih!"
        />
        
        {/* Testimoni 2: Jemas */}
        <TestimonialItem
          name="Jemas"
          designation="Manajemen"
          userImg="https://i.pravatar.cc/150?img=33"
          rating={4}
          testimonial="Harganya aman di kantong mahasiswa, tapi rasanya kayak minuman kafe mahal. Nyegerin banget diminum siang-siang sehabis kelas, pelayanannya juga ramah."
        />
        
        {/* Testimoni 3: Aldo */}
        <TestimonialItem
          name="Aldo"
          designation="Hukum"
          userImg="https://i.pravatar.cc/150?img=59"
          rating={4}
          testimonial="Packaging-nya rapi dan rapat, jadi aman dibawa-bawa. Leci squash-nya bener-bener melegakan tenggorokan setelah seharian suntuk baca materi kuliah."
        />
        
      </div>
    </section>
  );
}

export default Testimonials;
// Mengimpor komponen dan tipe yang diperlukan dari React dan pustaka lainnya
import { Separator } from "@/components/ui/separator";
import React, { FC, ReactNode } from "react";

// Mendefinisikan interface untuk properti komponen FieldInput
interface FieldInputProps {
  children: ReactNode; // Elemen anak (children) yang akan dirender di dalam komponen
  title: string; // Teks judul yang akan ditampilkan
  subtitle: string; // Teks subjudul yang akan ditampilkan
}

// Mendefinisikan komponen fungsional FieldInput
const FieldInput: FC<FieldInputProps> = ({ children, subtitle, title }) => {
  return (
    <>
      {/* Kontainer untuk judul, subjudul, dan elemen anak */}
      <div className="flex flex-row items-start">
        {/* Kontainer untuk judul dan subjudul */}
        <div className="w-[35%]">
          {/* Gaya untuk judul */}
          <div className="font-semibold">{title}</div>
          {/* Gaya untuk subjudul dengan teks berwarna abu-abu */}
          <div className="text-gray-400 w-80">{subtitle}</div>
        </div>
        {/* Merender elemen anak (children) */}
        {children}
      </div>
      {/* Garis pemisah di bawah field input */}
      <Separator />
    </>
  );
};

// Mengekspor komponen FieldInput sebagai ekspor default
export default FieldInput;

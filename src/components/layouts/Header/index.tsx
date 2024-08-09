// Mengaktifkan mode client-side rendering
"use client";

// Import komponen dan hook yang dibutuhkan
import { Button } from "@/components/ui/button"; // Mengimpor komponen Button dari direktori komponen UI
import { PlusIcon } from "lucide-react"; // Mengimpor ikon Plus dari paket lucide-react
import { useRouter } from "next/navigation"; // Mengimpor hook useRouter untuk navigasi di Next.js
import React, { FC } from "react"; // Mengimpor React dan tipe FC (Functional Component)

// Mendefinisikan interface untuk props komponen Header
interface HeaderProps {}

// Membuat komponen Header sebagai Functional Component
const Header: FC<HeaderProps> = ({}) => {
  // Menggunakan useRouter hook untuk mendapatkan objek router
  const router = useRouter();

  // Fungsi untuk navigasi ke halaman "Post a Job"
  const navCreateJobPage = () => router.push("/post-a-job");

  return (
    // Kontainer utama untuk elemen-elemen header
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
      {/* Bagian kiri header menampilkan nama perusahaan */}
      <div>
        <div>Company</div>
        <div className="font-semibold">Twitter</div>
      </div>
      {/* Bagian kanan header dengan tombol untuk menavigasi ke halaman pembuatan pekerjaan */}
      <div>
        <Button onClick={navCreateJobPage} className="rounded-none py-3 px-6">
          {/* Ikon plus di dalam tombol */}
          <PlusIcon className="mr-2 w-4 h-4" />
          Post a Jobs
        </Button>
      </div>
    </div>
  );
};

// Mengekspor komponen Header sebagai ekspor default
export default Header;

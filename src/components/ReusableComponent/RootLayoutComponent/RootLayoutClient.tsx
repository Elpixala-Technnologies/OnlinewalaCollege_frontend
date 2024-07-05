"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Nabvar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isRootRoute = pathname === "/";

  return (
    <>
      {!isRootRoute && <Navbar />}
      {children}
      <div className="sm:p-0 p-4 mt-32 bg-gradient-to-b from-[#6697FC] to-[#6697FC]">
        <Footer />
      </div>
    </>
  );
}

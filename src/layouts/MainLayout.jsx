import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pb-20 pt-16 md:pt-24 md:pb-0 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto px-2">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;

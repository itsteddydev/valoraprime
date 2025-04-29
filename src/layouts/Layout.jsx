
import Header from "@/shared/components/Header";
import { Outlet } from "react-router-dom";


const Layout = () => {

  return (
    <section id="calculateprice" className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="overflow-y-auto pt-[65px] bg-white">
        <div className="max-w-[1200px] mx-auto px-2">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-[#4B5563] w-full mx-auto py-4 min-h-[50px]">
        <div className="container mx-auto flex justify-center items-center px-4">
          <span className="text-sm">ValoraPrime © 2025. All rights reserved.</span>
        </div>
      </footer>
    </section>
  );
};

export default Layout;

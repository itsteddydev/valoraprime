import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className=" pt-16  md:pb-0 overflow-y-auto bg-white ">
        <div className=" mx-auto ">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Navigate, Outlet } from "react-router-dom";
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Label } from '@/components/ui/label';
import React from 'react';

const MainLayout = () => {

  const navItems = [
    { id: 1, name: "Inicio", emoji: "🏠", link: "/" },
    { id: 2, name: "Dashboard", emoji: "📊", link: "/dashboard" },
    { id: 3, name: "Registrar", emoji: "➕", link: "/registrar" },
    { id: 4, name: "Finanzas", emoji: "💸", link: "/finanzas" },
    { id: 5, name: "Perfil", emoji: "⚙️", link: "/perfil" },
  ];

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Header */}
      <header className="drop-shadow-md border-b border-gray-200 flex items-center justify-between px-4 py-3 bg-white z-10 fixed top-0 left-0 w-full">
        <h1 className="font-semibold text-xl">Valora Prime</h1>
      </header>

      {/* Content */}
      <div className="flex-grow pt-4 pb-4 overflow-y-auto mt-[54px] mb-[64px]">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-10">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="flex flex-col items-center text-gray-700 hover:text-black"
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

import { Avatar, AvatarImage } from '@/components/ui/avatar';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Label } from '@/components/ui/label';
import React from 'react';


const Layout = () => {

  const emojis = [
    { id: 1, name: "Inicio", URL: "/src/assets/svg/emojis/1F603.svg", emoji: "😃" },
    { id: 2, name: "Dashboard", URL: "/src/assets/svg/emojis/1F4CA.svg", emoji: "📊" },
    { id: 3, name: "Tarifas", URL: "/src/assets/svg/emojis/1F4CA.svg", emoji: "💰" },
    { id: 4, name: "Finanzas", URL: "/src/assets/svg/emojis/1F4CA.svg", emoji: "💸" },
    { id: 5, name: "Ajustes", URL: "/src/assets/svg/emojis/1F4CA.svg", emoji: "⚙️" },

  ];

  return (
    //TODO - Cambiar el color de fondo cuando el proyecto esté más avanzado y se tenga un diseño definido
    <div className=" w-full h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col w-full max-w-[1200px]  pb-4 h-full select-none">
        <div className="drop-shadow-md border-2 md:border-none border-gray-200 flex items-center justify-between pl-4 pr-2 py-3 ">
          <Label className="font-semibold text text-xl  ">Valora Prime</Label>
        </div>
        <nav className="pb-3">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-[1200px]"
          >
            <CarouselContent>
              {emojis.map((emoji, index) => (
                <CarouselItem key={emoji.id} className="basis-1/3 md:basis-1/5 w-1/3 py-2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                        <Avatar className="size-14 bg-slate-100 flex items-center justify-center">
                          <AvatarImage className=""
                            // src={emoji.URL}
                            alt={emoji.name} />
                          <span className='text-4xl'>{emoji.emoji}</span>
                        </Avatar>
                        <span className="text-lg font-semibold">{emoji.name}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex md:ml-12" />
            <CarouselNext className="hidden md:flex md:mr-12" />

          </Carousel>
        </nav>
      </div>
    </div>
  );
};

export default Layout;

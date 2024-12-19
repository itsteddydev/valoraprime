import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className=' bg-slate-100'>
      <h1>
        Valora Prime
      </h1>

      <Carousel className="w-full max-w-sm flex items-center justify-center mx-auto mt-4">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 flex-shrink-0 p-2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>


      <nav>
        {/* aqui van lasimportaciones de los componentes */}
      </nav>
    </div>
  );
};

export default Layout;
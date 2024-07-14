import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const images = [
  '/images/foto1.jpg',
  '/images/foto2.jpg',
  '/images/foto3.jpg',
  '/images/foto4.jpg',
  '/images/foto5.jpg',
  '/images/foto6.jpg',
  '/images/foto7.jpg',
  '/images/foto8.jpg',
  '/images/foto9.jpg',
  '/images/foto10.jpg',
];

export function CarouselDemo() {
  return (
    <Carousel className='w-full max-w-xs'>
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card>
                <CardContent className='aspect-square relative'>
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    style={{ objectFit: 'cover' }}
                    className='rounded-md'
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselDemo;

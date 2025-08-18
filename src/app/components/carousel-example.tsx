'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "./ui";

const mediaItems = [
  { src: '/demoday2.jpg', name: 'Demoday', type: 'image' },
  { src: '/Sharebite.mp4', name: 'Hackathon ShareBite', type: 'video' },
  { src: '/Hackathon.jpeg', name: 'Hackathon Education', type: 'image' },
  { src: '/idpgo-stanford.jpg', name: 'IDP GO', type: 'image' },
  { src: '/idpgo-google.jpeg', name: 'IDP GO', type: 'image' },
];

export default function CarouselExample() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    if (!api) return;
    api.scrollTo(index);
  }, [api]);

  // Plugin de autoplay com delay dinâmico
  const autoplayPlugin = useMemo(() => {
    const currentItem = mediaItems[current];
    const delay = currentItem.type === 'video' ? 5800 : 10000;
    return Autoplay({ delay, stopOnInteraction: true });
  }, [current]);

  useEffect(() => {
    if (!api) return;

    onSelect();
    
    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className="carousel-example-container">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplayPlugin]}
        className="carousel-example"
        setApi={setApi}
        onSelect={onSelect}
      >
        <CarouselContent>
          {mediaItems.map((item, index) => (
            <CarouselItem key={index} className="carousel-example-item">
              <div className="carousel-example-image-container">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="carousel-example-image"
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls={false}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.name}
                    className="carousel-example-image"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                )}
                <div className="carousel-example-overlay">
                  <h3 className="carousel-example-title">{item.name}</h3>
                  <p className="carousel-example-description">Clique para ver detalhes</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="carousel-example-previous" />
        <CarouselNext className="carousel-example-next" />
      </Carousel>
      
      {/* Dots Indicator */}
      <div className="carousel-dots-container">
        {mediaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`carousel-dot ${index === current ? 'carousel-dot-active' : ''}`}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

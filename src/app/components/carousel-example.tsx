'use client';

import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui";

const mediaItems = [
  { src: '/idpgo-stanford.jpg', name: 'IDP GO', type: 'image' },
  { src: '/idpgo-google.jpeg', name: 'IDP GO', type: 'image' },
  { src: '/Hackathon.jpeg', name: 'Hackathon Education', type: 'image' },
  { src: '/Sharebite.mp4', name: 'Hackathon ShareBite', type: 'video' },
  { src: '/demoday2.jpg', name: 'Demoday', type: 'image' }
];

export default function CarouselExample() {
  return (
    <div className="carousel-example-container">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({ delay: 6000, stopOnInteraction: true})
        ]}
        className="carousel-example"
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
      
      {/* Indicadores de pontos personalizados */}
      <div className="carousel-example-dots">
        {mediaItems.map((_, index) => (
          <div
            key={index}
            className="carousel-example-dot"
            aria-label={`Ir para projeto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

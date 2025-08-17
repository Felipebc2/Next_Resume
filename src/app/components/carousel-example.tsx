'use client';

import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui";

const images = [
  { src: '/idpgo-stanford.jpg', name: 'IDP GO' },
  { src: '/idpgo-google.jpeg', name: 'IDP GO' },
  { src: '/Hackathon1.25.jpeg', name: 'Hackathon1.25' },
  { src: '/Hackathon.jpeg', name: 'Hackathon Educação' },
  { src: '/demoday2.jpg', name: 'Demoday' }
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
          Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
        ]}
        className="carousel-example"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="carousel-example-item">
              <div className="carousel-example-image-container">
                <img
                  src={image.src}
                  alt={image.name}
                  className="carousel-example-image"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="carousel-example-overlay">
                  <h3 className="carousel-example-title">{image.name}</h3>
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
        {images.map((_, index) => (
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

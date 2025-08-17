# Componente de Carrossel UI

Este projeto agora inclui um componente de carrossel moderno e acessível baseado no Embla Carousel.

## Componentes Disponíveis

### Carousel
O componente principal do carrossel que gerencia o estado e a navegação.

### CarouselContent
Container para o conteúdo do carrossel com overflow hidden.

### CarouselItem
Item individual do carrossel (slide).

### CarouselPrevious
Botão de navegação para o slide anterior.

### CarouselNext
Botão de navegação para o próximo slide.

## Como Usar

### Importação Básica
```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui";
```

### Exemplo de Implementação
```tsx
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  plugins={[
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  ]}
>
  <CarouselContent>
    <CarouselItem>
      <div>Conteúdo do slide 1</div>
    </CarouselItem>
    <CarouselItem>
      <div>Conteúdo do slide 2</div>
    </CarouselItem>
  </CarouselContent>
  
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

## Propriedades

### Carousel
- `opts`: Opções do Embla Carousel
- `plugins`: Plugins do Embla Carousel
- `orientation`: "horizontal" | "vertical"
- `setApi`: Callback para receber a API do carrossel

### CarouselContent
- Aceita todas as propriedades padrão de div
- `className`: Classes CSS adicionais

### CarouselItem
- Aceita todas as propriedades padrão de div
- `className`: Classes CSS adicionais

### CarouselPrevious/CarouselNext
- Aceita todas as propriedades do componente Button
- `variant`: Variante do botão (default: "outline")
- `size`: Tamanho do botão (default: "icon")

## Plugins Disponíveis

### Autoplay
```tsx
import Autoplay from 'embla-carousel-autoplay';

<Carousel
  plugins={[
    Autoplay({ 
      delay: 4000, 
      stopOnInteraction: true, 
      stopOnMouseEnter: true 
    })
  ]}
>
```

## Estilização

O componente usa CSS puro com classes CSS personalizadas. As principais classes são:

- `.carousel`: Container principal
- `.carousel-content`: Container do conteúdo
- `.carousel-item`: Item individual
- `.carousel-button`: Botões de navegação
- `.carousel-example-*`: Classes específicas do exemplo

## Acessibilidade

- Suporte completo a navegação por teclado (setas esquerda/direita)
- Atributos ARIA apropriados
- Texto para leitores de tela
- Foco visível nos botões de navegação

## Dependências

- `embla-carousel-react`: Biblioteca principal do carrossel
- `embla-carousel-autoplay`: Plugin de autoplay
- `lucide-react`: Ícones das setas
- `@radix-ui/react-slot`: Para composição de componentes
- `class-variance-authority`: Para variantes de componentes

## Exemplo Completo

Veja o arquivo `src/app/components/carousel-example.tsx` para um exemplo completo de implementação com imagens e overlay.

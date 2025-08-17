import heroStyles from "../styles/Hero.module.css";
import CarouselExample from "./carousel-example";
import Header from "./header";

export default function HeroFelipe() {
  return (
    <section className={heroStyles.page} id="hero">
      <main className={heroStyles.main}>
        <Header />
        <div className={heroStyles.container}>
          {/* Seção da esquerda com texto */}
          <div className={heroStyles.leftSection}>
            <p className={heroStyles.logo}>Olá, me chamo</p>
            <h1 className={heroStyles.title}>Felipe Castro</h1>
            <p className={heroStyles.subtitle}>
              Materializando Ideias em Realidade
            </p>
            <p className={heroStyles.description}>
              Full-Stack Dev, Cursando Engenharia de Software no IDP. Especializado em React, Next.js, TypeScript e tecnologias modernas de desenvolvimento web.
            </p>
          </div>
          
          {/* Seção da direita com carousel UI */}
          <div className={heroStyles.rightSection}>
            <CarouselExample />
          </div>
        </div>
      </main>
    </section>
  );
}
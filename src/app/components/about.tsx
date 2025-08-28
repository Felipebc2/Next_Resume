import aboutStyles from "../styles/about.module.css";
import { BiRightArrow } from 'react-icons/bi';

export default function Home() {
    return (
        <section id="about">
            <div className={aboutStyles.container}>
                <div className={aboutStyles.leftContainer}>
                    <h1 className={aboutStyles.title}>Sobre</h1>
                    <p className={aboutStyles.description}>
                        Sou estudante de Engenharia de Software (5º semestre - <a className={aboutStyles.link} href="https://www.idp.edu.br" target="_blank" rel="noopener noreferrer">IDP</a>) e atualmente atuo como estagiário de Suporte de TI na <a className={aboutStyles.link} href="https://oficina.ci/" target="_blank" rel="noopener noreferrer">Oficina Consultorias</a>. Tenho interesse em <a className={aboutStyles.highlight}>Front-end</a>, <a className={aboutStyles.highlight}>DevOps</a> e <a className={aboutStyles.highlight}>Cyber Segurança</a>.
                    </p>
                    <p className={aboutStyles.description}>
                        Fui selecionado pela minha faculdade para ir ao Vale do Sílicio na Califórnia fazer diversas visitas técnicas e meets privados em diversas big techs, onde lá tive o privilégio de me conectar e conhecer:
                        <br />
                        <a className={aboutStyles.bigTechs}> Apple, Google, Microsoft, Meta, Circuit Launch, Uber, Plug and Play, entre outras.</a>

                    </p>
                    <p className={aboutStyles.description}>
                        Já participei da vitrine de projetos da Demoday para expor meu projeto que desenvolvi durante o Hackathon 5ª edição, onde eu e minha equipe ficamos em 1° lugar com uma solução inovadora chamada Sharebite
                    </p>
                </div>
                <div className={aboutStyles.rightContainer}>

                </div>
            </div>
        </section>
    );
}

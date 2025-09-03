import aboutStyles from "../styles/about.module.css";
import { Dices } from 'lucide-react';

export default function Home() {
    return (
        <section id="about">
            <div className={aboutStyles.container}>
                <div className={aboutStyles.leftContainer}>
                    <h1 className={aboutStyles.title}>Sobre</h1>
                    <div className={aboutStyles.allTextsLeftContainer}>
                    <p className={aboutStyles.description}>
                        Sou estudante de Engenharia de Software (5º semestre - <a className={aboutStyles.link} href="https://www.idp.edu.br" target="_blank" rel="noopener noreferrer">IDP</a>) e atualmente atuo como estagiário de Suporte de TI na <a className={aboutStyles.link} href="https://oficina.ci/" target="_blank" rel="noopener noreferrer">Oficina Consultorias</a>. Tenho interesse em <b>Front-end, DevOps e Cyber Segurança.</b>
                    </p>
                    <p className={aboutStyles.description}>
                        Fui selecionado pela minha faculdade para ir ao <b>Vale do Sílicio</b> pelo <a className={aboutStyles.link} href="https://www.linkedin.com/posts/felipebc2_valedosilaedcio-idpgo-inovaaexaeto-activity-7274985424819830785-VOgT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGwpmoBVXcuzalcbmv46h7K6msGdGJbx7Q" target="_blank" rel="noopener noreferrer">IDP GO</a> fazer diversas visitas técnicas e meets privados em diversas big techs, onde lá tive o privilégio de me conectar e conhecer:
                        <br />
                        <a className={aboutStyles.bigTechs}> Apple, Google, Microsoft, Meta, Circuit Launch, Uber, Plug and Play, entre outras.</a>

                    </p>
                    <p className={aboutStyles.description}>
                        Fui chamado a vitrine de projetos da <a className={aboutStyles.link} href="https://www.linkedin.com/posts/felipebc2_demoday-hackathon-1lugar-activity-7349197149286338560-SDFV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGwpmoBVXcuzalcbmv46h7K6msGdGJbx7Q" target="_blank" rel="noopener noreferrer">Demoday</a> para expor a <a className={aboutStyles.link} href="https://www.linkedin.com/posts/felipebc2_hackathon-1lugar-premiaaexaeto-activity-7328861676613570561-7ZXM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGwpmoBVXcuzalcbmv46h7K6msGdGJbx7Q" target="_blank" rel="noopener noreferrer">Sharebite</a>. Durante o Hackathon 5ª edição, eu e minha equipe ficamos em 1° lugar com essa solução que propomos ao desperdicio de alimento.
                    </p>
                    <p className={aboutStyles.description}>
                        Tenho facilidade em trabalho em equipe, comunicação e liderança, somadas a resolução de problemas, criatividade e adaptabilidade. Busco constantemente aprendizado, explorando novas tecnologias e aplicando soluções inovadoras tanto em projetos acadêmicos quanto profissionais.
                    </p>
                    </div>
                </div>
                <div className={aboutStyles.rightContainer}>
                    <h1 className={aboutStyles.curiosity}>Além do Código</h1>
                    <div className={aboutStyles.hobbyList}>
                        <div className={aboutStyles.hobbyItem}>
                            <p><Dices className={aboutStyles.hobbyIcon} /><a className={aboutStyles.hobbyTitle}>Mestre de RPG de Mesa </a><a className={aboutStyles.hobbyDescription}>há 8 anos, colocando as ideias do papel em ação.</a></p>
                        </div>
                    </div>
                    <div className={aboutStyles.hobbyList}>
                        <div className={aboutStyles.hobbyItem}>
                            <p><Dices className={aboutStyles.hobbyIcon} /><a className={aboutStyles.hobbyTitle}>Jogo Basquete </a><a className={aboutStyles.hobbyDescription}>desde os 13 anos, sendo sempre um armador com visão de jogo.</a></p>
                        </div>
                    </div>
                    <div className={aboutStyles.hobbyList}>
                        <div className={aboutStyles.hobbyItem}>
                            <p><Dices className={aboutStyles.hobbyIcon} /><a className={aboutStyles.hobbyTitle}>Apaixonado por jogos</a><a className={aboutStyles.hobbyDescription}>, favoritos: Dark Souls, BG3, Expedition 33 e Hollow Knight.</a></p>
                        </div>
                    </div>
                    <div className={aboutStyles.hobbyList}>
                        <div className={aboutStyles.hobbyItem}>
                            <p><Dices className={aboutStyles.hobbyIcon} /><a className={aboutStyles.hobbyTitle}>Música: </a><a className={aboutStyles.hobbyDescription}>Recentemente começando a tocar guitarra e violão. Amo Rock e Metal!</a></p>
                        </div>
                    </div>
                    <div className={aboutStyles.hobbyList}>
                        <div className={aboutStyles.hobbyItem}>
                            <p><Dices className={aboutStyles.hobbyIcon} /><a className={aboutStyles.hobbyTitle}>Coleciono Hobbies Aleatórios, </a><a className={aboutStyles.hobbyDescription}>Sempre procurando coisas aleatorias para aprender.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

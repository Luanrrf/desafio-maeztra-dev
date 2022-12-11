import React from "react";
import FooterIcon from "./FooterIcon/FooterIcon.tsx";
import './footer.scss';

import FacebookIcon from '../../assets/facebook-icon.png';
import LinkedinIcon from '../../assets/linkedin-icon.png';
import InstagramIcon from '../../assets/instagram-icon.png';
import YoutubeIcon from '../../assets/youtube-icon.png';

import VisaIcon from '../../assets/visa-icon.png';
import MastercardIcon from '../../assets/mastercard-icon.png';

import VtexIcon from '../../assets/vtex-icon.png';
import MaeztraIcon from '../../assets/maeztra-icon.png';

import Accordion from "../Accordion/Accordion.tsx";

const Footer = () => {
    return (
        <footer>
            <section className="firstRow desktop">
                <div className="firstColumn">
                    <h3>Informações</h3>
                    <a href="/quem-somos">Quem Somos</a>
                    <a href="/prazo-de-envio">Prazo de Envio</a>
                    <a href="/trocas-e-devolucoes">Trocas e Devoluções</a>
                    <a href="/promocoes-e-cupons">Promoções e Cupons</a>
                </div>

                <div className="secondColumn">
                    <h3>Minha Conta</h3>
                    <a href="/minha-conta">Minha Conta</a>
                    <a href="/meus-pedidos">Meus Pedidos</a>
                    <a href="/cadastre-se">Cadastre-se</a>
                </div>

                <div className="thirdColumn">
                    <h3>Onde nos Encontrar</h3>
                    <a href="/lojas">Lojas</a>
                    <a href="/endereco">Endereço</a>
                </div>

            </section>

            <section className="firstRow mobile">
                
                <div className="firstColumn">
                    <Accordion title="Informações" children={
                        [
                        'Quem Somos', 
                        'Prazo de Envio', 
                        'Trocas e Devoluções', 
                        'Promoções e Cupons'
                        ]
                    } />
                </div>

                <div className="secondColumn">
                    <Accordion title="Minha Conta" children={
                        [
                        'Minha Conta', 
                        'Meus Pedidos', 
                        'Cadastre-se'
                        ]
                    } />
                </div>

                <div className="thirdColumn">
                    <Accordion title="Onde nos Encontrar" children={
                        [
                        'Lojas', 
                        'Endereço'
                        ]
                    } />
                </div>

            </section>

            <section className="secondRow">
                <div className="secondContainer mwPage">

                    <div className="firstColumn">
                        <FooterIcon src={FacebookIcon} />
                        <FooterIcon src={LinkedinIcon} />
                        <FooterIcon src={InstagramIcon} />
                        <FooterIcon src={YoutubeIcon} />
                    </div>

                    <div className="secondColumn">
                        <FooterIcon src={VisaIcon} />
                        <FooterIcon src={MastercardIcon} />
                        <FooterIcon src={VisaIcon} />
                        <FooterIcon src={MastercardIcon} />
                    </div>

                    <div className="thirdColumn">
                        <FooterIcon src={VtexIcon} text="Powered by" />
                        <FooterIcon src={MaeztraIcon} text="Developed by" />
                    </div>

                </div>
            </section>
        </footer>
    )
}

export default Footer;
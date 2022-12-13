import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ImgModal from '../../assets/modal-img.png';
import ImgMail from '../../assets/modal-email.png';
import ImgSend from '../../assets/modal-send.png';
import './modal.scss';

const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    showModal
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "auto" 
  }, [showModal]);

  return ReactDOM.createPortal(
    <>
      {showModal === true ? (
        <section className="overlayContainer">
          <div className="overlay" onClick={()=>setShowModal(!showModal)}/>
          <div className="modalContainer">
            <button className="closeIcon" onClick={()=>setShowModal(!showModal)}>FECHAR</button>
            <div className="firstColumn desktop">
              <img src={ImgModal} alt="" />
            </div>
            <div className="secondColumn">
              <img src={ImgMail} alt="" />
              <h3 className="welcomeTitle">Bem Vindo à MAEZTRA</h3>
              <p className="welcomeSubtitle">
                Receba em Primeira mão
                <span className="welcomeSubtitleBlock">desconto e ofertas exclusivas</span>
              </p>
              <input type="text" placeholder="Digite seu e-mail" className="welcomeInput" />
              <button className="normalButton modalButton">ENVIAR <img src={ImgSend} alt="" /></button>
            </div>

          </div>
        </section>
        ) : null}
    </>,
    document.getElementById('modal') as HTMLElement,
  );
}

export default Modal;

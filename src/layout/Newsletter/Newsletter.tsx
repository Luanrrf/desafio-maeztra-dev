import React from "react";
import './newsletter.scss';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="mwPage newsletterContainer">
                <h3>Recebe Nossa Newsletter</h3>
                <div className="newsletterSender">

                    <input
                        type="text"
                        id="newsletter"
                        placeholder="Digite seu e-mail"
                        name="newsletter" className="newsletterInput"
                    />

                    <button type="submit" className="newsletterButton normalButton">Enviar</button>

                </div>
            </div>
        </section>
    )
}

export default Newsletter;
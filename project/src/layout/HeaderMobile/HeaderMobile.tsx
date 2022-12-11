import React from "react";
import "./headerMobile.scss";
import Logo from '../../assets/logo-maeztra-mobile.png'
import IconSearch from '../../assets/icon-search.png'
import IconShoppingBag from '../../assets/icon-shoppingbag-mobile.png'
// import SearchBar from "../Header/SearchBar/SearchBar.tsx";
import MenuItem from "../Header/MenuItems/MenuItem.tsx";
import MenuHamburguer from "./MenuHamburguer/MenuHamburguer.tsx";

const HeaderMobile = () => {
    return ( 
        <header className="mobile">
            <section className="firstRow">
                <p>
                    Acompanhe as melhores promoções disponíveis aqui na Maeztra.
                </p>
            </section>

            <section className="secondRow">
                <section className="secondRowContainer">
                    <MenuHamburguer/>

                    <div className="logo-container">
                        <a href="/">
                            <img src={Logo} alt="Logo Maeztra" />
                        </a>
                    </div>

                    <MenuItem item="" src={IconSearch} />
                    <MenuItem item="" src={IconShoppingBag} />
                </section>                
            </section>
        </header>
    )
}

export default HeaderMobile;
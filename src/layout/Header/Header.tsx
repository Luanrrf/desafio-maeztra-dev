import React from "react";
import "./header.scss";
import Logo from '../../assets/logo-maeztra.png'
import IconUser from '../../assets/icon-user.png'
import IconHeart from '../../assets/icon-heart.png'
import IconShoppingBag from '../../assets/icon-shoppingbag.png'
import IconDress from '../../assets/icon-dress.png'
import SearchBar from "./SearchBar/SearchBar.tsx";
import MenuItem from "./MenuItems/MenuItem.tsx";

const Header = () => {
    return ( 
        <header className="desktop">
            <section className="firstRow">
                <p>
                    Acompanhe as melhores promoções disponíveis aqui na Maeztra.
                </p>
            </section>

            <section className="secondRow">
                <section className="secondRowContainer">
                    <div className="logo-container">
                        <a href="/">
                            <img src={Logo} alt="Logo Maeztra" />
                        </a>
                    </div>

                    <SearchBar />

                    <div className="account-container">
                        <MenuItem item="Minha Conta" src={IconUser}/>
                        <MenuItem item="Minha Conta" src={IconHeart}/>
                        <MenuItem item="Meu Carrinho" src={IconShoppingBag}/>
                    </div>
                </section>                
            </section>

            <section className="thirdRow">
                <MenuItem item="Novidades" src={IconDress}/>
                <MenuItem item="Vestidos" src=""/>
                <MenuItem item="Roupas" src=""/>
                <MenuItem item="Sapatos" src=""/>
                <MenuItem item="Lingerie" src=""/>
                <MenuItem item="Acessórios" src=""/>
                <MenuItem item="OUTLET" src=""/>

            </section>
        </header>
    )
}

export default Header;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/patterns.scss';
import './styles/reset.scss';

import BrandShelf from './layout/BrandShelf/BrandShelf.tsx';
import Header from './layout/Header/Header.tsx';
import ContentSection from './layout/ContentSection/ContentSection.tsx';
import Carousel from './layout/Carousel/Carousel.tsx';
import Shelf from './layout/Shelf/Shelf.tsx';
import Newsletter from './layout/Newsletter/Newsletter.tsx';
import Footer from './layout/Footer/Footer.tsx';
import HeaderMobile from './layout/HeaderMobile/HeaderMobile.tsx';
import Modal from './layout/Modal/Modal.tsx';


//Imgs da 1º Sequência de Banners
import Img1Shelf1 from './assets/shelf1-img1.png';
import Img2Shelf1 from './assets/shelf1-img2.png';
import Img3Shelf1 from './assets/shelf1-img3.png';
import Img4Shelf1 from './assets/shelf1-img4.png';
import Img5Shelf1 from './assets/shelf1-img5.png';

//Imgs da 2º Sequência de Banners
import Img1Shelf2 from './assets/shelf2-img1.png';
import Img2Shelf2 from './assets/shelf2-img2.png';
import Img3Shelf2 from './assets/shelf2-img3.png';
import Img4Shelf2 from './assets/shelf2-img4.png';
import Img5Shelf2 from './assets/shelf2-img5.png';

//Imgs da Shelf de Produtos
import Product01 from './assets/product-01.png';
import Product02 from './assets/product-02.png';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Modal/>

    {/* Fazer uma classe  para englobar a maioria dos códigos já com a margem pensada*/}

    <Header/>
    <HeaderMobile/>
    
    <Carousel/>

    <BrandShelf title="Por que comprar na Maeztra?" cards={
      [
        {
          subtitle:"Produtos importados", img:Img1Shelf1, coment:"Produto de Alta Qualidade"
        },
        {
          subtitle:"Estoque no Brazil", img:Img2Shelf1, coment:"Produtos mais perto de você!"
        },
        {
          subtitle:"Trocas Garantidas", img:Img3Shelf1, coment:"Trocas em até 48 horas, vejas as regras"
        },
        {
          subtitle:"Ganhe 5% off", img:Img4Shelf1, coment:"Pagando à vista no Cartão"
        },
        {
          subtitle:"Frete Grátis", img:Img5Shelf1, coment:"Em compras acima de R$ 499,00"
        }
      ]
    }/>

    <BrandShelf title="Marcas Parceiras" cards={
      [
        {
          img:Img1Shelf2
        },
        {
          img:Img2Shelf2
        },
        {
          img:Img3Shelf2
        },
        {
          img:Img4Shelf2
        },
        {
          img:Img5Shelf2
        }
      ]
    }/>

    <Shelf title="As Mais Pedidas" products={
      [
        {
          img: Product01,
          colors: [
            'yellow', 'red', 'blue', 'darkblue'
          ],
          price: 'R$ 500,00',
          name: 'Faux Suede Mini Skirt',
          description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.'
        },
        {
          img: Product02,
          colors: [
            'black3', 'red2', 'beige', 'gray2'
          ],
          price: 'R$ 320,00',
          name: 'Ruched Rose Print Mini Skirt',
          description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.'
        },
        {
          img: Product01,
          colors: [
            'yellow', 'red', 'blue', 'darkblue'
          ],
          price: 'R$ 500,00',
          name: 'Faux Suede Mini Skirt',
          description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.'
        },
        {
          img: Product02,
          colors: [
            'black3', 'red2', 'beige', 'gray2'
          ],
          price: 'R$ 320,00',
          name: 'Ruched Rose Print Mini Skirt',
          description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.'
        },
        {
          img: Product01,
          colors: [
            'yellow', 'red', 'blue', 'darkblue'
          ],
          price: 'R$ 500,00',
          name: 'Faux Suede Mini Skirt',
          description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.'
        }
      ]
    }/>    

    <ContentSection/>

    <Newsletter/>
    <Footer/>

  </React.StrictMode>
);

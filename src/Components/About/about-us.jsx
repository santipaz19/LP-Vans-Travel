import React from 'react';
import style from './about.module.css'
import carrusel1 from '../../img/carrusel1.jpg'
import carrusel2 from '../../img/carrusel2.jpg'
import carrusel3 from '../../img/carrusel3.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Us() {
    const options = {
        autoPlay: true,
        infiniteLoop: true,
        showStatus: false,
        showIndicators: false,
        showThumbs: false,
        interval: '1500',
        showArrows: false
    };
    return (
        <div>
            {/* <div className={style.contenedor}>
                <h1 className={style.contacts}>Nosotros</h1>
            </div> */}
            {/* <img className={style.img} src={combi} alt='' /> */}
            <div className={style.about}>
                <div className={style.cont}>
                    <Carousel {...options}>
                        <div>
                            <img src={carrusel1} alt="imagen" className={style.img} />
                        </div>
                        <div>
                            <img src={carrusel2} alt="imagen" className={style.img} />
                        </div>
                        <div>
                            <img src={carrusel3} alt="imagen" className={style.img} />
                        </div>
                    </Carousel>
                    <div className={style.overlayContainer}>
                        <div className={style.overlay}>
                            <h2 className={style.text}>LP Vans Travel</h2>
                        </div>
                    </div>

                </div>
                <div className={style.continfo} >
                    <h4 className={style.info}>
                        Desde el año 2000, en LP Vans Travel nos enorgullece brindar servicios exclusivos de traslado de pasajeros. Contamos con camionetas de 15 y 19 asientos, todas habilitadas por la Comisión Nacional de Regulación del Transporte, para que disfrutes de viajes seguros y comodos.
                    </h4>
                    <h4 className={style.info}>
                        Actualmente, brindamos servicios para cubrir distintas necesidades de transporte. Ya sea para eventos especiales, viajes corporativos, mini turismo por Argentina o servicios personalizados para empresas y particulares, estamos aquí para ayudarte.
                    </h4>
                    <h4 className={style.info}>
                        En LP Vans Travel valoramos la confianza que depositas en nosotros. Nuestro objetivo es brindarte un servicio de alta calidad y adaptado a tus necesidades.
                    </h4>
                    <h4 className={style.info}>
                        Únete a nuestra familia en LP Vans Travel, donde nos esforzamos por superar tus expectativas en cada viaje. ¡Te invitamos a disfrutar de la comodidad y seguridad que ofrecemos en nuestros traslados!

                    </h4>
                </div>
            </div>
        </div >)
}
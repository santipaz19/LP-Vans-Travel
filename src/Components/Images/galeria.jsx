import style from './galeria.module.css'
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'
import viaje from '../../img/viajes.jpg'
import viaje1 from '../../img/viajes1.jpg'
import viaje2 from '../../img/viajes2.jpg'
import viaje3 from '../../img/viajes3.jpg'

// import axios from 'axios'
// import React, { useEffect, useState } from 'react';

export default function Gallery() {


    return (
        <div>
            <div className={style.contenedor}>
                <h1 className={style.galery}><div >GALERIA</div></h1>
                <h3 className={style.subTittle}>Algunas fotos de nuestros viajes</h3>
            </div>
            <div className={style.contPhoto}>
                <div className={style.photo}>
                    <img className={style.image} src={img1} alt="" />
                    <img className={style.image} src={viaje2} alt="" />
                </div>
                <div className={style.photo}>
                    <img className={style.image} src={viaje} alt="" />
                    <img className={style.image} src={viaje3} alt="" />
                    <img className={style.image} src={viaje1} alt="" />
                </div>
                <div className={style.photo}>
                    <img className={style.image} src={img2} alt="" />
                    <img className={style.image} src={img3} alt="" />
                </div>
            </div>
        </div >)
}  
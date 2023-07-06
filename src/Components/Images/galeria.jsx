import style from './galeria.module.css'
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'

// import axios from 'axios'
// import React, { useEffect, useState } from 'react';

export default function Gallery() {


    return (
        <div
        >
            <div className={style.contenedor}>
                <h1 className={style.galery}><div >GALERIA</div></h1>
                <h3>Algunas fotos de nuestros viajes</h3>
            </div>
            <div className={style.contPhoto}>
                <div className={style.photo}>
                    <img className={style.image} src={img1} alt="" />
                    <img className={style.image} src={img2} alt="" />
                    <img className={style.image} src={img3} alt="" />
                </div>
            </div>
        </div >)
}  
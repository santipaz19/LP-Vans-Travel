import style from './subnav.module.css'
import { Link } from 'react-router-dom'
import wpp from '../../img/wppcolor.png'
import ig from '../../img/igcolor.png'
import logo from '../../img/vansedit.png'

export default function SubNav() {
    return (
        <div>
            <div className={style.allCont}>
                <div className={style.contenedor}>
                    <img src={logo} alt='LP Vans Travel' className={style.logo} />
                    <div className={style.column}>
                        <Link to={'https://wa.link/9z2lyw'} target="_blank" className={style.links}>
                            <img className={style.logos} src={wpp} alt="whatsapp" />
                            <span>Escribinos</span>
                        </Link>
                        <Link to={'https://www.instagram.com/trasladoslpvans/'} target="_blank" className={style.links}>
                            <img className={style.logos} src={ig} alt="instagram" />
                            <span>Seguinos en Instagram</span>
                        </Link>
                    </div>
                    <div className={style.column2}>
                        <h3>mas informacion</h3>
                    </div>
                </div>
                <div className={style.copyCont}>
                    <h5 className={style.copy}>Copyright © 2023 LP Vans Travel | Todos los derechos reservados.</h5>
                </div>
            </div>
        </div >)
}
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
                            <h4 className={style.text}>Escribinos</h4>
                        </Link>
                        <Link to={'https://www.instagram.com/trasladoslpvans/'} target="_blank" className={style.links}>
                            <img className={style.logos} src={ig} alt="instagram" />
                            <h4 className={style.text}>Seguinos en Instagram</h4>
                        </Link>
                    </div>
                    <div className={style.column2}>
                        <h3 className={style.text}>Horario de atencion:</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Lunes:</td>
                                    <td>8:00 a 21:00</td>
                                </tr>
                                <tr>
                                    <td>Martes:</td>
                                    <td>8:00 a 21:00</td>
                                </tr>
                                <tr>
                                    <td>Miercoles:</td>
                                    <td>8:00 a 21:00</td>
                                </tr>
                                <tr>
                                    <td>Jueves:</td>
                                    <td>8:00 a 21:00</td>
                                </tr>
                                <tr>
                                    <td>Viernes:</td>
                                    <td>8:00 a 21:00</td>
                                </tr>
                                <tr>
                                    <td>Sabado:</td>
                                    <td>8:00 a 21:00</td>
                                </tr>
                                <tr>
                                    <td>Domingo:</td>
                                    <td>8:00 a 21:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={style.copyCont}>
                    <h5 className={style.copy}>Copyright © 2023 LP Vans Travel | Todos los derechos reservados.</h5>
                </div>
            </div>
        </div >)
}
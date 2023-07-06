import { Link, NavLink } from "react-router-dom"
import style from './navbar.module.css'
import logo from '../../img/vanstravel.png'


export default function Nav() {
    return (
        <div className={style.items}>
            <img className={style.logo} src={logo} alt="logo" />
            <div className={style.links}>
                <NavLink to={'/'}>
                    <p>Inicio</p>
                </NavLink>
                <Link to={'/nosotros'}>
                    <p>Nosotros</p>
                </Link>
                <Link to={'/galeria'}>
                    <p>Galeria</p>
                </Link>
                <Link to={'/contacto'}>
                    <p>Contactanos</p>
                </Link>
            </div>
        </div>)
}
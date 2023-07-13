import { Link, NavLink } from "react-router-dom"
import style from './navbar.module.css'
import logo from '../../img/vanstravel.png'
import { Fade } from "react-awesome-reveal";

export default function Nav() {
    return (
        <Fade cascade duration='1000' triggerOnce='false' >
            <div className={style.items}>
                <img className={style.logo} src={logo} alt="logo" />
                <div className={style.links}>
                    <Fade cascade damping={0.2} triggerOnce='false' duration='1500' >
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
                    </Fade>
                </div>
            </div>
        </Fade >
    )
}
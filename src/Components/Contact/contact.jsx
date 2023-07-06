import style from './contact.module.css'
import mail from '../../img/logomail.png'
import wpp from '../../img/wpplogo.png'
import { Link } from 'react-router-dom'

export default function Contact() {
    const email = 'lpvanstravel@gmail.com'
    const subject = 'Presupuesto'
    return (
        <div>
            <div className={style.contenedor}>
                <h1 className={style.galery}>CONTACTO</h1>
            </div>
            <div className={style.contact}>
                <a href={`mailto:${email}`} title={`subject=${encodeURIComponent(subject)}`} className={style.links}>
                    <img className={style.logos} src={mail} alt="mail" />
                    <h3 className={style.text}>LPVANSTRAVEL@GMAIL.COM</h3>
                </a>
                <Link to={'https://wa.link/9z2lyw'} target="_blank" className={style.links}>
                    <img className={style.logos} src={wpp} alt="whatsapp" />
                    <h3 className={style.text}>+54 221-538-3210</h3>
                </Link>
            </div>
            <div>
                <form className={style.form}>
                    <div >
                        <label>Nombre: </label>
                        <input className={style.input} type="text" name="nombre" />
                    </div>
                    <div>
                        <label>Telefono: </label>
                        <input className={style.input} type="number" name="telefono" />
                    </div>
                    <div>
                        <label>Asunto: </label>
                        <input className={style.input} type="text" name="asunto" />
                    </div>
                    <div>
                        <label>Mensaje: </label>
                        <textarea className={style.input} name="nombre" />
                    </div>
                </form>
            </div>
        </div >)
}
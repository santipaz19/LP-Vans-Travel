import style from './prenav.module.css'
import wpp from '../../img/wpp.png'
import mail from '../../img/mail.png'
import ig from '../../img/instagram.png'
import { Link } from 'react-router-dom'

export default function PreNav() {
    const email = 'lpvanstravel@gmail.com'
    const subject = 'Presupuesto'
    return (
        <div className={style.items}>
            <a href={`mailto:${email}`} title={`subject=${encodeURIComponent(subject)}`} className={style.links}>
                <img className={style.logos} src={mail} alt="mail" />
                <span className={style.text}>LPVANSTRAVEL@GMAIL.COM</span>
            </a>
            <Link to={'https://wa.link/9z2lyw'} target="_blank" className={style.links}>
                <img className={style.logos} src={wpp} alt="whatsapp" />
                <span className={style.text} >+54 221-538-3210</span>
            </Link>
            <Link to={'https://www.instagram.com/trasladoslpvans/'} target="_blank" className={style.links}>
                <img className={style.logos} src={ig} alt="instagram" />
                <span className={style.text} >TRASLADOSLPVANS</span>
            </Link>
        </div>)
}
import style from './contact.module.css'
import mail from '../../img/logomail.png'
import wpp from '../../img/wpplogo.png'
import { Link } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const email = 'lpvanstravel@gmail.com'
    const subject = 'Presupuesto'
    const [state, handleSubmit] = useForm("mzblbzlk");

    return (
        <div>
            <div className={style.contenedor}>
                <h1 className={style.contacts}>CONTACTO</h1>
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
            {state.succeeded ? (<div className={style.thk}><h4 >Gracias por comunicarte con nosotros!</h4></div>) : (
                <div className={style.form}>
                    <form onSubmit={handleSubmit}>
                        <div >
                            <label>Nombre </label>
                            <input className={style.input} placeholder='Ingrese su nombre' required="" type="text" name="nombre" />
                        </div>
                        <div>
                            <label>Telefono </label>
                            <input className={style.input} placeholder='Ingrese su telefono' required="" type="number" name="telefono" />
                        </div>
                        <div>
                            <label>Asunto </label>
                            <input className={style.input} placeholder='Ingrese el asunto' required="" type="text" name="asunto" />
                        </div>
                        <div>
                            <label>¿Como podemos ayudarte? </label>
                            <textarea className={style.input} placeholder='Ingrese el mensaje' required="" name="message" />
                        </div>
                        <button className={style.btn} disabled={state.submitting}>Enviar</button>
                    </form>
                </div>
            )}
        </div >
    )
}

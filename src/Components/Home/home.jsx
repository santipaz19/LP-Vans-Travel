import sprinter from '../../img/sprinter.png'
import reno from '../../img/reno.png'
import style from './home.module.css'

export default function Home() {
    return (
        <div>
            <div className={style.contenedor}>
                <h1 className={style.texto}>Hola</h1>
            </div>
            <h2 className={style.subTittle}>Nuestras unidades</h2>
            <div className={style.vans}>
                <img src={sprinter} alt='camioneta' className={style.img} />
                <img src={reno} alt='camioneta' className={style.img} />
            </div>
        </div >)
}
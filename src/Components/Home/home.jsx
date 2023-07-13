import sprinter from '../../img/sprinter.png'
import reno from '../../img/reno.png'
import style from './home.module.css'

export default function Home() {
    return (
        <div>
            <div className={style.contenedor}>
                <h1 className={style.texto}></h1>
            </div>
            <h2 className={style.subTittle}>Nuestras unidades</h2>
            <div className={style.vans}>
                <img src={sprinter} alt='camioneta' className={style.img} />
                <img src={reno} alt='camioneta' className={style.img} />
            </div>
            <div className={style.vans}>
                {/* <h4>"Mercedes Benz 516 19+1, diseñada para brindar comodidad y seguridad a nuestros clientes. Con capacidad para hasta 19 personas. Descubre la combinación ideal de estilo, espacio y confiabilidad en nuestros vehículos."</h4> */}

            </div>
        </div >)
}
import sprinter from '../../img/sprinter.png'
import reno from '../../img/reno.png'
import style from './home.module.css'
import { Divider } from '@chakra-ui/react'

export default function Home() {
    return (
        <div>
            <Divider orientation='horizontal' size='40' />

            <div className={style.contenedor}>
                <h1 className={style.texto}></h1>
            </div>
            <h2 className={style.subTittle}>Nuestras unidades</h2>
            <div className={style.vans}>
                <div className={style.column}>
                    <img src={sprinter} alt='camioneta' className={style.img} />
                    <div className={style.text}>
                        <h4>
                            Mercedes Benz 516 19+1, diseñada para brindar comodidad y seguridad a nuestros clientes. Con capacidad para hasta 19 personas. Descubre la combinación ideal de estilo, espacio y confiabilidad en nuestros vehículos.
                        </h4>
                    </div>
                </div>
                <div className={style.column}>
                    <img src={reno} alt='camioneta' className={style.img} />
                    <div className={style.text}>
                        <h4>
                            La Renault Master de 15 pasajeros, con sus características premium y diseño excepcional, te ofrece una experiencia de viaje inigualable. Descubre la comodidad, seguridad y versatilidad que esta camioneta brinda en cada trayecto.
                        </h4>
                    </div>
                </div>
            </div>

        </div >)
}
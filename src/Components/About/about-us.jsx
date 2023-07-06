import style from './about.module.css'
import combi from '../../img/camio.jpg'
export default function Us() {
    return (
        <div>
            <div className={style.contenedor}>
                <img className={style.img} src={combi} alt='' />
            </div>
        </div >)
}
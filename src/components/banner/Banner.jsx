import { Link } from 'react-router-dom';
import style from './banner.module.css';
const Banner =()=>{
    return(
        <div className={style.banner_section}>
        <div className={style.banner}>
            <Link exact to={'/form'}>
            <button className={style.banner_btn}>
            Оставить заявку
            </button>
            </Link>
        </div>
    </div>
    )
}
export default Banner
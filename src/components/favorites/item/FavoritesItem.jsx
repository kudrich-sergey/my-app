import style from './favoritesItem.module.css';
import React from 'react';

const FavoritesItem = (props) => {

    const [added, setAdded ] = React.useState(false);

    const onClickAdd =()=>{
        setAdded(!added);
        let id = props.id 
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img
        props.onPlus({title, description, price, img, id});
    }

    const onDelete =()=>{
        props.onDeleteFav(props.id)
    }

    return (
        <div className={style.cart_item}>
            <button 
            className={style.fav_btn_add} 
            onClick={onDelete}>
                X
            </button>

            <img className={style.cart_img} src={props.img}></img>
            <p className={style.cart_title}>{props.title} </p>
            <p className={style.price}>Цена:</p>
            <div className={style.cart_price}>
                <span className={style.sum_price}>{props.price}</span>
                <button className={  style.add_cart} 
                onClick={onClickAdd} > { added ?  
                <img width={13}
                 src={ added ? '/img/icon.png':'' }
                 alt=""/>:'Оставить заявку' }
               
                </button>
            </div>
        </div>
    )
}
export default FavoritesItem
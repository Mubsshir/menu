import React from "react";
import styles from './Item.module.css'
import menu from './data';
const Item = () => {
    const { title, price, img, desc } = menu[6];
    return (
        <article className={styles.Item}>
            <img src={img} alt="" />
            <div className={styles.info}>
                <div className={styles.heading}>
                    <h3>{title}</h3>
                    <h3 className={styles.price}>$ {price}</h3>
                </div>
                <p>{desc}</p>
            </div>
        </article>
    );
};

export default Item;

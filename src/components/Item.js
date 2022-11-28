import React from "react";
import styles from './Item.module.css'
const Item = (props) => {
    return (
        <article className={styles.Item}>
            <img src={props.img} alt="" />
            <div className={styles.info}>
                <div className={styles.heading}>
                    <h3>{props.title}</h3>
                    <h3 className={styles.price}>$ {props.price}</h3>
                </div>
                <p>{props.desc}</p>
            </div>
        </article>
    );
};
export default Item;

import Item from "./Item";
import styles from './MenuCard.module.css';
import menu from './data';
import { useState } from "react";
const MenuCard = () => {
    const [items, setItems] = useState(menu);
    const changeCategory = (cat) => {
        if (cat === "All") {
            setItems(menu);
            return;
        }
        let newItems = menu.filter(item => item.category === cat);
        setItems(newItems);
    }
    return (
        <main className={styles.MenuCard}>
            <h3 className={styles.heading}>Our Menus</h3>
            <nav>
                <ul>
                    {["All", ...new Set(menu.map((item) => item.category))].map((cat, index) => <li onClick={() => { changeCategory(cat) }} key={index}>{cat}</li>)}
                </ul>
            </nav>
            <section className={styles.itemContainer}>
                {items.map(item => <Item key={item.id} img={item.img} title={item.title} price={item.price} desc={item.desc} />)}
            </section>
        </main>
    )
}

export default MenuCard
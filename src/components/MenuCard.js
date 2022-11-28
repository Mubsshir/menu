import Item from "./Item";
import styles from './MenuCard.module.css';
const MenuCard = () => {
    return (
        <main className={styles.MenuCard}>
            <h3 className={styles.heading}>Our Menus</h3>
            <nav>
                <ul>
                    <li>All</li>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Shakes</li>
                </ul>
            </nav>
            <section className={styles.itemContainer}>
                <Item />
                <Item />
            </section>
        </main>
    )
}

export default MenuCard
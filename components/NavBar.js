import Link from "next/link"
import styles from '../src/styles/NavBar.module.css'
export default function NavBar() {
    return (
        <ul className={styles.navbar}>
            <li>
                <Link href="/"><>Home</></Link>
            </li>
            <li>
                <Link href="/products"><>Produtos</></Link>
            </li>
            <li>
                <Link href="/about"><>Sobre</></Link>
            </li>
            <li>
                <Link href="/sales"><>Sales</></Link>
            </li>
            <li>
                <Link href="/todos"><>Todos</></Link>
            </li>
        </ul>
    )
}

import Link from "next/link"

export default function NavBar(){
    return  (
        <ul>
            <li>
                <Link href="/products"><>Produtos</></Link>
            </li>
            <li>
                <Link href="/about"><>Sobre</></Link>
            </li>
        </ul>
    )
}

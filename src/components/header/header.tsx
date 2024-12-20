import styles from "@/components/header/header.module.css"
import Link from "next/link"

export default function Header(){
    return(
        <header className={styles.header}>
            <nav className={styles.container}>
                <ul className={styles.nav_links}>
                    <li>
                        <Link href="#skills" className={styles.links}>Skills</Link>
                    </li>
                    <li>
                        <Link href="#projetos" className={styles.links}>Projetos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
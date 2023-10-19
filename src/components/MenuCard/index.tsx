import Link from 'next/link'
import Image from 'next/image'
import styles from '../../app/page.module.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] });

export const MenuCard = (): JSX.Element => {
  return (
    <div className={styles.menu_card} style={openSans.style}>
      <ul>
        <Link href="https://github.com/RicardoRien" className={styles.menu_card__active}>
          <li>todos</li>
        </Link>
        <Link href="https://github.com/RicardoRien">
          <li>productos</li>
        </Link>
        <Link href="https://github.com/RicardoRien">
          <li>recetas</li>
        </Link>
        <Link href="https://github.com/RicardoRien">
          <li>consejos</li>
        </Link>
      </ul>

      <div className={styles.golden_arrow_container}>
        <Image
          src="/arrow_golden.svg"
          alt="Golden Arrow Icon"
          width={100}
          height={14}
          priority
        />
      </div>
    </div>
  )
}

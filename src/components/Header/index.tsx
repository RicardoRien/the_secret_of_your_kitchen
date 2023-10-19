import styles from '../../app/page.module.css'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'] });

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <h1 style={caveat.style}>El secreto de tu cocina</h1>
      </div>
    </header>
  )
}

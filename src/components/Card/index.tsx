import styles from '../../app/page.module.css'
import Image from 'next/image';
import { Open_Sans } from 'next/font/google'
const openSans = Open_Sans({ subsets: ['latin'] });

interface Props {
  image: string;
  title: string;
  content: string;
}

export const Card = ({ image, title, content }: Props): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          alt="image"
          unoptimized
          style={{
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            width: '100%', height: 'auto',
          }}
        />
      </div>
      <div className={styles.card__text_container}>
        <p className={styles.card__title} style={openSans.style}>
          {title}
        </p>
        <p className={styles.card__content}>
          {content}
        </p>
      </div>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/logo.png'

import styles from './styles.module.scss'

export default function Header() {
  return (
    <div id={styles.container}>
      <div id={styles.logo_container}>
        <Link href='/' alt={'Logotipo da instituição'}>
          <a>
            <Image src={logo} alt={'Logotipo da instituição'} />
          </a>
        </Link>
      </div>
      <nav id={styles.navbar}>
        <Link href='sobre'>
          <a>Quem somos</a>
        </Link>
        <Link href='transparencia'>
          <a>Transparência</a>
        </Link>
        <Link href='apoie'>
          <a>Apoie</a>
        </Link>
      </nav>
    </div>
  )
}

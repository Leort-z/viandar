import Link from 'next/link'

import { FaFacebook, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'

import styles from './styles.module.scss'

export default function Footer() {
  return (
    <>
      <footer id={styles.container}>
        <section>
          <h4>Informações de contato:</h4>
          <p>
            <b>Whatsapp:</b> (51) 9 9207-9694
          </p>
          <p>
            <b>E-mail:</b> email@email.com
          </p>
        </section>

        <section>
          <nav>
            <Link href='/about'>
              <a>Quem somos</a>
            </Link>
            <Link href='/transparencia'>
              <a>Transparência</a>
            </Link>
            <Link href='doacao'>
              <a>Apoie</a>
            </Link>
          </nav>
        </section>

        <section>
          <a target='_blank'>
            <FaFacebook size='6rem'></FaFacebook>
          </a>
          <a href='https://www.instagram.com/grupoviandar/' target='_blank'>
            <FaInstagram size='6rem'></FaInstagram>
          </a>
        </section>

        <section>
          <Link href=''>
            <a>
              <img src='icon.png' />
            </a>
          </Link>
        </section>
      </footer>
      <pre id={styles.developedBy}>
        Desenvolvido por Leonardo Teixeira!
        <a href='https://github.com/leort-z' target='_blank'>
          <FaGithub size='1rem' />
        </a>
        <a href='https://www.linkedin.com/in/leortz/' target='_blank'>
          <FaLinkedinIn size='1rem' />
        </a>
      </pre>
    </>
  )
}

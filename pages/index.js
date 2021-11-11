import Head from 'next/head'
import Link from 'next/link'

import Button from '../components/Button'

import styles from './styles.module.scss'

function TransparencyElement({ img, title, number }) {
  return (
    <div className={styles.transparencyElement}>
      <img src={img}></img>
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  )
}

const transparency = [
  {
    img: '/transparency/marmitas.png',
    title: 'VENDAS DISTRIBUÍDAS',
    number: 12055,
  },
  {
    img: '/transparency/familias.png',
    title: 'FAMÍLIAS BENEFICIADAS',
    number: 1263,
  },
  {
    img: '/transparency/receita.png',
    title: 'RECEITA',
    number: 'R$ 585',
  },
  {
    img: '/transparency/despesas.png',
    title: 'DESPESAS',
    number: 'R$ 1256',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Viandar - Ação Solidária Adventista</title>
      </Head>

      <main>
        <section id={styles.meetTheProject_CTA}>
          <p>Doação é amor em dobro: preenche o coração de quem dá e de quem recebe</p>
          <Link href='/sobre'>
            <a>
              <Button>conheça o projeto</Button>
            </a>
          </Link>
        </section>

        <div id={styles.secondSectionContainer}>
          <section id={styles.transparency_section}>
            <h2>Transparência</h2>
            <div id={styles.transparencyElementsContainer}>
              {transparency.map((item, index) => {
                return <TransparencyElement img={item.img} title={item.title} number={item.number} />
              })}
            </div>
            <Link href='/transparencia'>
              <a>
                <Button>ver mais</Button>
              </a>
            </Link>
          </section>
          <section id={styles.donation_CTA}>
            <h2>Doe amor e colherás felicidade!</h2>
            <Link href='/doacao'>
              <a>
                <Button>faça sua doação</Button>
              </a>
            </Link>
          </section>
        </div>
        <section id={styles.partners}>
          <a href='https://loja.kaolporfirio.com.br/' target='_blank'>
            <img src={'kaol.png'} alt={'Logotipo do parceiro - Kaol Porfirio '} />
          </a>
          <a href='https://www.agenciagross.com.br/' target='_blank'>
            <img src={'gross.png'} alt={'Logotipo do parceiro - Agencia Gross'} />
          </a>
        </section>
      </main>
    </>
  )
}

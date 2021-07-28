import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href='/about'>
          <a>
            <h1> ➡️ Go About</h1>
          </a>
        </Link>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home

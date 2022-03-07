import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>As melhores marcas com melhores Preços!</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Lorem ipsum dolor sit amet dolor.</h1>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda, sapiente! Lorem ipsum, dolor sit amet 
            </span>
            <a>
              <button>COMEÇAR AGORA</button>
            </a>
          </section>
          <img src="/images/modeloDesenho.png" alt="modelo desenho" />
        </div>
      </main>
    </>
  );
}

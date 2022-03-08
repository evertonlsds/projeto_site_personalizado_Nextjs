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

        <hr className={styles.divisor} />
        <div className={styles.sectionContent}>
          <section>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam ut aperiam cumque minus repellendus eveniet ab eum id
              quae?
            </span>
          </section>
          <img src="/images/tommy4.png" alt="marcas" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
         <img src="/images/entrega.png" alt="entrega" />

          <section>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam ut aperiam cumque minus repellendus eveniet ab eum id
              quae?
            </span>
          </section>
          
        </div>

      </main>
    </>
  );
}

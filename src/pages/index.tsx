import { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/home.module.scss";
import Image from "next/image";

import techsImage from "../../public/images/marcas.png";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";


type Content = {
  title: string;
    titleContent: string;
    linkAction: string;
    tshirtTitle: string;
    shirtContent: string;
    shirtBanner: string;
    titleShirt: string;
    tshirtContent: string;
    tshirtBanner: string;
}

interface contentProps{
  content: Content;
}

export default function Home({content}: contentProps) {
  return (
    <>
      <Head>
        <title>As melhores marcas com melhores Preços!</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <span>
              {content.titleContent}
            </span>
            <a href={content.linkAction}>
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
          <img src="/images/webdev.png" alt="entrega" />

          <section>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam ut aperiam cumque minus repellendus eveniet ab eum id
              quae?
            </span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image src={techsImage} alt="tecno" />
          <h2>
            Lorem ipsum <span className={styles.alunos}>dolor sit</span> dolor
            sit amet consectetur adipisicing elit. Architecto, nemo.
          </h2>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            aliquid.
          </span>
          <a>
            <button>COMPRAR AGORA!</button>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at("document.type", "home"),
  ]);

  const {
    title,
    sub_title,
    link_action,
    t_shirt,
    shirt_content,
    shirt_banner,
    title_shirt,
    tshirt_content,
    tshirt_banner,
  } = response.results[0].data;

  const content = {
    title: RichText.asText(title),
    titleContent: RichText.asText(sub_title),
    linkAction: link_action.url,
    tshirtTitle: RichText.asText(t_shirt),
    shirtContent: RichText.asText(shirt_content),
    shirtBanner: shirt_banner.url,
    titleShirt: RichText.asText(title_shirt),
    tshirtContent: RichText.asText(tshirt_content),
    tshirtBanner: tshirt_banner.url,
  };

  return {
    props: {
      content,
    },
    revalidate: 60 * 2, //a cada 2 minutos
  };
};

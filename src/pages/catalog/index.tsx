import Head from "next/head";

import styles from "./styles.module.scss";
import Link from "next/link";

import Image from "next/image";
import thumbImg from "../../../public/images/thumb.png";

export default function Catalog() {
  return (
    <>
      <Head>
        <title> Catálogo</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.catalog}>
          <Link href="/">
            <a>
              <Image
                src={thumbImg}
                alt="imagem 1"
                width={720}
                height={410}
                quality={100}
              />
              <strong> Lorem ipsum dolor sit amet consectetur.</strong>
              <time>24 Março 2022</time>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                repellendus id quas modi sapiente eveniet, provident aliquid
                sunt consectetur voluptate!
              </p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

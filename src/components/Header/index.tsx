import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>
            <Image src={logo} alt="logomarca" height={90} width={90} />
          </a>
        </ActiveLink>
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/catalog" activeClassName={styles.active}>
            <a>Catálago</a>
          </ActiveLink>
          <ActiveLink href="/sobre" activeClassName={styles.active}>
            <a>Quem somos?</a>
          </ActiveLink>
        </nav>
        <a
          className={styles.readyButton}
          type="button"
          href="https://www.boladaomodas.com.br"
        >
          Começar
        </a>
      </div>
    </header>
  );
}

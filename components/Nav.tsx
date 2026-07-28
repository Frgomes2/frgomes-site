import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav>
      <div className="wrap nav-inner">
        <Link href="#top" className="logo">
          frgomes
        </Link>
        <div className="nav-links">
          <a href="#sobre">sobre</a>
          <a href="#portfolio">portfólio</a>
          <a href="#servicos">serviços</a>
          <a href="#contato">contato</a>
          <ThemeToggle />
        </div>
        <button className="burger" aria-label="menu">
          ☰
        </button>
      </div>
    </nav>
  );
}

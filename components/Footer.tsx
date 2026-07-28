export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap foot-inner">
        <span>© {ano} Flavio Raphael Gomes</span>
        <div className="social">
          <a href="https://github.com/Frgomes2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="devicon-github-original" />
          </a>
          <a href="https://www.linkedin.com/in/flavio-raphael-gomes-405847182/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="devicon-linkedin-plain" />
          </a>
        </div>
      </div>
    </footer>
  );
}

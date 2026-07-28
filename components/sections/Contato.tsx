const LINKS = [
  { label: "flavio.raphael@msn.com", hint: "email →", href: "mailto:flavio.raphael@msn.com", ext: false },
  { label: "+55 (45) 99824-2585", hint: "telefone →", href: "tel:+5545998242585", ext: false },
  { label: "github.com/Frgomes2", hint: "código →", href: "https://github.com/Frgomes2", ext: true },
  { label: "linkedin", hint: "rede →", href: "https://www.linkedin.com/in/flavio-raphael-gomes-405847182/", ext: true },
];

export default function Contato() {
  return (
    <section id="contato">
      <div className="cmt">// contato.ts · export default</div>
      <h2 className="rv">Tem um sistema pra tirar do papel?</h2>
      <p className="sec-sub rv">Disponível para projetos, freelances e colaborações.</p>
      <div className="rows rv">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span>{l.label}</span>
            <em>{l.hint}</em>
          </a>
        ))}
      </div>
      <p className="cmt" style={{ marginTop: "40px" }}>
        // © {new Date().getFullYear()} Flavio Raphael Gomes · Cascavel, PR
      </p>
    </section>
  );
}

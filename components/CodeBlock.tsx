export default function CodeBlock() {
  return (
    <div className="code-block reveal">
      <div className="code-bar">
        <i className="r" />
        <i className="y" />
        <i className="gr" />
        <span>developer.ts</span>
      </div>
      <div className="code-body">
        <div className="cl">
          <span className="k">const</span> <span className="v">dev</span> = {"{"}
        </div>
        <div className="cl">
          &nbsp;&nbsp;<span className="f">nome</span>: <span className="s">&apos;Flavio Raphael Gomes&apos;</span>,
        </div>
        <div className="cl">
          &nbsp;&nbsp;<span className="f">papel</span>: <span className="s">&apos;Full-Stack Developer&apos;</span>,
        </div>
        <div className="cl">
          &nbsp;&nbsp;<span className="f">stack</span>: [<span className="s">&apos;PHP&apos;</span>, <span className="s">&apos;Python&apos;</span>, <span className="s">&apos;Postgres&apos;</span>],
        </div>
        <div className="cl">
          &nbsp;&nbsp;<span className="f">aprendendo</span>: [<span className="s">&apos;Next.js&apos;</span>, <span className="s">&apos;TypeScript&apos;</span>],
        </div>
        <div className="cl">
          &nbsp;&nbsp;<span className="f">local</span>: <span className="s">&apos;Cascavel — PR&apos;</span> <span className="c">// 🇧🇷</span>
        </div>
        <div className="cl">{"};"}</div>
      </div>
    </div>
  );
}

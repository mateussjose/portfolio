import Link from "next/link";

const skillsDevelopment = [
  ["01", "JavaScript", "ES6+, Async, Web", "LANGUAGE", "READY"],
  ["02", "Next.js", "App Router, SSR, Optimization", "FRAMEWORK", "READY"],
  ["03", "React", "Hooks, State Flow, Components", "LIBRARY", "READY"],
  ["04", "Python", "Computer Vision, Sockets, Scripting", "LANGUAGE", "READY"],
  ["05", "Java", "POO, Concurrency, Algorithms", "LANGUAGE", "READY"],
  ["06", "C", "Data Structures, Graphs, Algorithms", "LANGUAGE", "READY"]
];

const skillsTools = [
  ["07", "Git", "Branching, Rebase, Workflows", "VCS", "VERIFIED"],
  ["08", "GitHub", "Projects, Collaboration, CI/CD", "PLATFORM", "VERIFIED"],
  ["09", "VS Code", "Development, Debugging", "EDITOR", "VERIFIED"],
  ["10", "Raspberry Pi", "GPIO, Embedded Linux, Sensors", "HARDWARE", "VERIFIED"],
  ["10", "Figma", "Interface Design", "THEORY", "VERIFIED"],
  ["12", "Canva", "Branding", "THEORY", "VERIFIED"]
];

const projects = [
  {
    code: "PRJ_01",
    title: "Jogo da Forca",
    type: "INTERACTIVE WEB APP",
    description: "Jogo em React com palavras aleatórias, controle de erros, letras usadas e estados de vitória/derrota.",
    tags: ["Next.js", "React", "JavaScript"],
    href: "/projetos/forca",
    live: true
  },
  {
    code: "PRJ_02",
    title: "Next Car",
    type: "API REST",
    description: "Sistema desenvolvido para gerenciamento e venda de carros seminovos.",
    tags: ["Java", "Spring Boot", "MySQL"],
    href: "https://github.com/NextCar-Project/projeto-next-car"
  },
  {
    code: "PRJ_03",
    title: "Andador Inteligente",
    type: "COMPUTER VISION / EMBEDDED",
    description: "Projeto acadêmico com Raspberry Pi, sensores, visão computacional, GPS e comunicação de alertas integrados a um andador articulado.",
    tags: ["Python", "YOLOv8", "Raspberry Pi"],
    href: "https://github.com/andadorInteligente/projeto-andador"
  },
  {
    code: "PRJ_04",
    title: "Next Investement",
    type: "ALGORITHMS / C",
    description: "Projeto gráfico para desenvolvimento de um app de planejamento e educação financeira.",
    tags: ["Figma"],
    href: "https://www.figma.com/proto/hOUbO7TeD8A1zGT0Nuyeum/Next-Investment?node-id=12-654&page-id=0%3A1&t=o9LuzyYOsqbJDxqW-1"
  }
];

function SectionHeader({ number, title, meta }) {
  return (
    <div className="section-header">
      <div className="section-number">{number} // 05</div>
      <h2>{title}</h2>
      <span>{meta}</span>
    </div>
  );
}

function SkillColumn({ title, icon, items }) {
  return (
    <div className="skill-column panel">
      <div className="panel-title">
        <span className="cyan-icon">{icon}</span>
        <strong>{title}</strong>
        <small>[{String(items.length).padStart(2, "0")} ENTRIES]</small>
      </div>

      <div className="skill-list">
        {items.map(([number, name, detail, type, status]) => (
          <div className="skill-row" key={name}>
            <span className="skill-index">{number}</span>
            <div className="skill-main">
              <strong>{name}</strong>
              <small>{detail}</small>
            </div>
            <div className="skill-meta">
              <span>{type}</span>
              <b>{status}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#hero">
          <span>SYSTEM_01</span> // MATEUS.DEVELOPER
        </a>

        <div className="nav-links">
          <a href="#academica">01 / FORMAÇÃO</a>
          <a href="#habilidades">02 / HABILIDADES</a>
          <a href="#projetos">03 / PROJETOS</a>
          <a href="#contato">04 / CONTATO</a>
        </div>

        <div className="nav-status">
          <span className="status-dot" /> ONLINE
        </div>
      </nav>

      <section id="hero" className="hero section">
        <div className="hero-grid" />

        <div className="hero-topline">
          <span>● SYSTEM_01 // 01 / 05</span>
          <span>BUILDING_CYCLE [v2026.2]</span>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <h1>
              MATEUS
              <span>BISPO</span>
            </h1>
            <p className="hero-highlight">COMPUTER SCIENCE STUDENT</p>
            <p className="hero-subtitle">CONSTRUINDO ENQUANTO APRENDO.</p>

            <div className="hero-data">
              <div>
                <span>DOMAIN</span>
                <b>SYSTEMS // WEB // EMBEDDED</b>
              </div>
              <div>
                <span>CORE FOCUS</span>
                <b>NEXT.JS + APPLICATIONS</b>
              </div>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="photo-corners" />
            <img src="/mateus.png" alt="Mateus Bispo" className="hero-photo" />
          </div>
        </div>

        <a href="#academica" className="scroll-hint">SCROLL TO EXPLORE ↓</a>
        <span className="hero-ref">REF: MATEUS_PORTFOLIO_CORE / SCROLL INDEX ↓</span>
      </section>

      <section id="academica" className="section content-section">
        <SectionHeader number="02" title="FORMAÇÃO" meta="EDUCATION // PROGRESS" />

        <div className="academic-grid">
          <article className="academic-card panel">
            <div className="card-code">EDU_01 // CURRENT</div>
            <div className="academic-year">2024 — PRESENT</div>
            <h3>Ciência da Computação</h3>
            <p>
              Formação em andamento com foco em fundamentos de computação,
              algoritmos, estruturas de dados, redes, desenvolvimento de software
              e resolução de problemas.
            </p>
            <div className="tag-row">
              <span>COMPUTING</span><span>ALGORITHMS</span><span>SOFTWARE</span>
            </div>
          </article>

          <article className="academic-card panel">
            <div className="card-code">EDU_02 // COMPLETED</div>
            <div className="academic-year">TECHNICAL EDUCATION</div>
            <h3>Desenvolvimento de Sistemas</h3>
            <p>
              Formação técnica com experiência prática em programação,
              desenvolvimento de aplicações, banco de dados e fundamentos de
              engenharia de software.
            </p>
            <div className="tag-row">
              <span>PROGRAMMING</span><span>WEB</span><span>DATABASE</span>
            </div>
          </article>
        </div>

        <div className="terminal-strip">
          <span>root@mateus:~$</span> cat academic.log
          <b> → learning continuously...</b>
        </div>
      </section>

      <section id="habilidades" className="section content-section skills-section">
        <SectionHeader number="05" title="HABILIDADES" meta="TYPOGRAPHIC_INVENTORY // NO_GENERIC_ICONS" />
        <div className="skills-grid">
          <SkillColumn title="DESENVOLVIMENTO" icon="⌘" items={skillsDevelopment} />
          <SkillColumn title="FERRAMENTAS E SISTEMAS" icon="⚒" items={skillsTools} />
        </div>
      </section>

      <section id="projetos" className="section content-section">
        <SectionHeader number="03" title="PROJETOS" meta="SELECTED_BUILDS // 2026" />

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card panel" key={project.code}>
              <div className="project-top">
                <span>{project.code}</span>
                <span>● {project.type}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              {project.live ? (
                <Link className="project-link" href={project.href}>OPEN PROJECT ↗</Link>
              ) : (
                <a className="project-link muted-link" href={project.href} target="_blank" rel="noopener noreferrer">ARCHIVE ENTRY ↗</a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="section contact-section">
        <div className="contact-grid">
          <div>
            <div className="section-number">04 // 05</div>
            <h2>LET&apos;S BUILD<br /><span>SOMETHING.</span></h2>
            <p className="contact-copy">
              Aberto a oportunidades, projetos acadêmicos e experiências que
              permitam transformar aprendizado em software.
            </p>
          </div>

          <div className="contact-terminal panel">
            <div className="terminal-head">CONTACT_PROTOCOL // READY</div>
            <a href="mailto:mateusjosee379@gmail.com">→ EMAIL / mateusjosee379@gmail.com</a>
            <a href="https://github.com/mateussjose" target="_blank" rel="noreferrer">→ GITHUB / mateussjose</a>
            <a href="https://www.linkedin.com/in/mateus-oliveira-172492213/" target="_blank" rel="noreferrer">→ LINKEDIN / Mateus Oliveira</a>
            <div className="terminal-cursor">█</div>
          </div>
        </div>

        <footer>
          <span>© 2026 MATEUS BISPO</span>
          <span>DESIGNED // BUILT // ITERATED</span>
          <span>BR / UTC−03</span>
        </footer>
      </section>
    </main>
  );
}
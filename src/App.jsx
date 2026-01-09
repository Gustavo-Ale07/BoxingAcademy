import "./App.css";

const WHATSAPP_LINK = "https://wa.me/5516991556663";
const INSTAGRAM_LINK = "https://www.instagram.com/murilomattosss";
const MAPS_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=R.%20Em%C3%ADlio%20F%C3%A1vero%2C%20888%20-%20Jardim%20Anhanguera%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014092-020";
const MAPS_EMBED =
  "https://www.google.com/maps?q=R.%20Em%C3%ADlio%20F%C3%A1vero%2C%20888%20-%20Jardim%20Anhanguera%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014092-020&output=embed";
const LOGO_SRC = "/Logo.png";

function App() {
  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="nav">
          <a className="brand" href="#top">
            <img className="brand-logo" src={LOGO_SRC} alt="Murilo Mattos" />
            <div className="brand-text">
              <span>Murilo Mattos</span>
              <small>Muay Thai - Boxe</small>
            </div>
          </a>
          <div className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#academia">A academia</a>
            <a href="#modalidades">Modalidades</a>
            <a href="#horarios">Horarios</a>
            <a href="#localizacao">Localizacao</a>
          </div>
          <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Agendar Horario
          </a>
        </nav>

        <div className="hero-grid" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow reveal">Treinos personalizados</p>
            <h1 className="reveal delay-1">
              Treine <span>Boxe</span> e <span>Muay Thai</span> com disciplina e resultado.
            </h1>
            <p className="reveal delay-2">
              Treinos para iniciantes e atletas. Corpo forte, mente blindada. Aulas presenciais, pequenos grupos e
              acompanhamento real para evoluir com seguranca.
            </p>
            <div className="hero-actions reveal delay-3">
              <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Agendar Aula Experimental
              </a>
              <a className="btn btn-ghost" href="#contato">
                Falar com o Murilo
              </a>
            </div>
            <div className="hero-pills reveal delay-4">
              <div className="pill">+10 anos de experiencia</div>
              <div className="pill">Turmas reduzidas</div>
              <div className="pill">Foco em tecnica</div>
            </div>
          </div>

          <div className="hero-panel reveal delay-2">
            <div className="hero-badge">Aula experimental</div>
            <h3>Comece com uma avaliacao rapida</h3>
            <ul>
              <li>Analise de condicionamento</li>
              <li>Plano de evolucao personalizado</li>
              <li>Agenda flexivel</li>
            </ul>
            <a className="btn btn-secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Quero minha aula
            </a>
          </div>
        </div>
      </header>

      <section className="section" id="modalidades">
        <div className="section-title">
          <p className="eyebrow">Modalidades</p>
          <h2>Treinos focados no seu objetivo</h2>
          <p>Metodo completo para tecnica, condicionamento e performance.</p>
        </div>
        <div className="cards">
          <article className="card">
            <h3>Boxe</h3>
            <p>Aprenda fundamentos, combinacoes e defesa com postura certa.</p>
          </article>
          <article className="card">
            <h3>Muay Thai</h3>
            <p>Treino completo com chutes, joelhadas e clinch de forma segura.</p>
          </article>
          <article className="card">
            <h3>Condicionamento</h3>
            <p>Rotinas intensas para cardio, forca e explosao.</p>
          </article>
        </div>
      </section>

      <section className="section academy" id="academia">
        <div className="section-title">
          <p className="eyebrow">A academia</p>
          <h2>Estrutura preparada para treino de alta intensidade</h2>
          <p>
            Ambiente motivador, equipamentos completos e foco total em evolucao. Aqui voce treina com seguranca,
            supervisao constante e metas claras.
          </p>
        </div>
        <div className="academy-grid">
          <div className="academy-item">
            <h3>Treino com metodo</h3>
            <p>Sequencias progressivas para ganhar tecnica e resistencia.</p>
          </div>
          <div className="academy-item">
            <h3>Turmas pequenas</h3>
            <p>Atencao real do professor e correcao de postura.</p>
          </div>
          <div className="academy-item">
            <h3>Resultado consistente</h3>
            <p>Planos ajustados ao seu objetivo e nivel.</p>
          </div>
        </div>
      </section>

      <section className="section schedule" id="horarios">
        <div className="section-title">
          <p className="eyebrow">Horario das aulas</p>
          <h2>Escolha o melhor horario para voce</h2>
          <p>Os horarios podem variar. Fale com o Murilo para confirmar vagas.</p>
        </div>
        <div className="schedule-wrap">
          <div className="schedule-table">
            <div className="schedule-row schedule-head">
              <div className="schedule-cell">Horario</div>
              <div className="schedule-cell">Segunda-feira</div>
              <div className="schedule-cell">Terca-feira</div>
              <div className="schedule-cell">Quarta-feira</div>
              <div className="schedule-cell">Quinta-feira</div>
              <div className="schedule-cell">Sexta-feira</div>
            </div>
            <div className="schedule-row">
              <div className="schedule-cell schedule-time">06h00</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell schedule-off">X</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell schedule-off">X</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
            </div>
            <div className="schedule-row">
              <div className="schedule-cell schedule-time">07h05</div>
              <div className="schedule-cell">Boxe<br />Misto</div>
              <div className="schedule-cell schedule-off">X</div>
              <div className="schedule-cell">Boxe<br />Misto</div>
              <div className="schedule-cell schedule-off">X</div>
              <div className="schedule-cell">Boxe<br />Misto</div>
            </div>
            <div className="schedule-row highlight">
              <div className="schedule-cell schedule-time">09h00</div>
              <div className="schedule-cell">Muay Thai<br />Kids</div>
              <div className="schedule-cell schedule-off">X</div>
              <div className="schedule-cell">Muay Thai<br />Kids</div>
              <div className="schedule-cell schedule-off">X</div>
              <div className="schedule-cell">Muay Thai<br />Kids</div>
            </div>
            <div className="schedule-row">
              <div className="schedule-cell schedule-time">10h00</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell schedule-off">X</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell schedule-off">X</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
            </div>
            <div className="schedule-row">
              <div className="schedule-cell schedule-time">12h00</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell schedule-off">X</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell schedule-off">X</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
            </div>
            <div className="schedule-row">
              <div className="schedule-cell schedule-time">17h00</div>
              <div className="schedule-cell">Muay Thai<br />Kids</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell">Muay Thai<br />Kids</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell">Muay Thai<br />Kids</div>
            </div>
            <div className="schedule-row highlight">
              <div className="schedule-cell schedule-time">18h30</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
              <div className="schedule-cell">Muay Thai<br />Misto</div>
            </div>
            <div className="schedule-row">
              <div className="schedule-cell schedule-time">19h40</div>
              <div className="schedule-cell">Muay Thai<br />Feminino</div>
              <div className="schedule-cell">Boxe<br />Misto</div>
              <div className="schedule-cell">Muay Thai<br />Feminino</div>
              <div className="schedule-cell">Boxe<br />Misto</div>
              <div className="schedule-cell schedule-off">X</div>
            </div>
          </div>
        </div>
        <div className="schedule-saturday">
          <h3>Sabados</h3>
          <p>Aulao combinado - 10h00</p>
          <a className="btn btn-secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Confirmar horario
          </a>
        </div>
      </section>

      <section className="section" id="resultados">
        <div className="section-title">
          <p className="eyebrow">Resultados</p>
          <h2>Disciplina, foco e evolucao visivel</h2>
        </div>
        <div className="quote">
          <p>
            "Em poucas semanas ja senti mais folego e seguranca. O treino e firme, mas muito bem guiado."
          </p>
          <span>Aluno - turma noite</span>
        </div>
        <div className="cta-banner">
          <div>
            <h3>Pronto para comecar?</h3>
            <p>Garanta sua vaga e receba uma avaliacao inicial.</p>
          </div>
          <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            Agendar Horario
          </a>
        </div>
      </section>

      <section className="section contact" id="contato">
        <div className="section-title">
          <p className="eyebrow">Contato</p>
          <h2>Fale direto com o Murilo</h2>
          <p>Atendimento rapido via WhatsApp e Instagram.</p>
        </div>
        <div className="contact-grid">
          <a className="contact-card" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <h3>WhatsApp</h3>
            <p>Responder em horario comercial</p>
            <span className="contact-link">Abrir conversa</span>
          </a>
          <a className="contact-card" href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
            <h3>Instagram</h3>
            <p>Treinos, bastidores e dicas</p>
            <span className="contact-link">Ver perfil</span>
          </a>
          <a className="contact-card" href={MAPS_LINK} target="_blank" rel="noreferrer">
            <h3>Endereco</h3>
            <p>R. Emílio Fávero, 888 - Jardim Anhanguera, Ribeirão Preto - SP</p>
            <span className="contact-link">Ver no Google Maps</span>
          </a>
        </div>
      </section>

      <section className="map-section" id="localizacao">
        <iframe
          className="map-frame"
          src={MAPS_EMBED}
          loading="lazy"
          title="Mapa da academia"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="map-overlay">
          <div>
            <p className="eyebrow">Localizacao</p>
            <h3>Onde estamos</h3>
            <p>R. Emílio Fávero, 888 - Jardim Anhanguera, Ribeirão Preto - SP</p>
          </div>
          <a className="btn btn-primary" href={MAPS_LINK} target="_blank" rel="noreferrer">
            Ver rotas no Google Maps
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>Murilo Mattos Muay Thai & Boxe. Treinos personalizados e acompanhamento real.</p>
          <div className="footer-links">
            <a className="icon-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16 3C9.4 3 4 8.1 4 14.4c0 2.2.6 4.3 1.8 6.1L4 29l8.9-1.7c1.9 1 4 1.5 6.1 1.5 6.6 0 12-5.1 12-11.4S22.6 3 16 3zm6.9 16.8c-.3.9-1.7 1.7-2.4 1.8-.7.1-1.6.2-2.6-.2-2.3-.8-4.7-2.8-6.2-5-1.2-1.8-2-4-1.4-5.1.4-.8 1-1.2 1.4-1.2h1c.3 0 .6.1.8.6l1.2 2.9c.1.3.1.6 0 .8-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4.9 1.6 2 2.6 1.4 1.3 2.6 1.7 3 1.9.4.2.6.2.8-.1.2-.3 1-1.2 1.2-1.6.2-.3.5-.3.8-.2l2.6 1.2c.3.1.6.4.5.9z" />
              </svg>
            </a>
            <a className="icon-link" href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M22.1 6H9.9C7.7 6 6 7.7 6 9.9v12.2C6 24.3 7.7 26 9.9 26h12.2c2.2 0 3.9-1.7 3.9-3.9V9.9C26 7.7 24.3 6 22.1 6zm1.4 16.1c0 .8-.6 1.4-1.4 1.4H9.9c-.8 0-1.4-.6-1.4-1.4V9.9c0-.8.6-1.4 1.4-1.4h12.2c.8 0 1.4.6 1.4 1.4v12.2z" />
                <path d="M16 10.2c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8-2.6-5.8-5.8-5.8zm0 9.3c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
                <circle cx="22.4" cy="9.6" r="1.2" />
              </svg>
            </a>
          </div>
          <p className="footer-copy">© 2026 Murilo Mattos Muay Thai & Boxe</p>
        </div>
      </footer>
    </div>
  );
}

export default App;


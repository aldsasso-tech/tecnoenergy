import { FormEvent, useState } from "react"

const PHONE_PRIMARY = "333 297 3604"
const PHONE_SECONDARY = "338 584 8096"
const EMAIL = "tecnoenergy@tiscali.it"

function Icon({
  name,
  className = "",
}: {
  name: "arrow" | "check" | "chevron" | "home" | "mail" | "menu" | "phone" | "send" | "x"
  className?: string
}) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    mail: (
      <>
        <rect width="18" height="14" x="3" y="5" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z" />
    ),
    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </>
    ),
    x: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`brand ${light ? "brand--light" : ""}`}
      href="#top"
      aria-label="Tecno Energy, torna all'inizio"
    >
      <svg className="brand__mark" viewBox="0 0 52 52" aria-hidden="true">
        <path className="brand__ring" d="M16 32.5a16.5 16.5 0 1 1 20.5.7" />
        <path
          className="brand__bolt"
          d="m28.8 10.5-13 21.2h9L22.5 42l14-20.8h-9.2Z"
        />
        <path
          className="brand__plug"
          d="M32.5 34.5 38 40m-1.2-9.8 5 5m-8.6 7.5 8.5-8.5"
        />
      </svg>
      <span className="brand__type">
        <strong>TECNO ENERGY</strong>
        <span>IMPIANTI TECNOLOGICI</span>
      </span>
    </a>
  )
}

const services = [
  {
    number: "01",
    title: "Impianti elettrici",
    text: "Progettazione, realizzazione e adeguamento di impianti civili e per attività professionali.",
    accent: "blue",
    drawing: (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path d="M70 17 36 65h25l-7 38 34-50H64l6-36Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Fotovoltaico",
    text: "Soluzioni per produrre energia pulita e rendere ogni edificio più efficiente e indipendente.",
    accent: "green",
    drawing: (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="88" cy="28" r="13" />
        <path d="m22 49 66-8 12 49-66 8-12-49Zm7 17 66-8M55 45l12 49M60 99v9m-17 0h34" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Sicurezza & smart",
    text: "Videosorveglianza, allarmi e automazioni con controllo semplice, anche da remoto.",
    accent: "dark",
    drawing: (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path d="M60 14 95 28v26c0 22-14 40-35 52C39 94 25 76 25 54V28l35-14Z" />
        <circle cx="60" cy="57" r="16" />
        <circle cx="60" cy="57" r="5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Clima & comfort",
    text: "Impianti di climatizzazione e soluzioni ad alta efficienza per il benessere degli ambienti.",
    accent: "sand",
    drawing: (
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path d="M24 47h72M34 68h52M46 88h28M33 29c9 5 12 11 9 18M58 26c9 7 11 14 7 21M82 29c7 5 9 11 6 18" />
      </svg>
    ),
  },
]

const steps = [
  ["Ascolto", "Partiamo dalle tue esigenze e dagli spazi da trasformare."],
  ["Sopralluogo", "Valutiamo sul posto la soluzione tecnica più efficace."],
  ["Preventivo", "Ricevi una proposta chiara, completa e senza sorprese."],
  [
    "Realizzazione",
    "Eseguiamo il lavoro con cura e ti lasciamo tutto in ordine.",
  ],
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [message, setMessage] = useState("")

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get("name") || "")
    const phone = String(form.get("phone") || "")
    const request = String(form.get("request") || "")
    const body = encodeURIComponent(
      `Nome: ${name}\nTelefono: ${phone}\n\nRichiesta:\n${request}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Richiesta preventivo da ${name}`)}&body=${body}`
    setMessage(
      "Perfetto. Si aprirà la tua app email con la richiesta già compilata.",
    )
  }

  return (
    <div id="top">
      <header className="site-header">
        <div className="topbar">
          <div className="shell topbar__inner">
            <span>Impianti per casa e impresa</span>
            <div>
              <a href={`tel:+39${PHONE_PRIMARY.replaceAll(" ", "")}`}>
                <Icon name="phone" /> {PHONE_PRIMARY}
              </a>
              <a href={`mailto:${EMAIL}`}>
                <Icon name="mail" /> {EMAIL}
              </a>
            </div>
          </div>
        </div>
        <nav className="shell nav" aria-label="Navigazione principale">
          <Brand />
          <div className={`nav__links ${menuOpen ? "is-open" : ""}`}>
            <a href="#servizi" onClick={closeMenu}>
              Servizi
            </a>
            <a href="#chi-siamo" onClick={closeMenu}>
              Chi siamo
            </a>
            <a href="#metodo" onClick={closeMenu}>
              Come lavoriamo
            </a>
            <a
              className="button button--small"
              href="#contatti"
              onClick={closeMenu}
            >
              Richiedi un preventivo
            </a>
          </div>
          <button
            className="nav__toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero__grid shell">
            <div className="hero__content">
              <div className="eyebrow">
                <span /> Energia, sicurezza, comfort
              </div>
              <h1>
                L’impianto giusto.
                <br />
                <em>Fatto per durare.</em>
              </h1>
              <p>
                Soluzioni tecnologiche affidabili per la tua casa e la tua
                attività. Dalla prima idea alla messa in funzione, seguiamo ogni
                dettaglio.
              </p>
              <div className="hero__actions">
                <a className="button" href="#contatti">
                  Parliamo del tuo progetto <Icon name="arrow" />
                </a>
                <a className="text-link" href="#servizi">
                  Scopri i servizi <Icon name="chevron" />
                </a>
              </div>
              <div className="hero__trust">
                {[
                  "Sopralluogo dedicato",
                  "Preventivi chiari",
                  "Soluzioni su misura",
                ].map((item) => (
                  <span key={item}>
                    <i>
                      <Icon name="check" />
                    </i>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="hero__visual">
              <div
                className="hero__image"
                role="img"
                aria-label="Tecnico al lavoro su un impianto fotovoltaico"
              >
                <div className="hero__image-overlay" />
              </div>
              <div className="hero__badge">
                <svg viewBox="0 0 52 52" aria-hidden="true">
                  <path d="M16 32.5a16.5 16.5 0 1 1 20.5.7" />
                  <path d="m28.8 10.5-13 21.2h9L22.5 42l14-20.8h-9.2Z" />
                </svg>
                <span>
                  <small>Un unico referente</small>
                  <strong>Dall’idea all’impianto</strong>
                </span>
              </div>
              <div className="hero__year">
                TECNO
                <br />
                ENERGY
              </div>
            </div>
          </div>
          <div className="hero__line" />
        </section>

        <section className="services section" id="servizi">
          <div className="shell">
            <div className="section-heading">
              <div>
                <div className="eyebrow">
                  <span /> Cosa facciamo
                </div>
                <h2>
                  Tecnologia che
                  <br />
                  <em>lavora per te.</em>
                </h2>
              </div>
              <p>
                Progettiamo sistemi semplici da usare, efficienti nei consumi e
                pronti ad accompagnarti nel tempo.
              </p>
            </div>
            <div className="services__grid">
              {services.map((service) => (
                <article
                  className={`service-card service-card--${service.accent}`}
                  key={service.title}
                >
                  <div className="service-card__top">
                    <span>{service.number}</span>
                    <div className="service-card__drawing">
                      {service.drawing}
                    </div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contatti">
                    Chiedi informazioni <Icon name="arrow" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section" id="chi-siamo">
          <div className="shell about__grid">
            <div className="about__visual">
              <div
                className="about__photo"
                role="img"
                aria-label="Installatori di pannelli solari al lavoro su un tetto"
              />
              <div className="about__quote">
                “Ogni buon impianto inizia dall’ascolto.”
              </div>
            </div>
            <div className="about__content">
              <div className="eyebrow eyebrow--light">
                <span /> Tecno Energy
              </div>
              <h2>
                Competenza tecnica.
                <br />
                <em>Rapporto umano.</em>
              </h2>
              <p className="about__lead">
                Non installiamo semplicemente impianti. Costruiamo soluzioni
                pensate per rendere più semplici, sicuri ed efficienti gli spazi
                in cui vivi e lavori.
              </p>
              <div className="about__points">
                <div>
                  <span>01</span>
                  <p>
                    <strong>Un referente diretto</strong>Parli con chi conosce
                    davvero il tuo progetto.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <strong>Scelte comprensibili</strong>Ti spieghiamo ogni
                    soluzione in modo chiaro.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <strong>Cura nel tempo</strong>Restiamo disponibili anche
                    dopo la consegna.
                  </p>
                </div>
              </div>
              <a className="button button--lime" href="#contatti">
                Conosciamoci <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="process section" id="metodo">
          <div className="shell">
            <div className="section-heading section-heading--center">
              <div className="eyebrow">
                <span /> Il nostro metodo
              </div>
              <h2>
                Un percorso semplice,
                <br />
                <em>dall’inizio alla fine.</em>
              </h2>
            </div>
            <div className="process__track">
              {steps.map(([title, text], index) => (
                <div className="process__step" key={title}>
                  <div className="process__number">0{index + 1}</div>
                  <span className="process__dot" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contatti">
          <div className="shell contact__grid">
            <div className="contact__copy">
              <div className="eyebrow eyebrow--light">
                <span /> Parliamone
              </div>
              <h2>
                Hai un progetto
                <br />
                in mente? <em>Iniziamo.</em>
              </h2>
              <p>
                Raccontaci cosa vuoi realizzare. Ti ricontatteremo per capire
                insieme esigenze, tempi e soluzione più adatta.
              </p>
              <div className="contact__direct">
                <a href={`tel:+39${PHONE_PRIMARY.replaceAll(" ", "")}`}>
                  <i>
                    <Icon name="phone" />
                  </i>
                  <span>
                    <small>Chiamaci</small>
                    <strong>{PHONE_PRIMARY}</strong>
                  </span>
                </a>
                <a href={`mailto:${EMAIL}`}>
                  <i>
                    <Icon name="mail" />
                  </i>
                  <span>
                    <small>Scrivici</small>
                    <strong>{EMAIL}</strong>
                  </span>
                </a>
              </div>
            </div>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form__header">
                <span>Richiedi un contatto</span>
                <Icon name="send" />
              </div>
              <label>
                Come ti chiami?
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Nome e cognome"
                />
              </label>
              <label>
                Il tuo numero di telefono
                <input required name="phone" type="tel" placeholder="+39" />
              </label>
              <label>
                Di cosa hai bisogno?
                <textarea
                  required
                  name="request"
                  rows={3}
                  placeholder="Raccontaci brevemente il tuo progetto..."
                />
              </label>
              <button className="button button--form" type="submit">
                Invia la richiesta <Icon name="arrow" />
              </button>
              {message && (
                <p className="form__message" role="status">
                  {message}
                </p>
              )}
              <small>
                Inviando la richiesta accetti di essere ricontattato in merito
                al tuo messaggio.
              </small>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer__main">
          <div>
            <Brand light />
            <p>
              Impianti tecnologici progettati
              <br />
              con cura, realizzati per durare.
            </p>
          </div>
          <div className="footer__links">
            <div>
              <strong>Naviga</strong>
              <a href="#servizi">Servizi</a>
              <a href="#chi-siamo">Chi siamo</a>
              <a href="#metodo">Come lavoriamo</a>
            </div>
            <div>
              <strong>Contatti</strong>
              <a href={`tel:+39${PHONE_PRIMARY.replaceAll(" ", "")}`}>
                {PHONE_PRIMARY}
              </a>
              <a href={`tel:+39${PHONE_SECONDARY.replaceAll(" ", "")}`}>
                {PHONE_SECONDARY}
              </a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </div>
        <div className="shell footer__bottom">
          <span>© {new Date().getFullYear()} Tecno Energy srl</span>
          <a href="#top">Torna su ↑</a>
        </div>
      </footer>
    </div>
  )
}

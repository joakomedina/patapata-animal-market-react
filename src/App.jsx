import { useEffect, useState } from "react";
import { Mail, Smartphone } from "lucide-react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";

const nav = [
  { label: "Inicio", type: "path", to: "/" },
  { label: "Peluqueria canina", type: "path", to: "/peluqueria-canina#nuestros-servicios" },
  { label: "Agenda", type: "path", to: "/agenda" },
  { label: "Contacto", type: "hash", to: "#contacto" },
];

const firstCards = [
  {
    title: "PELUQUERIA",
    text: "Ofrecemos un servicio de peluqueria canina en Caracas, especializado y personalizado, diseno y corte para garantizar su bienestar y estetica de tu mascota.",
    button: "RESERVA",
    img: "/patapata/patapata_3.jpg",
    tone: "blue",
  },
  {
    title: "TIENDA",
    text: "Nuestra tienda ofrece una amplia variedad de productos para mascotas: alimentos, juguetes, accesorios y mucho mas.",
    button: "PRONTO",
    img: "/patapata/patapata_2.jpg",
    tone: "pink",
  },
  {
    title: "BLOG",
    text: "En nuestro blog encontraras consejos practicos, curiosidades y novedades sobre el cuidado para tu mascota.",
    button: "APRENDE",
    img: "/patapata/patapata_1.jpg",
    tone: "yellow",
  },
];

const secondCards = [
  {
    title: "VIAJES",
    text: "Ofrecemos servicios especializados para gestionar la documentacion necesaria en tus viajes. Nos encargamos de reservas, permisos, itinerarios y requisitos legales.",
    button: "CONTACTA",
    img: "/patapata/patapata_4.jpg",
    tone: "blue",
  },
  {
    title: "ENTRENAMIENTO",
    text: "Brindamos servicios de entrenamiento personalizado para mascotas, adaptado a sus necesidades y caracter. Ensenamos obediencia basica, correccion de conductas.",
    button: "RESERVA",
    img: "/patapata/patapata_5.jpg",
    tone: "pink",
  },
  {
    title: "HOSPEDAJE",
    text: "Brindamos hospedaje para mascotas con atencion personalizada, espacios comodos y supervision constante, preocupados por su bienestar mientras estas de vacaciones.",
    button: "PREGUNTA",
    img: "/patapata/patapata_6.jpg",
    tone: "yellow",
  },
];

const faqs = [
  {
    q: "Donde estan ubicados?",
    a: "Estamos ubicados en la ciudad de Caracas, en el Municipio Libertador. Prolongacion de Calle El Recreo, entre Casanova y Venezuela, en el Edificio Los Aleros, PB, El Recreo.",
  },
  { q: "Tienen estacionamiento disponible?", a: "Si, tenemos estacionamiento disponible en frente del local." },
  {
    q: "En que consiste el servicio de peluqueria canina? Se necesita cita previa?",
    a: "El servicio de peluqueria canina consiste en bano, secado, corte de raza, corte de higiene, limpieza de oidos, despeje ocular y corte de unas. Si, trabajamos con cita previa. Contactanos al 04124060011.",
  },
  {
    q: "Como puedo contactar al servicio al cliente?",
    a: "Puedes contactar mediante llamada telefonica, via WhatsApp o mediante el formulario de contacto disponible en la web.",
  },
];

const groomingServices = [
  {
    title: "PELUQUERIA COMPLETA PERRO PEQUENO",
    subtitle: "Perros desde 0 a 10 kg",
    details: [
      "Bano con champu hipoalergenico",
      "Secado",
      "Corte de raza",
      "Corte de higiene",
      "Limpieza auditiva",
      "Despeje ocular",
      "Corte de unas",
      "Perfumado y bandana",
    ],
    price: "DESDE 20$",
  },
  {
    title: "PELUQUERIA COMPLETA PERRO MEDIANO",
    subtitle: "Perros desde 10 a 15 kg",
    details: [
      "Bano con champu hipoalergenico",
      "Secado",
      "Corte de raza",
      "Corte de higiene",
      "Limpieza auditiva",
      "Despeje ocular",
      "Corte de unas",
      "Perfumado y bandana",
    ],
    price: "DESDE 25$",
  },
  {
    title: "PELUQUERIA COMPLETA PERRO GRANDE",
    subtitle: "Perros de 15kg en adelante",
    details: [
      "Bano con champu hipoalergenico",
      "Secado",
      "Deslanado/Corte en caso de manto largo",
      "Corte de higiene",
      "Limpieza auditiva",
      "Despeje ocular",
      "Corte de unas",
      "Perfumado y bandana",
    ],
    price: "DESDE 45$",
  },
  {
    title: "PELUQUERIA BASICA PERRO PEQUENO",
    subtitle: "Perros desde 0 a 10 kg",
    details: ["Bano con champu hipoalergenico", "Secado", "Perfumado y bandana"],
    price: "15$",
  },
  {
    title: "PELUQUERIA BASICA PERRO MEDIANO",
    subtitle: "Perros desde 10 a 15 kg",
    details: ["Bano con champu hipoalergenico", "Secado", "Perfumado y bandana"],
    price: "18$",
  },
  {
    title: "PELUQUERIA BASICA PERRO GRANDE",
    subtitle: "Perros de 15kg en adelante",
    details: ["Bano con champu hipoalergenico", "Secado", "Perfumado y bandana"],
    price: "35$",
  },
  {
    title: "EXTRAS",
    subtitle: "",
    details: ["Extra: Nudos", "Bano antifungico", "Bano antipulgas", "Corte de unas"],
    price: "",
  },
  {
    title: "PELUQUERIA FELINA",
    subtitle: "",
    details: [
      "Bano con champu hipoalergenico",
      "Secado",
      "Limpieza ocular",
      "Limpieza oidos",
      "Corte de unas",
    ],
    price: "30$",
  },
];

const transformations = [
  { before: "/patapata/Cofuta_antes.jpg", after: "/patapata/Cotufa_despues.jpg", name: "Cotufa" },
  { before: "/patapata/Dolar_antes.jpg", after: "/patapata/Dolar_despues.jpg", name: "Dolar" },
  { before: "/patapata/Lumi-antes.jpg", after: "/patapata/Lumi-despues.jpg", name: "Lumi" },
];

const agendaOptions = [
  "PELUQUERIA COMPLETA PERRO PEQUENO",
  "PELUQUERIA COMPLETA PERRO MEDIANO",
  "PELUQUERIA COMPLETA PERRO GRANDE",
  "PELUQUERIA BASICA PERRO PEQUENO",
  "PELUQUERIA BASICA PERRO MEDIANO",
  "PELUQUERIA BASICA PERRO GRANDE",
  "PELUQUERIA FELINA",
  "EXTRAS",
  "VIAJES",
  "ENTRENAMIENTO",
  "HOSPEDAJE",
  "TIENDA",
  "BLOG",
];

function Shell({ children }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace("#", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return (
    <div className="page">
      <div className="top-strip">04124060011</div>

      <header className="main-header">
        <div className="container nav-row">
          <Link to="/" className="brand" aria-label="Patapata">
            <img src="/patapata/Logo.png" alt="Patapata" />
          </Link>

          <nav className="menu">
            {nav.map((item) =>
              item.type === "hash" ? (
                <a key={item.label} href={pathname === "/" ? item.to : `/${item.to}`} className="menu-link">
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`menu-link ${pathname === item.to.split("#")[0] ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <button className="search" aria-label="Buscar" type="button">
              &#9906;
            </button>
          </nav>
        </div>
      </header>

      {children}

      <a className="wa" href="https://wa.me/584242456212" target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-logo">
          <img src="/patapata/LOGO-PATAPATA33-33.png" alt="Patapata" />
        </div>
        <div>
          <h4>contactanos</h4>
          <p>+58 4124060011</p>
          <p>info@patapataanimalmarket.com</p>
          <p>Prolongacion calle El Recreo, entre calle Casanova y Venezuela.</p>
          <p>Edificio Los Aleros B, PB Local 1, Sabana Grande, Caracas</p>
        </div>
        <div>
          <h4>Horario</h4>
          <p>Lunes a Sabado</p>
          <p>9:00am - 5:00pm</p>
          <h4 className="follow">Follow Us</h4>
          <p>f &nbsp; ig &nbsp; t</p>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ scrollToContact = false }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [googleReviews, setGoogleReviews] = useState(null);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    if (scrollToContact) {
      const contactSection = document.getElementById("contacto");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [scrollToContact]);

  useEffect(() => {
    let mounted = true;

    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        if (mounted) {
          setGoogleReviews(data);
          setReviewsLoading(false);
        }
      })
      .catch(() => {
        if (mounted) {
          setGoogleReviews(null);
          setReviewsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const reviewItems =
    googleReviews?.source === "google" && Array.isArray(googleReviews?.reviews) && googleReviews.reviews.length
      ? googleReviews.reviews.slice(0, 5).map((item) => ({
          rating: item.rating || 5,
          text: item.text,
          author: item.author || "Cliente",
        }))
      : [];

  useEffect(() => {
    if (reviewItems.length <= 1) return;
    const timer = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviewItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviewItems.length]);

  return (
    <main>
      <section className="hero-home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>
              El lugar
              <br />
              favorito de
              <br />
              tu mascota
            </h1>
            <a href="#contacto" className="cta-main">
              CONTACTANOS
            </a>
          </div>
          <div className="hero-img-wrap">
            <img src="/patapata/imagen_header.png" alt="Perro" />
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container intro-inner">
          <h2>PATAPATA ANIMAL MARKET</h2>
          <p>
            En <strong>Patapata Animal Market</strong>, trabajamos para que cada mascota disfrute una
            <strong> vida plena, feliz y saludable.</strong>
          </p>
          <p>
            Ofrecemos productos y servicios de alta calidad, con un compromiso firme hacia el bienestar animal, la
            sostenibilidad y la educacion de sus duenos.
          </p>
        </div>
      </section>

      <section className="cards cards-one">
        <div className="container card-grid">
          {firstCards.map((item) => (
            <article key={item.title} className="card">
              <img src={item.img} alt={item.title} className="card-image" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link className={`pill ${item.tone}`} to={`/agenda?servicio=${encodeURIComponent(item.title)}`}>
                {item.button}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="quote">
        <div className="container">
          <h2>
            Ellos no hablan, pero lo dicen
            <br />
            todo con su amor. Encuentra
            <br />
            lo que necesitan aqui.
          </h2>
        </div>
      </section>

      <section className="cards cards-two">
        <div className="container">
          <h2 className="section-title">OTROS SERVICIOS</h2>
          <div className="card-grid">
            {secondCards.map((item) => (
              <article key={item.title} className="card">
                <img src={item.img} alt={item.title} className="card-image" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link className={`pill ${item.tone}`} to={`/agenda?servicio=${encodeURIComponent(item.title)}`}>
                  {item.button}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h3>Lo que dicen de nosotros:</h3>
          {googleReviews?.source === "google" && googleReviews?.rating ? (
            <p className="reviews-meta">
              Google rating: <strong>{googleReviews.rating.toFixed(1)}</strong>
              {googleReviews.userRatingCount ? ` (${googleReviews.userRatingCount} reseñas)` : ""}
            </p>
          ) : null}
          {reviewsLoading ? (
            <p className="reviews-meta">Cargando reseñas...</p>
          ) : reviewItems.length ? (
            <div className="testi-carousel">
              <article className="testi-card">
                <div className="stars">
                  {"*".repeat(Math.max(1, Math.min(5, Number(reviewItems[reviewIndex]?.rating) || 5)))}
                </div>
                <p>{reviewItems[reviewIndex]?.text}</p>
                <span>{reviewItems[reviewIndex]?.author}</span>
              </article>
              {reviewItems.length > 1 ? (
                <div className="testi-dots" role="tablist" aria-label="Seleccionar reseña">
                  {reviewItems.map((item, idx) => (
                    <button
                      key={`${item.author}-${idx}`}
                      type="button"
                      className={`testi-dot ${idx === reviewIndex ? "active" : ""}`}
                      onClick={() => setReviewIndex(idx)}
                      aria-label={`Ver reseña ${idx + 1}`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <p className="reviews-meta">No se pudieron cargar reseñas de Google en este momento.</p>
          )}
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-wrap">
          <h2>FAQ</h2>
          {faqs.map((item, idx) => (
            <article key={item.q} className={`faq-item ${openFaq === idx ? "open" : ""}`}>
              <button
                type="button"
                className="faq-q"
                onClick={() => setOpenFaq((prev) => (prev === idx ? null : idx))}
                aria-expanded={openFaq === idx}
              >
                <span>{item.q}</span>
                <span className="faq-plus">{openFaq === idx ? "-" : "+"}</span>
              </button>
              {openFaq === idx && <p>{item.a}</p>}
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="home-contact">
        <div className="container">
          <div className="contact-cards">
            <article className="contact-info-card">
              <span className="contact-icon" aria-hidden="true">
                <Smartphone size={30} strokeWidth={2.4} />
              </span>
              <h3>58 (412) 406 0011</h3>
              <p>Lunes a Sabado de 9:00am a 5:00pm</p>
            </article>
            <article className="contact-info-card tinted">
              <span className="contact-icon" aria-hidden="true">
                <Mail size={30} strokeWidth={2.4} />
              </span>
              <h3>info@patapataanimalmarket.com</h3>
              <p>Email us anytime</p>
            </article>
          </div>

          <h2 className="contact-title">CONTACTANOS</h2>

          <form className="contact-form">
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Mensaje" />
            <div className="form-submit">
              <button type="button">ENVIAR</button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function GroomingPage() {
  return (
    <main>
      <section className="groom-hero">
        <div className="container groom-hero-grid">
          <h1>
            Peluqueria
            <br />
            canina en
            <br />
            Caracas
          </h1>
          <img src="/patapata/peluqueria-canina-caracas-v3.png" alt="Peluqueria canina" />
        </div>
      </section>

      <section id="nuestros-servicios" className="groom-services">
        <div className="container">
          <h2>NUESTROS SERVICIOS</h2>
          <div className="groom-grid">
            {groomingServices.map((item) => (
              <article key={item.title} className="groom-card">
                <h3>{item.title}</h3>
                {item.subtitle && <h4>{item.subtitle}</h4>}
                <ul>
                  {item.details.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                {item.price && <p className="groom-price">{item.price}</p>}
                <Link className="groom-book" to={`/agenda?servicio=${encodeURIComponent(item.title)}`}>
                  Reservar
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="groom-transform">
        <div className="container">
          <h2>ESTAS LISTO PARA CONSENTIR A TU MASCOTA?</h2>
          <p>Reserva hoy y dale a tu perro el bano que merece</p>
          <Link to="/agenda" className="groom-cta">AGENDA TU CITA</Link>

          <div className="before-after-grid">
            {transformations.map((item) => (
              <article key={item.name} className="before-after-card" aria-label={item.name}>
                <img className="before" src={item.before} alt={`${item.name} antes`} />
                <img className="after" src={item.after} alt={`${item.name} despues`} />
                <span className="split-line" />
                <span className="split-knob">o</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function StubPage({ title }) {
  return (
    <main className="stub">
      <div className="container">
        <h1>{title}</h1>
        <p>Esta pagina se ajusta despues de terminar el home.</p>
        <Link to="/">Volver al home</Link>
      </div>
    </main>
  );
}

function AgendaPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const selectedService = params.get("servicio") || "";
  const [form, setForm] = useState({
    servicio: selectedService,
    fecha: "",
    hora: "",
    nombre: "",
    telefono: "",
    mascota: "",
    notas: "",
  });
  const [status, setStatus] = useState("");

  const setField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, servicio: selectedService }));
    }
  }, [selectedService]);

  const reservationText = [
    "Nueva reserva - Patapata",
    `Servicio: ${form.servicio}`,
    `Fecha: ${form.fecha || "-"}`,
    `Hora: ${form.hora || "-"}`,
    `Cliente: ${form.nombre || "-"}`,
    `Telefono: ${form.telefono || "-"}`,
    `Mascota: ${form.mascota || "-"}`,
    `Notas: ${form.notas || "-"}`,
  ].join("\n");

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!form.servicio || !form.fecha || !form.hora || !form.nombre || !form.telefono) {
      setStatus("Completa servicio, fecha, hora, nombre y telefono para confirmar.");
      return;
    }

    const subject = encodeURIComponent(`Reserva ${form.servicio}`);
    const body = encodeURIComponent(reservationText);
    window.location.href = `mailto:info@patapataanimalmarket.com?subject=${subject}&body=${body}`;
    setStatus("Se abrio tu cliente de correo para enviar la reserva.");
  };

  const whatsappHref = `https://wa.me/584242456212?text=${encodeURIComponent(reservationText)}`;

  return (
    <main className="agenda-page">
      <div className="container agenda-wrap">
        <h1>Agenda tu cita</h1>
        <p className="agenda-subtitle">
          Reserva en menos de 1 minuto. Servicio seleccionado: <strong>{form.servicio || "Por definir"}</strong>
        </p>

        <form className="agenda-form" onSubmit={handleConfirm}>
          <label>
            Servicio
            <select value={form.servicio} onChange={(e) => setField("servicio", e.target.value)}>
              <option value="">Selecciona un servicio</option>
              {agendaOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Fecha
            <input type="date" value={form.fecha} onChange={(e) => setField("fecha", e.target.value)} />
          </label>
          <label>
            Hora
            <input type="time" value={form.hora} onChange={(e) => setField("hora", e.target.value)} />
          </label>
          <label>
            Nombre y apellido
            <input type="text" placeholder="Tu nombre" value={form.nombre} onChange={(e) => setField("nombre", e.target.value)} />
          </label>
          <label>
            Telefono
            <input type="tel" placeholder="+58..." value={form.telefono} onChange={(e) => setField("telefono", e.target.value)} />
          </label>
          <label>
            Mascota
            <input type="text" placeholder="Nombre y raza" value={form.mascota} onChange={(e) => setField("mascota", e.target.value)} />
          </label>
          <label className="full">
            Notas
            <textarea
              rows={4}
              placeholder="Alergias, estado del manto, observaciones..."
              value={form.notas}
              onChange={(e) => setField("notas", e.target.value)}
            />
          </label>
          <div className="agenda-actions">
            <button type="submit">Confirmar reserva</button>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              Reservar por WhatsApp
            </a>
          </div>
          {status && <p className="agenda-status">{status}</p>}
        </form>
      </div>
      <SiteFooter />
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Shell><HomePage /></Shell>} />
      <Route path="/contacto" element={<Shell><HomePage scrollToContact /></Shell>} />
      <Route path="/peluqueria-canina" element={<Shell><GroomingPage /></Shell>} />
      <Route path="/agenda" element={<Shell><AgendaPage /></Shell>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

"use client";

import Image from "next/image";
import { useEffect } from "react";
import {
  ArrowRight,
  Dumbbell,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer
} from "lucide-react";

const img = (name: string) => `/assets/optimized/${name}`;
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://matosgym.netlify.app").replace(/\/$/, "");
const whatsappPhone = "5493794592965";
const whatsappMessage = (message: string) =>
  `https://web.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(message)}`;
const whatsappHref = whatsappMessage("Hola MATOS GYM, quiero consultar por los entrenamientos.");
const instagramHref = "https://www.instagram.com/matosgym/";
const facebookHref = "https://www.facebook.com/profile.php?id=100067500434074&locale=es_LA";
const address = "Avenida Pujol 1741, Saladas, Corrientes, Argentina";
const email = "fabioss84fit@gmail.com";
const mapSrc =
  "https://www.google.com/maps?q=Avenida%20Pujol%201741%20Saladas%20Corrientes%20Argentina&output=embed";
const mapDirectionsHref =
  "https://www.google.com/maps/search/?api=1&query=Avenida%20Pujol%201741%20Saladas%20Corrientes%20Argentina";

const nav = [
  ["Inicio", "home"],
  ["Modalidades", "classes"],
  ["Método", "method"],
  ["Planes", "membership"],
  ["Ubicación", "visit"],
  ["Redes", "social"],
  ["Contacto", "contact"]
];

const stats = [
  ["Grupal", "Entrenamiento en equipo"],
  ["1 a 1", "Plan personalizado"],
  ["Online", "Asesoramiento"],
  ["Saladas", "Avenida Pujol 1741"]
];

const benefits = [
  {
    icon: Dumbbell,
    title: "Entrenamiento guiado",
    text: "Rutinas claras, corrección técnica y acompañamiento para que entrenes con seguridad."
  },
  {
    icon: ShieldCheck,
    title: "Planes a tu medida",
    text: "Elegí modalidad grupal o personalizada según tu objetivo, experiencia y disponibilidad."
  },
  {
    icon: Timer,
    title: "Horarios a consultar",
    text: "Coordiná por WhatsApp el turno que mejor se adapte a tu rutina semanal."
  },
  {
    icon: Sparkles,
    title: "Presencial y online",
    text: "Entrená en el gimnasio de Saladas o pedí asesoramiento para seguir tu plan a distancia."
  }
];

const classes = [
  {
    label: "Grupal",
    title: "Entrenamiento en grupo para ganar constancia",
    image: img("se1.webp")
  },
  {
    label: "Personalizado",
    title: "Plan 1 a 1 con seguimiento de objetivos",
    image: img("se2.webp")
  },
  {
    label: "Online",
    title: "Asesoramiento para entrenar desde donde estés",
    image: img("se3.webp")
  },
  {
    label: "Fuerza",
    title: "Trabajo de fuerza, salud y acondicionamiento",
    image: img("se4.webp")
  }
];

const methodSteps = [
  {
    icon: ShieldCheck,
    title: "Evaluación inicial",
    text: "Primero entendemos tu punto de partida, objetivo y disponibilidad para entrenar."
  },
  {
    icon: Dumbbell,
    title: "Rutina guiada",
    text: "Trabajás con una planificación simple de seguir y ejercicios adaptados a tu nivel."
  },
  {
    icon: Timer,
    title: "Seguimiento constante",
    text: "Ajustamos cargas, técnica y frecuencia para que el progreso no quede librado al azar."
  }
];

const plans = [
  {
    name: "Entrenamiento grupal",
    price: "$30.000/mes",
    tag: "Para entrenar acompañado",
    description: "Ideal para sostener la constancia, mejorar técnica y compartir energía de grupo.",
    href: whatsappMessage("Hola MATOS GYM, quiero consultar por el entrenamiento grupal de $30.000/mes."),
    perks: ["Entrenamiento en grupo", "Rutina guiada", "Consultá horarios disponibles"]
  },
  {
    name: "Entrenamiento personalizado",
    price: "$60.000/mes",
    tag: "Para objetivos específicos",
    description: "Pensado para trabajar con más seguimiento, ajustes personalizados y foco total.",
    href: whatsappMessage("Hola MATOS GYM, quiero consultar por el entrenamiento personalizado de $60.000/mes."),
    perks: ["Plan 1 a 1", "Seguimiento personalizado", "Objetivos y rutina a medida"]
  }
];

const gallery = [
  "matos-gallery-1.webp",
  "matos-gallery-2.webp",
  "matos-gallery-3.webp",
  "matos-gallery-4.webp",
  "matos-gallery-5.webp",
  "matos-gallery-6.webp"
];

const socialProfiles = [
  {
    platform: "Instagram",
    icon: Instagram,
    href: instagramHref,
    stat: "196 publicaciones",
    detail: "702 seguidores",
    text: "Entrenamientos personalizados, asesoramientos presenciales y online, novedades y contenido del gimnasio."
  },
  {
    platform: "Facebook",
    icon: Facebook,
    href: facebookHref,
    stat: "159 seguidores",
    detail: "Gimnasio/centro de fitness",
    text: "Perfil activo con WhatsApp, fotos, reels, publicaciones y datos de contacto para Saladas."
  }
];

const profileFacts = [
  "Entrenamiento grupal",
  "Entrenamiento personalizado",
  "Avenida Pujol 1741, Saladas",
  "+54 9 3794 59-2965"
];

const visitFacts = [
  ["Dirección", "Avenida Pujol 1741, Saladas"],
  ["WhatsApp", "+54 9 3794 59-2965"],
  ["Modalidades", "Grupal, personalizado y online"],
  ["Horarios", "Consultá disponibilidad por WhatsApp"]
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  "@id": `${siteUrl}/#matos-gym`,
  name: "MATOS GYM",
  url: siteUrl,
  logo: `${siteUrl}${img("matos-logo.webp")}`,
  image: [`${siteUrl}${img("hero-1.webp")}`, `${siteUrl}${img("matos-logo.webp")}`],
  description:
    "Gimnasio en Saladas, Corrientes, con entrenamiento grupal, personalizado y asesoramiento online.",
  telephone: "+5493794592965",
  email,
  priceRange: "$30.000 - $60.000 ARS",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Pujol 1741",
    addressLocality: "Saladas",
    addressRegion: "Corrientes",
    addressCountry: "AR"
  },
  areaServed: {
    "@type": "City",
    name: "Saladas, Corrientes"
  },
  sameAs: [instagramHref, facebookHref],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Atención por WhatsApp",
    telephone: "+5493794592965",
    areaServed: "AR",
    availableLanguage: "Spanish"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planes de entrenamiento MATOS GYM",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Entrenamiento grupal",
        price: "30000",
        priceCurrency: "ARS",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#membership`
      },
      {
        "@type": "Offer",
        name: "Entrenamiento personalizado",
        price: "60000",
        priceCurrency: "ARS",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#membership`
      }
    ]
  }
};

const businessJsonLdMarkup = JSON.stringify(businessJsonLd).replace(/</g, "\\u003c");

const revealSelectors = [
  ".hero-copy",
  ".video-image",
  ".hero-card",
  ".section-copy",
  ".benefits-section > img",
  ".benefit-grid article",
  ".split-band > img",
  ".split-band > div",
  ".section-heading",
  ".class-card",
  ".join-band",
  ".social-card",
  ".profile-facts span",
  ".method-grid article",
  ".plan-grid article",
  ".visit-band > div",
  ".visit-card",
  ".gallery-grid img",
  "footer > div"
].join(",");

export default function Home() {
  useEffect(() => {
    const animatedItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animatedItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.16
      }
    );

    animatedItems.forEach((item, index) => {
      item.classList.add("reveal-item");
      item.style.setProperty("--reveal-delay", `${(index % 6) * 70}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: businessJsonLdMarkup }}
      />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Inicio de MATOS GYM">
          <Image src={img("matos-logo.webp")} alt="MATOS GYM" width={180} height={180} priority />
        </a>
        <div className="top-strip">
          <span>Seguinos en</span>
          <div className="header-socials" aria-label="Redes sociales">
            <a href={facebookHref} target="_blank" rel="noopener noreferrer" aria-label="Facebook de MATOS GYM">
              <Facebook size={18} />
            </a>
            <a href={instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram de MATOS GYM">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        <nav aria-label="Navegación principal">
          {nav.map(([label, target]) => (
            <a key={target} href={`#${target}`}>
              {label}
            </a>
          ))}
        </nav>
        <a className="pass-button" href={whatsappHref} target="_blank" rel="noopener noreferrer">
          Consultar WhatsApp <ArrowRight size={18} />
        </a>
        <details
          className="mobile-menu"
          onClick={(event) => {
            const target = event.target;

            if (target instanceof Element && target.closest("a")) {
              event.currentTarget.open = false;
            }
          }}
        >
          <summary className="menu-button" aria-label="Abrir menú de navegación">
            <Menu size={24} />
          </summary>
          <div className="mobile-menu-panel" aria-label="Navegación móvil">
            {nav.map(([label, target]) => (
              <a key={target} href={`#${target}`}>
                {label}
              </a>
            ))}
            <a className="mobile-menu-cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <Phone size={18} /> Consultar por WhatsApp
            </a>
            <div className="mobile-menu-socials" aria-label="Redes sociales">
              <a href={facebookHref} target="_blank" rel="noopener noreferrer" aria-label="Facebook de MATOS GYM">
                <Facebook size={20} />
              </a>
              <a href={instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram de MATOS GYM">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </details>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">MATOS GYM</p>
          <h1>Entrená en Saladas.</h1>
          <p className="hero-text">
            Entrenamiento grupal y personalizado en Avenida Pujol 1741. Sumate
            a un espacio pensado para ganar fuerza, salud y constancia con
            acompañamiento real.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Consultar por WhatsApp <ArrowRight size={20} />
            </a>
            <a className="secondary-action" href={mapDirectionsHref} target="_blank" rel="noopener noreferrer">
              Cómo llegar <MapPin size={19} />
            </a>
          </div>
        </div>
      </section>

      <section className="video-strip" id="about">
        <div className="video-image">
          <Image src={img("video-model.webp")} alt="Atleta entrenando" width={667} height={402} />
          <a className="video-link" href="#membership">
            <span>
              <ArrowRight size={20} />
            </span>
            Ver planes
          </a>
        </div>
        <div className="hero-card" aria-label="Propuesta de MATOS GYM">
          <div className="card-head">
            <h2>Entrená con seguimiento</h2>
          </div>
          <p>
            No se trata solo de ir al gimnasio: se trata de saber qué hacer,
            cómo hacerlo y cómo sostenerlo. En MATOS GYM podés elegir
            entrenamiento grupal, personalizado o asesoramiento online.
          </p>
          <strong>Presencial en Saladas, Corrientes</strong>
        </div>
      </section>

      <section className="marquee-band" aria-label="Lema del gimnasio">
        <span>
          MATOS•GYM•GRUPAL•PERSONALIZADO•FUERZA•SALUD•SALADAS•CORRIENTES•
        </span>
      </section>

      <section className="benefits-section">
        <div className="section-copy">
          <p className="eyebrow">Sentite bien,</p>
          <h2>entrená mejor.</h2>
          <p>
            Una propuesta directa para personas que quieren entrenar con guía,
            mejorar hábitos y tener un lugar claro al cual volver cada semana.
          </p>
          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={34} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <Image src={img("sentite-bien.webp")} alt="Mujer entrenando fuerza en MATOS GYM" width={900} height={1001} />
      </section>

      <section className="split-band">
        <Image src={img("s1.webp")} alt="Persona corriendo en el gimnasio" width={600} height={500} />
        <div>
          <p className="eyebrow">Superá tus límites y</p>
          <h2>alcanzá tus objetivos</h2>
          <p>
            En MATOS GYM trabajás fuerza, resistencia y confianza con planes
            adaptados a tu ritmo. Consultá horarios y elegí la modalidad que
            mejor se ajuste a tu semana.
          </p>
          <div className="stats">
            {stats.map(([number, label]) => (
              <div key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <Image src={img("s2.webp")} alt="Pesas dentro del gimnasio" width={600} height={500} />
      </section>

      <section className="classes" id="classes">
        <div className="section-heading">
          <p className="eyebrow">Modalidades</p>
          <h2>Elegí cómo querés entrenar</h2>
        </div>
        <div className="class-grid">
          {classes.map((item) => (
            <article key={item.title} className="class-card">
              <Image src={item.image} alt={item.title} width={360} height={260} />
              <div>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Sumarme <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="join-band">
        <p className="eyebrow">Tu próximo entrenamiento</p>
        <h2>empieza con un mensaje</h2>
        <a className="primary-action" href={whatsappHref} target="_blank" rel="noopener noreferrer">
          Hablar con MATOS GYM <ArrowRight size={20} />
        </a>
      </section>

      <section className="social-proof" id="social">
        <div className="section-heading">
          <p className="eyebrow">Comunidad Matos</p>
          <h2>Seguinos y entrená con nosotros</h2>
        </div>
        <div className="social-proof-grid">
          {socialProfiles.map(({ platform, icon: Icon, href, stat, detail, text }) => (
            <article key={platform} className="social-card">
              <div className="social-card-head">
                <Icon size={28} />
                <span>{platform}</span>
              </div>
              <strong>{stat}</strong>
              <p>{detail}</p>
              <p>{text}</p>
              <a href={href} target="_blank" rel="noopener noreferrer">
                Ver {platform} <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
        <div className="profile-facts" aria-label="Datos destacados de MATOS GYM">
          {profileFacts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
      </section>

      <section className="method-section" id="method">
        <div className="section-heading">
          <p className="eyebrow">Método</p>
          <h2>Cómo trabajamos</h2>
        </div>
        <div className="method-grid">
          {methodSteps.map(({ icon: Icon, title, text }, index) => (
            <article key={title}>
              <span>{`0${index + 1}`}</span>
              <Icon size={34} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing" id="membership">
        <div className="section-heading">
          <p className="eyebrow">Aranceles</p>
          <h2>Planes claros para empezar</h2>
        </div>
        <div className="plan-grid">
          {plans.map((plan) => (
            <article key={plan.name}>
              <span className="plan-tag">{plan.tag}</span>
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <p className="plan-description">{plan.description}</p>
              {plan.perks.map((perk) => (
                <p key={perk}>{perk}</p>
              ))}
              <a href={plan.href} target="_blank" rel="noopener noreferrer">
                Consultar <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="visit-band" id="visit">
        <div>
          <p className="eyebrow">Ubicación y horarios</p>
          <h2>Estamos en Avenida Pujol 1741</h2>
          <p>
            MATOS GYM está en Saladas, Corrientes. Escribinos para consultar
            horarios disponibles, modalidad de entrenamiento y cupos del mes.
          </p>
          <div className="visit-actions">
            <a className="primary-action" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Consultar horarios <ArrowRight size={20} />
            </a>
            <a className="secondary-action dark" href={mapDirectionsHref} target="_blank" rel="noopener noreferrer">
              Abrir mapa <MapPin size={19} />
            </a>
          </div>
        </div>
        <div className="visit-card">
          {visitFacts.map(([label, value]) => (
            <p key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </p>
          ))}
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="section-heading">
          <p className="eyebrow">Nuestro gimnasio</p>
          <h2>Galería de fotos</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((photo, index) => (
            <Image
              key={photo}
              src={img(photo)}
              alt={`Instalaciones y entrenamiento en MATOS GYM, foto ${index + 1}`}
              width={600}
              height={600}
            />
          ))}
        </div>
      </section>

      <footer id="contact">
        <div>
          <Image src={img("matos-logo.webp")} alt="MATOS GYM" width={180} height={180} />
          <h2>Empezá hoy en MATOS GYM</h2>
          <a className="primary-action" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Escribinos por WhatsApp <ArrowRight size={20} />
          </a>
        </div>
        <div className="footer-contact">
          <p>
            <MapPin size={18} /> {address}
          </p>
          <p>
            <Phone size={18} /> +54 9 3794 59-2965
          </p>
          <p>
            <Mail size={18} /> <a href={`mailto:${email}`}>{email}</a>
          </p>
          <div className="socials">
            <a href={facebookHref} target="_blank" rel="noopener noreferrer" aria-label="Facebook de MATOS GYM">
              <Facebook size={20} />
            </a>
            <a href={instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram de MATOS GYM">
              <Instagram size={20} />
            </a>
          </div>
          <iframe
            className="map-frame"
            title="Ubicación de MATOS GYM"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-popups"
            allow="fullscreen"
          />
          <a className="map-link" href={mapDirectionsHref} target="_blank" rel="noopener noreferrer">
            Abrir ubicación en Google Maps <MapPin size={17} />
          </a>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp Web de MATOS GYM"
      >
        <Image src={img("whatsapp-icon.webp")} alt="WhatsApp" width={56} height={56} />
      </a>
    </main>
  );
}

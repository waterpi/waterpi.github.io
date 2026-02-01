import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import {
    Droplets,
    Code2,
    Activity,
    Mail,
    ArrowRight,
    BookOpen,
    Globe2,
    Users,
    Lightbulb,
    Award,
    Terminal,
    Cpu,
    Database,
    CloudRain,
    Target,
    Eye,
    Compass,
    History
} from 'lucide-react';

const LinkedinIcon = ({ size = 20 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const services = [
    {
        icon: <Droplets />,
        title: "Planificación Hídrica",
        desc: "Proyectos de ingeniería y asesoramiento técnico integral. Modelos de gestión, calidad de aguas y precipitación-escorrentía.",
        tags: ["Gestión Integral", "IIAMA", "Simulación Avanzada"]
    },
    {
        icon: <Activity />,
        title: "Abastecimiento & Redes",
        desc: "Creación de modelos hidráulicos de redes de abastecimiento y saneamiento urbano, integración con Epanet, SWMM, WS Pro, ICM y QGISRed.",
        tags: ["Abastecimiento", "Saneamiento", "Optimización"]
    },
    {
        icon: <Code2 />,
        title: "Programación a Medida",
        desc: "Desarrollo de software específico (.NET, Typescript, Python, Ruby, R-Shiny) y hojas de cálculo (VBA) para ingeniería.",
        tags: ["Plugins QGIS", "Algoritmos", "Software SSD"]
    },
    {
        icon: <Cpu />,
        title: "IA & Big Data",
        desc: "Tratamiento de grandes volúmenes de datos y aplicación de Inteligencia Artificial para la predicción hídrica.",
        tags: ["Análisis Predictivo", "Innovación"]
    }
];

const projects = [
    { name: "Qatium", role: "Colaboración Tecnológica", years: 6, desc: "Desarrollo de plataforma de gestión inteligente del agua." },
    { name: "Water4Cast", role: "Modelos de Pronóstico Hidrológico", years: 3 },
    { name: "QGISRed", role: "Complementos de Redes", years: 4 },
    { name: "AQUATOOL", role: "Desarrollo de Módulos", years: 6 },
    { name: "RS MINERVE", role: "Optimización de Algoritmos", years: 3 },
    { name: "CHJ", role: "Consultoría de Planificación", years: 4 }
];

const publications = [
    "Algoritmos Genéticos en la Optimización de Redes",
    "Modelación de Calidad en Acuíferos Complejos",
    "Sistemas de Alerta Temprana en Cuencas Mediterráneas",
    "Integración de GIS y Modelos Hidráulicos Dinámicos"
];

const Hero = () => (
    <header id="home" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedBackground />
        <div className="container">
            <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-content"
            >
                <span className="badge">Consultoría técnica & Soluciones Digitales</span>
                <h1>
                    Modelación Hidráulica <br />
                    <span className="text-gradient">& Innovación Tecnológica</span>
                </h1>
                <p className="hero-p">
                    WaterPi nace para dar respuesta a la creciente demanda de digitalización en el sector del agua, fusionando la ingeniería tradicional con las tecnologías más innovadoras.
                </p>
                <div className="btn-group">
                    <a href="#services" className="base-btn primary-btn">
                        Ver Servicios <ArrowRight size={16} />
                    </a>
                    <a href="#team" className="base-btn outline-btn">
                        Sobre Nosotros
                    </a>
                </div>
            </Motion.div>
        </div>
    </header>
);

const Concept = () => (
    <section id="concept" className="section" style={{ background: 'rgba(6, 182, 212, 0.2)' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>El Concepto WaterPi</h2>
                <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto' }}>
                    Nuestro nombre refleja nuestra identidad: la intersección perfecta entre el recurso hídrico y la capacidad analítica.
                </p>
            </div>
            <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                {[
                    { icon: <Globe2 />, title: "Recursos Hídricos", desc: "Expertos en la gestión integral del ciclo del agua" },
                    { icon: <Database />, title: "Inteligencia Artificial", desc: "Aplicamos algoritmos avanzados y Big Data" },
                    { icon: <Lightbulb />, title: "Innovación Técnica", desc: "Desarrollo de herramientas de vanguardia" },
                    { icon: <Terminal />, title: "Algoritmos", desc: "Programación orientada a la eficiencia hídrica" },
                    { icon: <Users />, title: "Compromiso Social", desc: "Vinculados a la economía social como cooperativa" },
                    { icon: <Award />, title: "Excelencia", desc: "Conectados con los principales centros de investigación" }
                ].map((item, i) => (
                    <div key={i} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div className="icon-box" style={{ margin: '0 auto 1.5rem' }}>{item.icon}</div>
                        <h3 className="mb-2" style={{ fontSize: '1.2rem' }}>{item.title}</h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const MissionVision = () => (
    <section className="section">
        <div className="container">
            <div className="grid-3">
                <div className="card" style={{ border: 'none', background: 'transparent', padding: '1rem' }}>
                    <div className="icon-box" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <Target size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Misión</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                        Desarrollar proyectos de ingeniería especializados en Recursos Hídricos y Medio Ambiente, apoyándonos en la creación y aplicación de herramientas innovadoras que optimicen la gestión y conservación de estos recursos.
                    </p>
                </div>
                <div className="card" style={{ border: 'none', background: 'transparent', padding: '1rem' }}>
                    <div className="icon-box" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <Eye size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Visión</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                        Impulsar la transformación sostenible en la gestión del agua, integrando tecnología y conocimiento para proteger y restaurar el equilibrio ambiental a largo plazo.
                    </p>
                </div>
                <div className="card" style={{ border: 'none', background: 'transparent', padding: '1rem' }}>
                    <div className="icon-box" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <Compass size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Filosofía</h3>
                    <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                        Brindar un servicio personalizado y de alta calidad, adaptado a las necesidades específicas de cada cliente, garantizando soluciones efectivas y responsables.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const AboutSection = () => (
    <section id="about" className="section">
        <div className="container">
            <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ingeniería con Valor Social</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        WaterPi es una <strong>Cooperativa de Trabajo Asociado</strong> fundada sobre los principios de responsabilidad, excelencia técnica y compromiso con la gestión sostenible del agua.
                    </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                        <div className="icon-box" style={{ flexShrink: 0, margin: 0 }}><History /></div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Nuestra Historia</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6' }}>
                                Constituida en 2018, surge de la unión de ingenieros apasionados por la hidráulica y la programación para transferir conocimiento a la sociedad.
                            </p>
                        </div>
                    </div>
                    <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                        <div className="icon-box" style={{ flexShrink: 0, margin: 0 }}><Target /></div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Misión Cooperativa</h3>
                            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.6' }}>
                                Priorizamos a las personas, buscando la estabilidad profesional y la creación de valor real para nuestros clientes y el medio ambiente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TeamSection = () => (
    <section id="team" className="section" style={{ background: 'rgba(6, 182, 212, 0.2)' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem' }}>Nuestro Equipo</h2>
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '4rem',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                <div style={{ textAlign: 'center', flex: '1', minWidth: '250px' }}>
                    <img src="/assets/edgar.jpg" alt="Edgar Belda" style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '3px solid rgba(6, 182, 212, 0.2)' }} />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>Edgar Belda</h3>
                        <a href="https://www.linkedin.com/in/edgarbelda/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', display: 'flex' }}>
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                    <p style={{ color: '#17c7d2', fontStyle: 'italic', fontSize: '0.9rem' }}>Socio Fundador</p>
                </div>
                <div style={{ textAlign: 'center', flex: '1', minWidth: '250px' }}>
                    <img src="/assets/nestor.jpg" alt="Néstor Lerma" style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '3px solid rgba(6, 182, 212, 0.2)' }} />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>Néstor Lerma</h3>
                        <a href="https://www.linkedin.com/in/neslerel/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', display: 'flex' }}>
                            <LinkedinIcon size={18} />
                        </a>
                    </div>
                    <p style={{ color: '#17c7d2', fontStyle: 'italic', fontSize: '0.9rem' }}>Socio Fundador</p>
                </div>
            </div>
        </div>
    </section>
);

const ServicesGrid = () => (
    <section id="services" className="section" style={{ background: 'rgba(6, 182, 212, 0.2)' }}>
        <div className="container">
            <div className="mb-4">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Servicios</h2>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '800px' }}>
                    Aportamos soluciones técnicas para organismos públicos y empresas privadas.
                </p>
            </div>
            <div className="grid-3">
                {services.map((s, i) => (
                    <div key={i} className="card">
                        <div className="icon-box">{s.icon}</div>
                        <h3 className="mb-2">{s.title}</h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{s.desc}</p>
                        <div className="tag-list">
                            {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Portfolio = () => (
    <section id="portfolio" className="section">
        <div className="container">
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Portfolio</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        Nuestra actividad está intrínsecamente ligada a la academia. Colaboramos activamente con el IIAMA y otros centros de referencia internacional.
                    </p>
                    <div className="list-group">
                        {publications.map((p, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '1rem', padding: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <BookOpen size={20} className="text-cyan" />
                                <span style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>{p}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="card" style={{ padding: '2rem' }}>
                        <h3 className="mb-4" style={{ fontSize: '1.25rem' }}>Proyectos Destacados</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {projects.map((p, i) => (
                                <div key={i} style={{ padding: '1rem', background: '#020617', borderRadius: '0.75rem', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontWeight: 'bold', color: 'white', fontSize: '0.9rem' }}>{p.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{p.role}</div>
                                    </div>
                                    <div style={{
                                        fontSize: '0.7rem',
                                        padding: '0.2rem 0.6rem',
                                        background: 'rgba(6, 182, 212, 0.1)',
                                        color: 'var(--accent)',
                                        borderRadius: '4px',
                                        fontWeight: 'bold',
                                        border: '1px solid rgba(6, 182, 212, 0.2)'
                                    }}>
                                        {'>'} {p.years} años
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <Link
                    to="/portfolio"
                    className="base-btn primary-btn"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '1rem',
                        padding: '1rem 2rem'
                    }}
                >
                    Ver Portfolio Completo
                    <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="section" style={{ background: 'rgba(6, 182, 212, 0.2)', textAlign: 'center' }}>
        <div className="container">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>¿Hablamos de agua?</h2>
            <p style={{ marginBottom: '3rem', fontSize: '1.25rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto 3rem' }}>
                Estamos listos para tu próximo reto técnico.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <a href="mailto:info@waterpi.com" className="base-btn primary-btn" style={{ fontSize: '1.1rem', padding: '1rem 3.5rem' }}>
                    <Mail size={22} style={{ marginRight: '0.75rem' }} />
                    info@waterpi.com
                </a>
            </div>
        </div>
    </section>
);

export const Home = () => {
    return (
        <>
            <Hero />
            <Concept />
            <MissionVision />
            <ServicesGrid />
            <Portfolio />
            <TeamSection />
            <AboutSection />
            <Contact />
        </>
    );
};

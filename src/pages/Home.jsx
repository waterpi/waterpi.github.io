import React from 'react';
import { motion } from 'framer-motion';
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
    CloudRain
} from 'lucide-react';

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
        desc: "Creación de modelos hidráulicos de redes de abastecimiento y saneamiento urbano, integración con Epanet y QGISRed.",
        tags: ["Epanet-QGISRed", "Drenaje Urbano", "Optimización"]
    },
    {
        icon: <Code2 />,
        title: "Programación a Medida",
        desc: "Desarrollo de software específico (VB.NET, C#, Python, R-Shiny) y hojas de cálculo (VBA) para ingeniería.",
        tags: ["Plugins QGIS", "Algoritmos", "Software SSD"]
    },
    {
        icon: <Cpu />,
        title: "IA & Big Data",
        desc: "Tratamiento de grandes volúmenes de datos y aplicación de Inteligencia Artificial para la predicción hídrica.",
        tags: ["Análisis Predictivo", "Innovación", "Datos Mashup"]
    }
];

const projects = [
    { name: "Qatium", role: "Colaboración Tecnológica", desc: "Desarrollo de plataforma de gestión inteligente del agua." },
    { name: "AQUATOOL", role: "Desarrollo de Módulos" },
    { name: "RS MINERVE", role: "Optimización de Algoritmos" },
    { name: "QGISRed", role: "Complementos de Redes" },
    { name: "CHJ", role: "Consultoría de Planificación" }
];

const publications = [
    "Algoritmos Genéticos en la Optimización de Redes",
    "Modelación de Calidad en Acuíferos Complejos",
    "Sistemas de Alerta Temprana en Cuencas Mediterráneas",
    "Integración de GIS y Modelos Hidráulicos Dinámicos"
];

const Hero = () => (
    <header id="home" className="hero">
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-content"
            >
                <span className="badge">Consultoría técnica & Soluciones Digitales</span>
                <h1>
                    Modelación Hidráulica <br />
                    <span className="text-gradient">& Ingeniería del Agua</span>
                </h1>
                <p className="hero-p">
                    WaterPi nace para dar respuesta a la creciente demanda de tecnificación en el sector del agua, fusionando la ingeniería tradicional con las tecnologías más innovadoras.
                </p>
                <div className="btn-group">
                    <a href="#services" className="base-btn primary-btn">
                        Ver Servicios <ArrowRight size={16} />
                    </a>
                    <a href="/nosotros" className="base-btn outline-btn">
                        Sobre Nosotros
                    </a>
                </div>
            </motion.div>
        </div>
    </header>
);

const Concept = () => (
    <section id="concept" className="section" style={{ background: 'rgba(2, 6, 23, 0.5)' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>El Concepto WaterPi</h2>
                <p style={{ color: '#94a3b8', maxWidth: '700px', margin: '0 auto' }}>
                    Nuestro nombre refleja nuestra identidad: la intersección perfecta entre el recurso hídrico y la capacidad analítica.
                </p>
            </div>
            <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                {[
                    { icon: <Globe2 />, title: "Water Resources", desc: "Expertos en la gestión integral del ciclo del agua." },
                    { icon: <Database />, title: "Artificial Intelligence", desc: "Aplicamos algoritmos avanzados y Big Data." },
                    { icon: <Lightbulb />, title: "Technical Innovation", desc: "Desarrollo de herramientas de vanguardia." },
                    { icon: <Terminal />, title: "Algorithms", desc: "Programación orientada a la eficiencia hídrica." },
                    { icon: <Users />, title: "Responsible Projects", desc: "Compromiso social como cooperativa técnica." },
                    { icon: <Award />, title: "Excellence", desc: "Vinculados a los principales centros de investigación." }
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

const ServicesGrid = () => (
    <section id="services" className="section">
        <div className="container">
            <div className="mb-4">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Servicios y Especialidades</h2>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px' }}>
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

const Research = () => (
    <section id="research" className="section" style={{ background: 'rgba(6, 182, 212, 0.02)' }}>
        <div className="container">
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Investigación & Desarrollo</h2>
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
                                <div key={i} style={{ padding: '1rem', background: '#020617', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
                                    <div style={{ fontWeight: 'bold', color: 'white', fontSize: '0.9rem' }}>{p.name}</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{p.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const GrantSection = () => (
    <section className="section" style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', opacity: 0.6 }}>
                <div style={{ fontSize: '0.8rem', color: '#64748b', maxWidth: '500px', textAlign: 'center' }}>
                    Proyecto subvencionado por la Conselleria de Economía Sostenible, Sectores Productivos, Comercio y Trabajo para el fomento de cooperativas.
                </div>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="section">
        <div className="container">
            <div className="card" style={{ padding: '4rem', textAlign: 'center', background: 'rgba(6, 182, 212, 0.05)', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>¿Hablamos de agua?</h2>
                <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', color: '#94a3b8' }}>
                    Estamos listos para tu próximo reto técnico.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <a href="mailto:info@waterpi.com" className="base-btn primary-btn" style={{ fontSize: '1.1rem', padding: '1rem 3rem', background: '#06b6d4', color: 'white'  }}>
                        <Mail size={22} style={{ marginRight: '0.5rem' }} />
                        info@waterpi.com
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export const Home = () => {
    return (
        <>
            <Hero />
            <Concept />
            <ServicesGrid />
            <Research />
            <GrantSection />
            <Contact />
        </>
    );
};

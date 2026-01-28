import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, History } from 'lucide-react';

export const About = () => {
    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                    >
                        <span className="badge">Nuestra Esencia</span>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Ingeniería con Valor Social</h1>
                        <p style={{ fontSize: '1.25rem', color: '#94a3b8', lineHeight: '1.8' }}>
                            WaterPi no es solo una consultora de ingeniería. Somos una <strong>Cooperativa de Trabajo Asociado</strong> fundada sobre los principios de responsabilidad, excelencia técnica y compromiso con la gestión sostenible del agua.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-card)' }}>
                <div className="container">
                    <div className="grid-3">
                        <div className="card">
                            <div className="icon-box"><History /></div>
                            <h3>Nuestra Historia</h3>
                            <p style={{ color: '#94a3b8', marginTop: '1rem' }}>
                                Constituida en 2018, WaterPi surge de la unión de dos ingenieros de caminos apasionados por la hidráulica. Tras años colaborando en proyectos de investigación, decidimos crear una estructura que nos permitiera transferir ese conocimiento a la sociedad.
                            </p>
                        </div>
                        <div className="card">
                            <div className="icon-box"><Target /></div>
                            <h3>Misión Cooperativa</h3>
                            <p style={{ color: '#94a3b8', marginTop: '1rem' }}>
                                Como entidad de la Economía Social, priorizamos a las personas. Nuestro objetivo no es solo el beneficio económico, sino la estabilidad profesional de nuestros socios y la creación de valor real para nuestros clientes y el medio ambiente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', textAlign: 'center' }}>Nuestro Equipo</h2>
                    <div className="grid-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="/assets/edgar.jpg" alt="Edgar Belda" style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>Edgar Belda</h3>
                            <p style={{ color: '#17c7d2', fontStyle: 'italic', marginBottom: '1rem' }}>Socio Fundador</p>
                            <p style={{ marginBottom: '0.5rem' }}>Ingeniero de Caminos Canales y Puertos</p>
                            <p style={{ marginBottom: '0.5rem' }}>Máster en Ingeniería Hidráulica y Medio Ambiente</p>
                            <p style={{ marginBottom: '0.5rem' }}>Estudiante de Doctorado en Ingeniería del Agua y Medioambiental</p>
                            <p>Especialista en calidad de aguas, diseñador y programador</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img src="/assets/nestor.jpg" alt="Néstor Lerma" style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'contain', padding: '10px', marginBottom: '1.5rem', marginTop: '2rem' }} />
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>Néstor Lerma</h3>
                            <p style={{ color: '#17c7d2', fontStyle: 'italic', marginBottom: '1rem' }}>Socio Fundador</p>
                            <p style={{ marginBottom: '0.5rem' }}>Ingeniero de Caminos Canales y Puertos</p>
                            <p style={{ marginBottom: '0.5rem' }}>Máster en Ingeniería Hidráulica y Medio Ambiente</p>
                            <p style={{ marginBottom: '0.5rem' }}>Doctor en Ingeniería del Agua y Medioambiental</p>
                            <p>Especialista en programación, hojas de cálculo y calibración de modelos</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>8 años de experiencia desde 2018</h2>
                            <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                A lo largo de estos años, hemos participado en multitud de proyectos de alto nivel, colaborando con administraciones públicas, grandes consultoras y centros de investigación como el IIAMA.
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                Nuestra especialización en herramientas como AQUATOOL, EPANET y SWMM nos ha convertido en un socio tecnológico de referencia en el sector del agua en España.
                            </p>
                        </div>
                        <div className="card" style={{ padding: '3rem', textAlign: 'center', border: '1px solid var(--accent)' }}>
                            <Award size={48} className="text-cyan" style={{ marginBottom: '1.5rem' }} />
                            <div style={{ fontSize: '3rem', fontWeight: '800', color: 'white' }}>+8</div>
                            <div style={{ textTransform: 'uppercase', letterSpacing: '2px', color: '#64748b', fontWeight: 'bold' }}>Años Innovando</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

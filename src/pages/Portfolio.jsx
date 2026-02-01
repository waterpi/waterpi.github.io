import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
    ArrowRight,
    ExternalLink,
    Code2,
    Database,
    MapPin,
    Droplets,
    GitBranch,
    Cpu,
    Globe2,
    Layers,
    Settings,
    BarChart3
} from 'lucide-react';

const PortfolioHero = () => (
    <header className="hero" style={{ minHeight: '50vh' }}>
        <div className="container">
            <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-content"
            >
                <h1>
                    Portfolio
                </h1>
                <p className="hero-p">
                    Descubre los proyectos en los que hemos trabajado y cómo hemos contribuido a la mejora de la gestión de los Recursos Hídricos a través de tecnología avanzada e innovación.
                </p>
            </Motion.div>
        </div>
    </header>
);

const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <section className="section" style={{
            background: isEven ? 'transparent' : 'rgba(6, 182, 212, 0.2)',
            padding: '4rem 0'
        }}>
            <div className="container">
                <div className="portfolio-grid" style={{
                    display: 'grid',
                    gap: '3rem',
                    alignItems: 'start'
                }}>
                    {/* Image Section */}
                    {project.image && (
                        <Motion.div
                            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{
                                order: isEven ? 1 : 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div style={{
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                border: '1px solid var(--border)',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                                width: '100%',
                                maxWidth: '600px'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </Motion.div>
                    )}

                    {/* Content Section */}
                    <Motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            order: isEven ? 2 : 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '1rem',
                            color: 'var(--accent)',
                            lineHeight: '1.2'
                        }}>
                            {project.title}
                        </h2>

                        {project.duration && (
                            <div style={{
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                background: 'rgba(6, 182, 212, 0.1)',
                                border: '1px solid rgba(6, 182, 212, 0.2)',
                                borderRadius: '0.5rem',
                                marginBottom: '1.5rem',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                width: 'fit-content'
                            }}>
                                Duración: {project.duration}
                            </div>
                        )}

                        {project.role && (
                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{
                                    color: '#94a3b8',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Rol:
                                </span>
                                <p style={{
                                    color: '#cbd5e1',
                                    fontSize: '1rem',
                                    marginTop: '0.5rem',
                                    lineHeight: '1.7'
                                }}>
                                    {project.role}
                                </p>
                            </div>
                        )}

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: '1rem',
                                color: 'white'
                            }}>
                                Descripción
                            </h3>
                            {Array.isArray(project.description) ? (
                                project.description.map((desc, i) => (
                                    <p key={i} style={{
                                        color: '#94a3b8',
                                        lineHeight: '1.8',
                                        marginBottom: '1rem',
                                        fontSize: '0.95rem'
                                    }}>
                                        {desc}
                                    </p>
                                ))
                            ) : (
                                <p style={{
                                    color: '#94a3b8',
                                    lineHeight: '1.8',
                                    fontSize: '0.95rem'
                                }}>
                                    {project.description}
                                </p>
                            )}
                        </div>

                        {project.contributions && (
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '1rem',
                                    color: 'white'
                                }}>
                                    Contribuciones Destacadas
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem'
                                }}>
                                    {project.contributions.map((contrib, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'start',
                                            gap: '0.75rem'
                                        }}>
                                            <ArrowRight
                                                size={18}
                                                style={{
                                                    color: 'var(--accent)',
                                                    flexShrink: 0,
                                                    marginTop: '0.25rem'
                                                }}
                                            />
                                            <span style={{
                                                color: '#cbd5e1',
                                                lineHeight: '1.6',
                                                fontSize: '0.9rem'
                                            }}>
                                                {contrib}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.works && (
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '1rem',
                                    color: 'white'
                                }}>
                                    Trabajos Realizados
                                </h3>
                                <ul style={{
                                    listStyle: 'none',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem'
                                }}>
                                    {project.works.map((work, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'start',
                                            gap: '0.75rem'
                                        }}>
                                            <ArrowRight
                                                size={18}
                                                style={{
                                                    color: 'var(--accent)',
                                                    flexShrink: 0,
                                                    marginTop: '0.25rem'
                                                }}
                                            />
                                            <span style={{
                                                color: '#cbd5e1',
                                                lineHeight: '1.6',
                                                fontSize: '0.9rem'
                                            }}>
                                                {work}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.technologies && (
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '1rem',
                                    color: 'white'
                                }}>
                                    Tecnologías Utilizadas
                                </h3>
                                <div className="tag-list">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="tag"
                                            style={{
                                                background: 'rgba(6, 182, 212, 0.1)',
                                                color: 'var(--accent)',
                                                border: '1px solid rgba(6, 182, 212, 0.2)',
                                                padding: '0.5rem 1rem',
                                                fontSize: '0.75rem'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="base-btn primary-btn"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    width: 'fit-content'
                                }}
                            >
                                Más información
                                <ExternalLink size={16} />
                            </a>
                        )}
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export const Portfolio = () => {
    const projects = [
        {
            title: 'Qatium',
            duration: '6 años',
            role: 'Investigadores, desarrolladores y un híbrido entre ingenieros de producto y programadores.',
            description: 'Hemos contribuido al desarrollo de esta innovadora plataforma de gestión inteligente del agua, combinando modelación hidráulica, programación avanzada y diseño de soluciones personalizadas para las necesidades de los clientes.',
            contributions: [
                'Modelación hidráulica utilizando herramientas como Epanet, EpanetJS y TypeScript.',
                'Construcción de gemelos digitales y creación de sinópticos personalizados.',
                'Gestión de sensórica y datos de telelectura.',
                'Desarrollo de modelos mediante inferencia, calibración y validación de datos.',
                'Visualización de resultados e inventario de activos (assets).',
                'Creación de conectores entre diferentes formatos y generación de modelos a partir de datos GIS.',
                'Investigación para mejorar la toolkit de Epanet.',
                'Implementación de sistemas de alerta temprana y desarrollo de plugins específicos según las necesidades de los clientes.'
            ],
            technologies: [
                'Docker', 'React', 'TypeScript', 'Jest', 'Python', 'Node.js',
                'Mapbox', 'Elastic', 'Mixpanel', 'Honeycomb', 'Jira', 'Trello',
                'Miro', 'Tinybird'
            ],
            link: 'https://qatium.com',
            image: '/assets/qatium.png'
        },
        {
            title: 'Water4Cast',
            subtitle: 'Plataforma Avanzada de Predicción y Gestión Hídrica',
            role: 'Desarrollo completo y exhaustivo de la aplicación web, abarcando tanto el frontend como el backend, la integración de datos y la interfaz de usuario.',
            description: [
                'Water4cast es una plataforma digital de vanguardia diseñada para la toma de decisiones informadas en la gestión de recursos hídricos. Su principal objetivo es consolidar y visualizar una amplia gama de predicciones y modelos predictivos en un entorno único y accesible.',
                'La plataforma integra de forma dinámica: Predicciones Meteorológicas (datos en tiempo real y a futuro sobre variables climáticas clave), Predicciones Ecohidrológicas (modelos que simulan el ciclo del agua), Predicciones Agronómicas (herramientas para optimizar el riego), Predicciones Medioambientales (evaluación del riesgo de sequía e inundaciones), y Gestión de Recursos Hídricos (módulos de apoyo para la planificación).',
                'La arquitectura de Water4cast está diseñada para manejar grandes volúmenes de datos geoespaciales y temporales, proporcionando a los usuarios una visión predictiva y operativa esencial para la resiliencia hídrica.'
            ],
            contributions: [
                'Creación de un Visor GIS Interactivo y Avanzado: Se implementó un potente visor de Sistemas de Información Geográfica (GIS) utilizando la tecnología OpenStreetMaps como base cartográfica.',
                'Desarrollo de un Sistema de Autenticación y Personalización de Usuario: Se diseñó e implementó un robusto sistema de login y gestión de perfiles.',
                'Funcionalidades de consulta de datos por punto geográfico, aplicación de filtros temporales y visualización de series históricas.',
                'Cada usuario tiene la capacidad de definir sus áreas de interés y estudio (cuencas, parcelas, puntos de control) y personalizar el panel de control.'
            ],
            technologies: [
                'HTML', 'CSS', 'TypeScript', 'OpenStreetMaps'
            ],
            link: 'https://water4cast.webs.upv.es',
            image: '/assets/water4cast.jpg'
        },
        {
            title: 'QGISRed',
            subtitle: 'Desarrollo de un Plugin para la Gestión Avanzada de Redes de Abastecimiento',
            role: 'Liderazgo en el desarrollo y la implementación de un plugin especializado para la plataforma de Sistemas de Información Geográfica (SIG) QGIS.',
            description: [
                'El proyecto QGISRed consiste en la creación de una herramienta de software robusta y altamente funcional integrada como un plugin de QGIS. Su objetivo primordial es transformar la forma en que los profesionales del sector hídrico abordan el modelado, el análisis y la planificación de redes de abastecimiento urbano.',
                'Este plugin está diseñado para ofrecer una interfaz intuitiva y potentes funcionalidades de geoprocesamiento que facilitan: Modelado Hidráulico Detallado (digitalización y estructuración precisa de la red), Análisis de Rendimiento y Vulnerabilidad (simulación de escenarios de demanda, cálculo de pérdidas de carga, determinación de presiones en puntos críticos).'
            ],
            technologies: [
                'C#', 'XAML', 'Python', 'QGIS'
            ],
            link: 'https://qgisred.upv.es',
            image: '/assets/qgisred.png'
        },
        {
            title: 'Aquatool',
            role: 'Desarrollo avanzado y mejora continua de módulos de cálculo hidráulico y de gestión, además de formación académica especializada a nivel internacional.',
            description: [
                'Nuestra participación en el proyecto Aquatool, una plataforma integral para la simulación y gestión de recursos hídricos, es fundamental. Colaboramos estrechamente con el equipo de desarrollo para la concepción, implementación y mejora continua. El objetivo es proporcionar herramientas de análisis robustas y precisas para profesionales en el sector de la ingeniería hidráulica y la planificación ambiental.'
            ],
            contributions: [
                'Desarrollo Avanzado de Herramientas de Modelización: Colaboramos en el desarrollo continuo de los módulos de cálculo de Aquatool, incluyendo las principales herramientas de simulación, además de otras herramientas secundarias clave como EvalHid, Caudeco, AqtPlayer, RREA y Mashwin.',
                'Formación y Transferencia de Conocimiento: Impartimos cursos internacionales especializados dirigidos a ingenieros, gestores y académicos, cubriendo desde el uso avanzado de los módulos SIMGES y GESCAL hasta los principios teóricos subyacentes en la modelización hidráulica y la gestión integrada de recursos hídricos (GIRH).'
            ],
            works: [
                'Junta Central (JC) de Usuarios del Alto Vinalopó: Modelación de alternativas para el suministro de caudal a los regantes de la JC, enmarcado dentro del Plan Hidrológico del Júcar.',
                'Regantes del Alto Vinalopó: Modelo de gestión incluyendo todos los acuíferos, enmarcado dentro del Plan Hidrológico del Júcar.',
                'Ministerio del Medio Ambiente de El Salvador: Curso online sobre el software.',
                'TYPSA: Calibración de modelos de calidad con diferentes contaminantes.'
            ],
            technologies: [
                'C#', 'VB.NET', 'Windows Forms', 'XAML', 'VBA', 'DotSpatial'
            ],
            link: 'https://aquatool.webs.upv.es',
            image: '/assets/aquatool.png'
        },
        {
            title: 'Aquarius',
            role: 'Investigador, desarrollador y un híbrido entre ingeniero de producto y programador.',
            description: [
                'Desarrollo de una suite de herramientas orientadas a integrar, limpiar, gestionar y exportar datos para el software AQUARIUS. Las soluciones están diseñadas para automatizar flujos de trabajo de campo y de control de calidad, garantizando trazabilidad y reversibilidad en todas las operaciones.'
            ],
            contributions: [
                'Importadores y Parsers: Desarrollo de conectores para archivos Kisters (AQ_Kisters) e importación masiva de localizaciones desde CSV con validaciones geográficas y de metadatos (AQ_CreateLocations).',
                'Gestión de Visitas: Herramientas para crear, actualizar, validar y eliminar visitas/inspecciones en lote, con soporte import/export y modo dry-run (AQ_Visits, AQ_DeleteVisits).',
                'Series Temporales: Modificación en lote de parámetros de series temporales con preview y opciones de rollback (AQ_CreateTimeSeriesData).',
                'Exportación y Reporting: Exportador de datos a formatos estándar (CSV/Excel) y generador automático de informes técnicos (PDF/HTML) a partir de ficheros de aforos con plantillas configurables (AQ_ExportData, AQ_Reports).',
                'Buenas Prácticas: Validaciones automáticas, auditoría y logs, modo simulación (dry-run), capacidad de rollback y arquitectura modular para integrarse en pipelines de datos.'
            ],
            technologies: [
                'C#', '.NET', 'CSV Parsing', 'AQUARIUS API/SDK', 'HTML/PDF Generation',
                'Excel Export', 'CLI Tools', 'Logging & Auditing'
            ],
            link: 'https://aquaticinformatics.com/products/aquarius-environmental-water-data-management/',
            image: '/assets/aquarius.png'
        }
    ];

    return (
        <>
            <PortfolioHero />
            {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </>
    );
};

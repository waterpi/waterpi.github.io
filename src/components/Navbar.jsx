import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Servicios', href: '/#services' },
        { name: 'Investigación', href: '/#research' },
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Contacto', href: '/#contact' },
    ];

    // Helper to handle hash navigation from other pages
    const handleNavClick = (e, href) => {
        setMobileMenuOpen(false);
        if (href.startsWith('/#')) {
            const id = href.replace('/#', '');
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Logo className="navbar-logo" style={{ height: '36px', width: 'auto' }} />
                </Link>

                <div className="nav-links">
                    {navLinks.map(link => (
                        link.href.startsWith('/#') && location.pathname === '/' ? (
                            <a key={link.name} href={link.href.replace('/', '')}>{link.name}</a>
                        ) : (
                            <Link key={link.name} to={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.name}</Link>
                        )
                    ))}
                    <a href="#contact" className="base-btn primary-btn" style={{ padding: '0.6rem 1.2rem', background: '#06b6d4', color: 'white'  }}>
                        Hablemos
                    </a>
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        className="mobile-drawer"
                    >
                        <nav className="mobile-nav-links">
                            {navLinks.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="base-btn primary-btn" style={{ background: '#06b6d4', color: 'white' }}>
                                Contactar
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
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
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Nosotros', href: '/#team' },
    ];

    // Handle hash navigation after route change
    useEffect(() => {
        const hash = window.location.hash;
        if (hash && location.pathname === '/') {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    // Helper to handle hash navigation from other pages
    const handleNavClick = (e, href) => {
        setMobileMenuOpen(false);
        if (href === '/' || href === '/#home') {
            if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else if (href.startsWith('/#')) {
            // If we're already on home page, scroll directly
            if (location.pathname === '/') {
                e.preventDefault();
                const id = href.replace('/#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // If we're on another page, let React Router navigate
            // The useEffect above will handle the scrolling after navigation
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
                    <Link
                        to="/#contact"
                        className="base-btn primary-btn"
                        style={{ padding: '0.6rem 1.2rem', background: '#06b6d4', color: 'white' }}
                        onClick={(e) => handleNavClick(e, '/#contact')}
                    >
                        Hablemos
                    </Link>
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
                    <Motion.div
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
                            <Link
                                to="/#contact"
                                onClick={(e) => handleNavClick(e, '/#contact')}
                                className="base-btn primary-btn"
                                style={{ background: '#06b6d4', color: 'white' }}
                            >
                                Contactar
                            </Link>
                        </nav>
                    </Motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

import React from 'react';
import { Logo } from './Logo';

export const Footer = () => (
    <footer className="footer-wrapper">
        <div className="container footer-content">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'inherit' }}>
                <Logo className="footer-logo" style={{ height: '30px', opacity: 0.5 }} />
                <p style={{ color: '#64748b', fontSize: '0.75rem' }}>Cooperativa de Trabajo Asociado</p>
            </div>
            <div style={{ textAlign: 'right' }}>
                <p style={{ color: '#64748b', fontSize: '0.8rem' }}>© {new Date().getFullYear()} WaterPi</p>
            </div>
        </div>
    </footer>
);

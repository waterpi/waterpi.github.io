import { motion } from 'framer-motion';
import { Hammer, Settings } from 'lucide-react';

export const Maintenance = () => {
  return (
    <div className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Settings size={64} color="var(--accent)" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -20, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Hammer size={64} color="var(--accent)" />
          </motion.div>
        </div>
        
        <div className="badge" style={{ marginBottom: '2rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' }}>
          Servicio Inactivo
        </div>
        
        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          Web no <span className="text-gradient" style={{ background: 'linear-gradient(to right, #fff, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Disponible</span>
        </h1>
        
        <p className="hero-p" style={{ margin: '0 auto 2.5rem', maxWidth: '600px' }}>
          El servicio de Waterpi se encuentra permanentemente inactivo.
        </p>
      </div>
    </div>
  );
};

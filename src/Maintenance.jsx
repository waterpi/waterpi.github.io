import React, { useState, useEffect } from 'react';

export default function MaintenanceMode() {
  const [statusMessage, setStatusMessage] = useState('Actualizando servicios…');
  const [copyText, setCopyText] = useState('Copiar email');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    // Timestamp update
    const updateTime = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long', timeStyle: 'short' });
      setTimestamp(`Última actualización: ${fmt.format(now)}`);
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 60000);

    // Status message rotation
    const messages = [
      'Calibrando modelo…',
      'Optimizando recursos…',
      'Analizando situación hídrica…',
      'Desarollando herramientas...'
    ];
    let i = 0;
    const msgInterval = setInterval(() => {
      i = (i + 1) % messages.length;
      setStatusMessage(messages[i]);
    }, 3500);

    return () => {
      clearInterval(timeInterval);
      clearInterval(msgInterval);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('info@waterpi.com');
      const prev = 'Copiar email';
      setCopyText('¡Copiado!');
      setTimeout(() => setCopyText(prev), 1200);
    } catch {
      alert('No se pudo copiar. Por favor, copia manualmente: info@waterpi.com');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      padding: '2rem',
      backgroundColor: '#0f172a',
      color: '#e5e7eb',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundImage: `radial-gradient(1200px 800px at 10% -10%, #111827, transparent 60%),
                        radial-gradient(1000px 700px at 110% 10%, rgba(56, 189, 248, .12), transparent 60%),
                        linear-gradient(180deg, #0f172a, #0f172a)`
    }}>
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.35); }
          70% { box-shadow: 0 0 0 14px rgba(56, 189, 248, 0); }
          100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
        }
      `}</style>
      <main style={{
        width: '100%',
        maxWidth: '720px',
        backgroundColor: '#111827',
        border: '1px solid rgba(148, 163, 184, 0.15)',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(2, 6, 23, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(6px)'
      }}>
        <div style={{
          position: 'absolute',
          inset: '-40% -20% auto auto',
          pointerEvents: 'none',
          width: '65vmin',
          height: '65vmin',
          borderRadius: '999px',
          background: 'radial-gradient(closest-side, rgba(56, 189, 248, .12), transparent 70%)',
          filter: 'blur(12px)',
          transform: 'rotate(12deg)'
        }} aria-hidden="true" />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem'
        }}>
          <div style={{
            width: 'clamp(60px, 15vw, 120px)',
            height: 'clamp(60px, 15vw, 120px)',
            display: 'grid',
            placeItems: 'center',
            borderRadius: '12px',
            padding: '1rem'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 59.485 19.008" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(-107.84 -118.92)">
                <g transform="matrix(.35278 0 0 -.35278 26.223 264.67)">
                  <g transform="translate(357.81 373.99)">
                    <path d="m0 0c0 1.524-0.342 2.744-1.025 3.66-0.685 0.917-1.701 1.375-3.047 1.375-0.443 0-0.851-0.017-1.227-0.05-0.376-0.034-0.684-0.073-0.927-0.116v-8.909c0.309-0.199 0.713-0.364 1.209-0.497 0.497-0.133 0.998-0.198 1.506-0.198 2.341 0 3.511 1.578 3.511 4.735m5.035 0.132c0-1.346-0.166-2.571-0.497-3.675-0.33-1.104-0.817-2.054-1.457-2.849-0.641-0.795-1.435-1.414-2.384-1.854-0.95-0.442-2.043-0.663-3.279-0.663-0.686 0-1.326 0.066-1.922 0.199-0.596 0.132-1.171 0.319-1.722 0.563v-6.558h-4.935v22.953c0.442 0.132 0.95 0.259 1.524 0.38s1.175 0.226 1.805 0.315c0.629 0.087 1.27 0.16 1.922 0.214 0.65 0.056 1.274 0.084 1.87 0.084 1.436 0 2.716-0.216 3.842-0.645 1.127-0.432 2.076-1.039 2.849-1.823 0.772-0.784 1.363-1.738 1.771-2.865 0.408-1.125 0.613-2.384 0.613-3.776" fill="#0cc7d3" />
                  </g>
                  <g transform="translate(272.35 382.54)">
                    <path d="m0 0c0.198-1.104 0.457-2.279 0.775-3.527 0.319-1.246 0.671-2.516 1.055-3.807 0.385-1.291 0.794-2.567 1.225-3.826s0.869-2.441 1.313-3.546c0.376 0.839 0.775 1.858 1.195 3.06 0.422 1.203 0.842 2.471 1.264 3.806 0.421 1.334 0.814 2.681 1.179 4.042 0.366 1.36 0.67 2.625 0.914 3.798h2.121c-0.798-3.364-1.667-6.436-2.609-9.214-0.942-2.78-1.978-5.417-3.108-7.91h-1.995c-0.336 0.781-0.686 1.65-1.053 2.609-0.368 0.96-0.747 1.987-1.136 3.078-0.388 1.092-0.765 2.239-1.129 3.441s-0.712 2.433-1.042 3.69c-0.33-1.261-0.677-2.493-1.039-3.698-0.363-1.205-0.739-2.354-1.125-3.447-0.388-1.093-0.764-2.118-1.13-3.079-0.365-0.96-0.713-1.825-1.042-2.594h-2.07c-1.133 2.493-2.168 5.133-3.105 7.914-0.939 2.782-1.803 5.852-2.595 9.21h2.285c0.245-1.17 0.549-2.435 0.915-3.791 0.366-1.358 0.759-2.705 1.181-4.04 0.421-1.335 0.848-2.599 1.279-3.793 0.431-1.192 0.835-2.21 1.213-3.048 0.422 1.098 0.847 2.278 1.271 3.539s0.823 2.532 1.197 3.813c0.373 1.281 0.725 2.545 1.053 3.795 0.329 1.247 0.626 2.422 0.887 3.525z" fill="#0cc7d3" />
                  </g>
                </g>
              </g>
            </svg>
          </div>


          <h1 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            margin: 0,
            letterSpacing: '0.2px'
          }}>Waterpi está en mantenimiento</h1>
          <p style={{
            lineHeight: 1.6,
            margin: 0,
            color: '#9ca3af',
            fontSize: '1rem'
          }}>Estamos realizando mejoras para servirte mejor. <strong>Disculpen las molestias.</strong></p>
        </div>

        <div style={{
          margin: '1.25rem 0 1.5rem 0',
          display: 'flex',
          alignItems: 'center',
          gap: '.6rem',
          fontWeight: 600
        }}>
          <span style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: '#38bdf8',
            boxShadow: '0 0 0 0 rgba(56, 189, 248, 0.35)',
            animation: 'pulse 2s infinite'
          }} />
          <span>{statusMessage}</span>
        </div>

        <div style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          marginTop: '1rem'
        }}>
          <a href="mailto:info@waterpi.com" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.5rem',
            textDecoration: 'none',
            padding: '.8rem 1rem',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, .15), rgba(37, 99, 235, .15))',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            fontWeight: 600,
            color: '#e5e7eb',
            justifyContent: 'center'
          }}>
            <MailIcon />
            info@waterpi.com
          </a>
          <button onClick={handleCopy} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '.5rem',
            textDecoration: 'none',
            padding: '.8rem 1rem',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, .15), rgba(37, 99, 235, .15))',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            fontWeight: 600,
            color: '#e5e7eb',
            cursor: 'pointer',
            fontSize: '1rem',
            justifyContent: 'center'
          }}>
            <CopyIcon />
            {copyText}
          </button>
        </div>

        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(148, 163, 184, .3), transparent)',
          margin: '1.25rem 0'
        }} />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          color: '#9ca3af',
          fontSize: '.95rem'
        }}>
          <span>{timestamp}</span>
          <span>© {new Date().getFullYear()} Waterpi</span>
        </div>
      </main>
    </div>
  );
}

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16v16H4z" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const CopyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

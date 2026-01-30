import React, { useEffect, useRef } from 'react';
import { motion as Motion } from 'framer-motion';

const AnimatedBackground = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (svgRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        svgRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        svgRef.current.style.transition = 'transform 0.3s ease-out';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const blobPaths = [
    "M250,100 C300,100 350,120 380,160 C410,200 420,250 400,300 C380,350 340,380 280,390 C220,400 160,390 120,350 C80,310 70,250 90,190 C110,130 170,100 250,100 Z",
    "M250,90 C310,95 360,125 390,175 C420,225 425,280 395,330 C365,380 310,410 250,410 C190,410 135,380 105,330 C75,280 75,220 105,165 C135,110 190,85 250,90 Z",
    "M260,95 C320,100 375,135 400,190 C425,245 420,305 385,350 C350,395 290,415 230,405 C170,395 120,360 95,305 C70,250 80,185 120,140 C160,95 200,90 260,95 Z",
    "M250,85 C315,90 370,130 395,185 C420,240 410,300 375,345 C340,390 285,415 225,410 C165,405 115,375 90,325 C65,275 70,210 105,160 C140,110 185,80 250,85 Z",
    "M245,95 C305,100 360,140 385,195 C410,250 405,310 370,360 C335,410 275,425 215,415 C155,405 105,370 85,315 C65,260 75,195 115,145 C155,95 185,90 245,95 Z",
    "M250,100 C300,100 350,120 380,160 C410,200 420,250 400,300 C380,350 340,380 280,390 C220,400 160,390 120,350 C80,310 70,250 90,190 C110,130 170,100 250,100 Z"
  ];

  return (
    <Motion.div
      ref={svgRef}
      style={{
        position: 'absolute',
        top: '50%',
        left: '45%',
        transform: 'translate(-50%, -50%)',
        width: '1200px',
        height: '1400px',
        zIndex: -1,
        opacity: 0.5,
        filter: 'drop-shadow(0 0 30px rgba(100, 200, 255, 0.5))',
      }}
    >
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#003d5c" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#006994" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00acc1" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0097a7" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#00bcd4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1e90ff" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="gradient3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#4dd0e1" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#26c6da" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00bfff" stopOpacity="0.9" />
          </linearGradient>

          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>

        <g filter="url(#goo)">
          <Motion.path
            d={blobPaths[0]}
            fill="url(#gradient1)"
            animate={{
              d: blobPaths,
              fill: ["url(#gradient1)", "url(#gradient2)", "url(#gradient3)", "url(#gradient2)", "url(#gradient1)"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Burbujas internas */}
          <Motion.circle
            cx="220"
            cy="220"
            r="20"
            fill="rgba(255,255,255,0.3)"
            animate={{
              cy: [220, 200, 220],
              r: [20, 25, 20],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <Motion.circle
            cx="280"
            cy="260"
            r="15"
            fill="rgba(255,255,255,0.3)"
            animate={{
              cy: [260, 240, 260],
              r: [15, 20, 15],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <Motion.circle
            cx="250"
            cy="280"
            r="18"
            fill="rgba(255,255,255,0.2)"
            animate={{
              cy: [280, 260, 280],
              r: [18, 23, 18],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </g>
      </svg>
    </Motion.div>
  );
};

export default AnimatedBackground;
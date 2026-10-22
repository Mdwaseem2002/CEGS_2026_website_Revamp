import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TextRepelProps {
  text: string;
  radius?: number;
  strength?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
  className?: string;
  letterClassName?: string;
}

export const TextRepel: React.FC<TextRepelProps> = ({
  text,
  radius = 180,
  strength = 60,
  stiffness = 180,
  damping = 14,
  mass = 0.4,
  className = "",
  letterClassName = ""
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className={`flex justify-center ${className}`}>
      {text.split('').map((char, i) => (
        <RepelLetter
          key={i}
          char={char}
          mouseX={mouseX}
          mouseY={mouseY}
          radius={radius}
          strength={strength}
          stiffness={stiffness}
          damping={damping}
          mass={mass}
          className={letterClassName}
        />
      ))}
    </div>
  );
};

interface RepelLetterProps {
  char: string;
  mouseX: any;
  mouseY: any;
  radius: number;
  strength: number;
  stiffness: number;
  damping: number;
  mass: number;
  className: string;
}

const RepelLetter: React.FC<RepelLetterProps> = ({ char, mouseX, mouseY, radius, strength, stiffness, damping, mass, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const pushX = useMotionValue(0);
  const pushY = useMotionValue(0);

  const springX = useSpring(pushX, { stiffness, damping, mass });
  const springY = useSpring(pushY, { stiffness, damping, mass });

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
    };
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);
    // Initial delay to ensure fonts/layout are loaded before calculating
    setTimeout(updatePosition, 500);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  useEffect(() => {
    const unsubscribeX = mouseX.on('change', (mx: number) => {
      const my = mouseY.get();
      const lx = position.x;
      const ly = position.y;
      
      const dx = mx - lx;
      const dy = my - ly;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < radius && distance > 0) {
        const force = (radius - distance) / radius;
        pushX.set(-(dx / distance) * force * strength);
        pushY.set(-(dy / distance) * force * strength);
      } else {
        pushX.set(0);
        pushY.set(0);
      }
    });
    return () => unsubscribeX();
  }, [mouseX, mouseY, position, radius, strength, pushX, pushY]);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ display: 'inline-block', x: springX, y: springY }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};

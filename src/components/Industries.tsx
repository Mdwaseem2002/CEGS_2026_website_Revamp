import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Monitor, Headset, Users, Rocket, CreditCard, CircleDollarSign, FileText, ShoppingCart } from 'lucide-react';
import styles from './Industries.module.css';

const industries = [
  { name: "IT Recruitment Services", icon: Monitor },
  { name: "BPO, Call Center Placement", icon: Headset },
  { name: "Non IT", icon: Users },
  { name: "Start-up Hiring", icon: Rocket },
  { name: "Fintech HR Services", icon: CreditCard },
  { name: "Finance Recruitment Agency", icon: CircleDollarSign },
  { name: "Audit & Taxation Recruitment", icon: FileText },
  { name: "E-Commerce HR Consultancy", icon: ShoppingCart }
];

const IndustryCard = ({ i, industry, progress }: { i: number, industry: any, progress: MotionValue<number> }) => {
  const Icon = industry.icon;
  const row = Math.floor(i / 4);
  const col = i % 4;
  
  // 4x2 Grid Spacing
  const targetX = (col - 1.5) * 280; 
  const targetY = (row - 0.5) * 200; 

  // Random scatter for the messy stack state (far to front)
  const randomAngles = [-15, 10, -5, 12, -8, 15, -12, 8];
  const randomX = [15, -20, 10, -15, 20, -10, 5, -25];
  const randomY = [-10, 15, -20, 10, -15, 20, -5, 12];

  // Opacity: starts fading in at 0.15 (as title starts leaving)
  const opacity = useTransform(progress, [0.15, 0.25], [0, 1]);
  
  // Scale: "come from far to front" -> scales from 0.4 to 1 between 0.15 and 0.3
  const scale = useTransform(progress, [0.15, 0.3], [0.4, 1]);

  // Spreading: sudden spread! Starts at 0.4, snaps to grid by 0.5.
  const x = useTransform(progress, [0.4, 0.5], [randomX[i], targetX]);
  const y = useTransform(progress, [0.4, 0.5], [randomY[i], targetY]);
  const rotate = useTransform(progress, [0.4, 0.5], [randomAngles[i], 0]);

  return (
    <motion.div 
      className={styles.gridCard}
      style={{ x, y, rotate, opacity, scale }}
    >
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} strokeWidth={1.5} size={36} />
      </div>
      <h3 className={styles.cardTitle}>{industry.name}</h3>
      <div className={styles.glow}></div>
    </motion.div>
  );
};

const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Title Sequence Animations
  // Start at 50% top, move to 15% top as you scroll between 0.1 and 0.25
  const titleTop = useTransform(scrollYProgress, [0, 0.1, 0.25], ["50%", "50%", "15%"]);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        
        <motion.div 
          className={styles.titleSequence}
          style={{ top: titleTop, x: "-50%", y: "-50%" }}
        >
          <h2 className={styles.mainTitle}>OUR INDUSTRIES</h2>
          <p className={styles.mainSubtitle}>
            We offer comprehensive recruitment solutions across diverse sectors including: Tech, IT, Non IT, Fintech, Health care, e-Commerce and Financial services.
          </p>
        </motion.div>

        <div className={styles.gridContainer}>
          {industries.map((industry, i) => (
            <IndustryCard key={i} i={i} industry={industry} progress={scrollYProgress} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;

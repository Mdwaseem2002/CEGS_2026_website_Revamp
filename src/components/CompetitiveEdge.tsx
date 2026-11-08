import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './CompetitiveEdge.module.css';

const points = [
  {
    title: "Global Talent Network",
    description: "Unrestricted access to top-tier professionals across borders, ensuring the exact right fit for your unique requirements.",
    number: "01",
    category: "GLOBAL REACH",
    bgColor: "#111111",
    image: "/images/Global Talent Network.png",
  },
  {
    title: "Industry Expertise",
    description: "Deep domain knowledge allowing us to understand specific technical nuances and cultural alignments flawlessly.",
    number: "02",
    category: "SPECIALIZATION",
    bgColor: "#181818",
    image: "/images/Industry Expertise.png",
  },
  {
    title: "Agile Methodology",
    description: "Flexible and adaptive workflows that align seamlessly with your rapidly evolving business objectives.",
    number: "03",
    category: "WORKFLOW",
    bgColor: "#1f1f1f",
    image: "/images/Agile Methodology.png",
  },
  {
    title: "Data-Driven Insights",
    description: "Leveraging advanced analytics to optimize recruitment strategies and long-term workforce planning.",
    number: "04",
    category: "ANALYTICS",
    bgColor: "#262626",
    image: "/images/Data-Driven Insights.png",
  },
  {
    title: "End-to-End Solutions",
    description: "Comprehensive support from initial sourcing and screening to final placement and ongoing onboarding.",
    number: "05",
    category: "SERVICES",
    bgColor: "#2d2d2d",
    image: "/images/End-to-End Solutions.png",
  },
  {
    title: "Scalable Infrastructure",
    description: "Robust systems designed to grow with your demands, whether you need one expert or an entire global team.",
    number: "06",
    category: "INFRASTRUCTURE",
    bgColor: "#333333",
    image: "/images/Scalable Infrastructure.png",
  },
  {
    title: "Dedicated Support",
    description: "24/7 client support ensuring transparent communication and rapid resolution at every single step.",
    number: "07",
    category: "CLIENT SUCCESS",
    bgColor: "var(--gold)", // Attractive Gold!
    textColor: "#000",
    image: "/images/Dedicated Support.png",
  }
];

const CompetitiveEdge = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress across the entire stack section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Competitive Edge</h2>
        <p className={styles.subtitle}>Scroll to uncover the 7 pillars of our success.</p>
      </div>
      
      <div className={styles.stackContainer}>
        {points.map((point, i) => {
          // targetScale calculates the final size of this card at the very bottom of the scroll.
          // Card 7 (index 6) shouldn't scale down because it's always on top.
          const targetScale = 1 - ((points.length - 1 - i) * 0.05);
          return (
            <Card 
              key={i} 
              i={i} 
              {...point} 
              progress={scrollYProgress} 
              range={[i * (1 / points.length), 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};

interface CardProps {
  i: number;
  title: string;
  description: string;
  number: string;
  category: string;
  bgColor: string;
  textColor?: string;
  image: string;
  progress: any;
  range?: number[];
  targetScale: number;
}

const Card = ({ i, title, description, number, category, bgColor, textColor = "var(--text)", image, progress, targetScale }: CardProps) => {
  // Correct Framer Motion math for Flip Stack
  // Card starts scaling down exactly when it reaches the top (which is progress = i / (total_cards - 1))
  const startProgress = i / 6; // 6 is points.length - 1
  
  // Scale down older cards
  const scale = useTransform(progress, [startProgress, 1], [1, targetScale]);
  
  // As cards stack, they dim out slightly to give focus to the new card
  const filter = useTransform(progress, [startProgress, 1], ["brightness(1)", "brightness(0.5)"]);

  // Move older cards UP into the background to create a curved stack
  const targetY = -((6 - i) * 30); // 30px up per card stacked on top
  const y = useTransform(progress, [startProgress, 1], [0, targetY]);

  // All containers stick at exactly the same spot
  const topOffset = 150; 

  return (
    <div className={styles.cardContainer} style={{ top: `${topOffset}px` }}>
      <motion.div 
        className={styles.card} 
        style={{ 
          backgroundColor: bgColor, 
          scale,
          y,
          color: textColor,
          filter
        }}
      >
        <div className={styles.cardLeft}>
          <div className={styles.cardTop}>
            <div className={styles.cardNumber} style={{ color: textColor }}>{number}</div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardCategory} style={{ color: textColor === '#000' ? 'rgba(0,0,0,0.6)' : 'var(--text-muted)' }}>{category}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc} style={{ color: textColor === '#000' ? 'rgba(0,0,0,0.8)' : 'var(--text-body)' }}>
              {description}
            </p>
          </div>
        </div>
        <div className={styles.cardRight}>
          <img src={image} alt={title} className={styles.cardImage} />
        </div>
      </motion.div>
    </div>
  );
};

export default CompetitiveEdge;

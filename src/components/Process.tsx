import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  {
    number: "01",
    title: "Client Discovery",
    description: "Deep-dive kickoff to define project scope, strict requirements, budget, SLAs, and exact talent profiles needed to scale.",
  },
  {
    number: "02",
    title: "Talent Activation",
    description: "We unleash our global network, tapping into proprietary databases and external channels to source top-tier, pre-qualified candidates instantly.",
  },
  {
    number: "03",
    title: "Rigorous Vetting",
    description: "Multilevel screening including technical tests, cultural fit assessments, and advanced communication audits to ensure absolute excellence.",
  },
  {
    number: "04",
    title: "Final Selection",
    description: "You hold the power. We present the elite shortlist, facilitate your stakeholder interviews, and seamlessly manage the offer negotiations.",
  },
  {
    number: "05",
    title: "Scale & Support",
    description: "Continuous lifecycle management. We handle onboarding, scale volume on demand, and provide seamless operational support.",
  }
];

const TimelineStep = ({ step, index }: { step: any, index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className={`${styles.stepWrapper} ${isEven ? styles.leftStep : styles.rightStep}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-50% 0px -50% 0px", once: false }}
    >
      
      {/* Center Node (Solid background to hide line behind it) */}
      <motion.div 
        className={styles.node}
        variants={{
          hidden: { borderColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.3)", backgroundColor: "#0C0C0C" },
          visible: { borderColor: "var(--gold)", color: "var(--gold)", backgroundColor: "#141103" }
        }}
        transition={{ duration: 0.3 }}
      >
        {step.number}
      </motion.div>

      {/* Spacer for the other side */}
      <div className={styles.emptySpace}></div>

      {/* Card Content */}
      <motion.div 
        className={styles.cardContainer}
        variants={{
          hidden: { opacity: 0, x: isEven ? -50 : 50, y: 20 },
          visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
        }}
      >
        <div className={styles.cardHeader}>
          <div className={styles.iconPlaceholder}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <div className={styles.stepBadge}>STEP {index + 1}</div>
        </div>
        
        <h3 className={styles.cardTitle}>{step.title}</h3>
        <p className={styles.cardDesc}>{step.description}</p>
      </motion.div>

    </motion.div>
  );
};

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the section for the line fill
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className={styles.processSection}>
      <div className={styles.header}>
        <p className={styles.kicker}>DELIVERY PROCESS</p>
        <h2>The Augmentation Engine</h2>
        <p className={styles.subheading}>
          A proven approach that transforms your vision into a successful digital solution.
        </p>
      </div>

      <div className={styles.timelineContainer}>
        {/* Background Track */}
        <div className={styles.lineTrack}></div>
        
        {/* Animated Fill Line */}
        <motion.div 
          className={styles.lineFill} 
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }} 
        />

        {steps.map((step, index) => (
          <TimelineStep key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Process;

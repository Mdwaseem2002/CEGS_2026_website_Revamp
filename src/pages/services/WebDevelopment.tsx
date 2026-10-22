import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Gauge, Layout, Search, Smartphone, Globe } from 'lucide-react';
import styles from './WebDevelopment.module.css';

const WebDevelopment = () => {

  useEffect(() => {
    document.title = "Web Development | CEGS";
  }, []);

  const expertiseList = [
    {
      icon: <Code size={28} />,
      title: "Custom Solutions",
      desc: "Tailor-made web applications built with cutting-edge technologies to match your exact business needs."
    },
    {
      icon: <Gauge size={28} />,
      title: "Optimized Performance",
      desc: "Lightning-fast load times and smooth user experiences powered by modern architecture."
    },
    {
      icon: <Layout size={28} />,
      title: "Landing Pages",
      desc: "High-converting landing pages designed and optimized for maximum audience engagement."
    },
    {
      icon: <Search size={28} />,
      title: "SEO Optimization",
      desc: "Enhanced visibility and search engine performance to drive organic growth."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Responsive Design",
      desc: "Pixel-perfect experience across all devices, screen sizes, and platforms."
    },
    {
      icon: <Globe size={28} />,
      title: "Scalable Architecture",
      desc: "Future-proof systems that grow seamlessly with your business demands."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.kickerBadge}>
              <span className={styles.kickerDot}></span> SERVICE
            </div>
            <h1 className={styles.heroTitle}>Web <span className={styles.highlight}>Development</span></h1>
            <p className={styles.heroSubtitle}>
              Transform your digital vision into reality with our cutting-edge web development solutions.
            </p>
            <div className={styles.tagsContainer}>
              <span className={styles.heroTag}>React / Next.js</span>
              <span className={styles.heroTag}>Full-Stack</span>
              <span className={styles.heroTag}>Responsive</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className={styles.expertiseSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeaderCenter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.sectionKicker}>OUR EXPERTISE</span>
            <h2 className={styles.sectionTitle}>What We <span className={styles.highlight}>Build</span></h2>
          </motion.div>

          <motion.div 
            className={styles.expertiseGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {expertiseList.map((item, index) => (
              <motion.div
                key={index}
                className={styles.expertiseCard}
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  borderColor: "var(--gold-border)", 
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3)" 
                }}
              >
                <motion.div 
                  className={styles.expertiseIcon}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className={styles.expertiseCardTitle}>{item.title}</h3>
                <p className={styles.expertiseCardDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Tech Stack Section */}
      <section className={styles.techStackSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeaderCenter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.sectionTitle}>Our Tech <span className={styles.highlight}>Stack</span></h2>
          </motion.div>

          <motion.div 
            className={styles.techStackCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.techStackText}>
              Built with modern technologies including MERN stack (MongoDB, Express, React, Node.js), Next.js, TypeScript, along with advanced CMS platforms for scalable and robust solutions.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default WebDevelopment;

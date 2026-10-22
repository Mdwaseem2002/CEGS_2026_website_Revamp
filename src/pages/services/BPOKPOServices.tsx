import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Headset, BookOpen, Phone, Database } from 'lucide-react';
import styles from './BPOKPOServices.module.css';

const BPOKPOServices = () => {

  useEffect(() => {
    document.title = "BPO/KPO & Inside Sales | CEGS";
  }, []);

  const servicesList = [
    {
      icon: <Headset size={28} />,
      title: "Customer Support Services",
      desc: "Comprehensive inbound and outbound support solutions ensuring customer satisfaction.",
      bullets: [
        "24/7 Support",
        "Multi-Channel Communication",
        "Multilingual Support"
      ]
    },
    {
      icon: <BookOpen size={28} />,
      title: "Knowledge Process Outsourcing",
      desc: "High-value knowledge-based services leveraging domain expertise and analytical skills.",
      bullets: [
        "Research & Analytics",
        "Data Management",
        "Business Intelligence"
      ]
    },
    {
      icon: <Phone size={28} />,
      title: "Inside Sales & Lead Generation",
      desc: "Targeted sales strategies to drive business growth and expand market reach.",
      bullets: [
        "Lead Qualification",
        "Sales Pipeline Management",
        "CRM Integration"
      ]
    },
    {
      icon: <Database size={28} />,
      title: "Data Processing & Back-Office",
      desc: "Efficient and accurate back-office operations to streamline business processes.",
      bullets: [
        "Data Entry",
        "Document Processing",
        "Administrative Support"
      ]
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

  const bulletVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
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
            <h1 className={styles.heroTitle}>BPO/KPO & <span className={styles.highlight}>Inside Sales</span></h1>
            <p className={styles.heroSubtitle}>
              Transform your business operations with our comprehensive BPO, KPO, and sales staffing services.
            </p>
            <div className={styles.tagsContainer}>
              <span className={styles.heroTag}>Customer Support</span>
              <span className={styles.heroTag}>KPO</span>
              <span className={styles.heroTag}>Lead Generation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeaderCenter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.sectionKicker}>WHAT WE OFFER</span>
            <h2 className={styles.sectionTitle}>Our <span className={styles.highlight}>Services</span></h2>
          </motion.div>

          <motion.div 
            className={styles.servicesGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                className={styles.serviceCard}
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  borderColor: "var(--gold-border)", 
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3)" 
                }}
              >
                <motion.div 
                  className={styles.serviceIcon}
                  whileHover={{ scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                <p className={styles.serviceCardDesc}>{service.desc}</p>
                
                <motion.ul 
                  className={styles.featuresList}
                  variants={containerVariants}
                >
                  {service.bullets.map((bullet, i) => (
                    <motion.li key={i} className={styles.featureItem} variants={bulletVariants}>
                      <span className={styles.featureMarker}></span>
                      {bullet}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
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
            <h2 className={styles.sectionTitle}>Our <span className={styles.highlight}>Expertise</span></h2>
          </motion.div>

          <motion.div 
            className={styles.expertiseCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.expertiseText}>
              We leverage the latest technologies and best practices to deliver exceptional BPO and KPO solutions, helping businesses optimize their operations and achieve sustainable growth through outsourced excellence.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default BPOKPOServices;

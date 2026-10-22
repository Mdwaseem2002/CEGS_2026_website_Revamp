import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Building2, Monitor, Target, Network, CheckCircle, Clock, Award } from 'lucide-react';
import styles from './StaffingSolutions.module.css';

const StaffingSolutions = () => {

  useEffect(() => {
    document.title = "Staffing Solutions | CEGS";
  }, []);

  const servicesList = [
    {
      icon: <Users size={28} />,
      title: "C2H (Contract-to-Hire)",
      desc: "Flexible hiring approach allowing companies to evaluate candidates before permanent placement."
    },
    {
      icon: <Building2 size={28} />,
      title: "Permanent Staffing",
      desc: "Finding and placing top talent for long-term organizational growth and stability."
    },
    {
      icon: <Briefcase size={28} />,
      title: "Contract Staffing",
      desc: "Providing skilled professionals for specific project durations or temporary needs."
    },
    {
      icon: <Monitor size={28} />,
      title: "IT Staffing",
      desc: "Specialized recruitment of technology professionals across various domains and expertise levels."
    },
    {
      icon: <Target size={28} />,
      title: "RPO",
      desc: "End-to-end recruitment management tailored to your organizational requirements."
    }
  ];

  const featuresList = [
    {
      icon: <Network size={24} />,
      title: "Extensive Talent Network",
      desc: "Access to a vast pool of pre-vetted professionals across industries"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Rigorous Screening",
      desc: "Comprehensive evaluation ensuring only top-quality candidates"
    },
    {
      icon: <Clock size={24} />,
      title: "Quick Turnaround",
      desc: "Efficient recruitment process to meet urgent staffing needs"
    },
    {
      icon: <Award size={24} />,
      title: "Industry Expertise",
      desc: "Specialized knowledge across various business sectors"
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
            <h1 className={styles.heroTitle}>Staffing <span className={styles.highlight}>Solutions</span></h1>
            <p className={styles.heroSubtitle}>
              Connecting exceptional talent with outstanding opportunities through innovative staffing solutions.
            </p>
            <div className={styles.tagsContainer}>
              <span className={styles.heroTag}>C2H Hiring</span>
              <span className={styles.heroTag}>IT Staffing</span>
              <span className={styles.heroTag}>RPO Solutions</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
            <h2 className={styles.sectionTitle}>Staffing <span className={styles.highlight}>Services</span></h2>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeaderCenter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.sectionTitle}>Why <span className={styles.highlight}>Choose Us</span></h2>
          </motion.div>

          <motion.div 
            className={styles.featuresGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {featuresList.map((feature, index) => (
              <motion.div 
                key={index} 
                className={styles.featureCard}
                variants={itemVariants}
                whileHover={{ 
                  y: -3, 
                  borderColor: "var(--gold-border)" 
                }}
              >
                <motion.div 
                  className={styles.featureCardIcon}
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureCardTitle}>{feature.title}</h3>
                  <p className={styles.featureCardDesc}>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default StaffingSolutions;

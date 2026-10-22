import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Factory, Layout, Cpu, Monitor, Terminal, Cloud, Network, 
  Search, Bot, Lock, Settings, 
  Award, Wrench, Users, GraduationCap, Target, Handshake
} from 'lucide-react';
import styles from './TrainingCourses.module.css';

const TrainingCourses = () => {

  useEffect(() => {
    document.title = "Professional Training Courses | CEGS";
  }, []);

  const categoryList = [
    { icon: <Factory size={24} />, title: "OEM", desc: "Comprehensive OEM certification programs", courses: "45" },
    { icon: <Layout size={24} />, title: "Microsoft", desc: "Azure, Office 365 & Windows Server", courses: "52" },
    { icon: <Cpu size={24} />, title: "IBM", desc: "IBM Cloud, Watson AI & Mainframe", courses: "31" },
    { icon: <Monitor size={24} />, title: "Citrix", desc: "Virtualization & networking solutions", courses: "18" },
    { icon: <Terminal size={24} />, title: "Redhat", desc: "Linux admin & OpenShift training", courses: "29" },
    { icon: <Cloud size={24} />, title: "AWS", desc: "Amazon Web Services cloud specialization", courses: "67" },
    { icon: <Network size={24} />, title: "Cisco", desc: "Networking & cybersecurity management", courses: "43" },
    { icon: <Search size={24} />, title: "Google", desc: "GCP & Workspace certifications", courses: "38" },
    { icon: <Bot size={24} />, title: "Data & AI", desc: "Data science & machine learning mastery", courses: "72" },
    { icon: <Cloud size={24} />, title: "Cloud", desc: "Multi-cloud & hybrid architecture", courses: "59" },
    { icon: <Lock size={24} />, title: "Security", desc: "Cybersecurity & ethical hacking", courses: "37" },
    { icon: <Settings size={24} />, title: "DevOps", desc: "CI/CD, containers & agile practices", courses: "46" }
  ];

  const benefitsList = [
    { icon: <Award size={28} />, title: "Industry Certifications", desc: "Globally accepted credentials from leading technology vendors" },
    { icon: <Wrench size={28} />, title: "Hands-On Projects", desc: "Real-world projects and practical lab environments" },
    { icon: <Users size={28} />, title: "Expert Trainers", desc: "Learn from industry veterans with real-world experience" },
    { icon: <GraduationCap size={28} />, title: "Lifetime Access", desc: "Keep learning resources forever, including updates" },
    { icon: <Target size={28} />, title: "Personalized Path", desc: "Customized curriculum based on your career goals" },
    { icon: <Handshake size={28} />, title: "Career Support", desc: "Job placement assistance and interview preparation" }
  ];

  const pathList = [
    { step: "01", title: "Learn", desc: "Expert-led sessions covering fundamental to advanced topics" },
    { step: "02", title: "Practice", desc: "Apply knowledge in realistic simulation environments" },
    { step: "03", title: "Apply", desc: "Work on industry-standard projects and case studies" },
    { step: "04", title: "Certify", desc: "Receive globally recognized certifications" }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fastContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const pathItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
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
              <span className={styles.kickerDot}></span> TRAINING
            </div>
            <h1 className={styles.heroTitle}>Professional <span className={styles.highlight}>Training Courses</span></h1>
            <p className={styles.heroSubtitle}>
              Transform your career with cutting-edge training programs designed by industry experts.
            </p>
            <div className={styles.tagsContainer}>
              <span className={styles.heroTag}>Certifications</span>
              <span className={styles.heroTag}>Hands-On Labs</span>
              <span className={styles.heroTag}>Expert Trainers</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeaderCenter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.sectionKicker}>BROWSE COURSES</span>
            <h2 className={styles.sectionTitle}>Course <span className={styles.highlight}>Categories</span></h2>
          </motion.div>

          <motion.div 
            className={styles.categoriesGrid}
            variants={fastContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {categoryList.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                {/* TODO: Update these generic # links when real course routes are established */}
                <Link to="#" className={styles.categoryCard}>
                  <div className={styles.categoryIcon} aria-hidden="true">
                    {category.icon}
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDesc}>{category.desc}</p>
                  <div className={styles.categoryFooter}>
                    <span className={styles.courseCount}>{category.courses} courses</span>
                    <span className={styles.exploreLink}>Explore &rarr;</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Learn With Us Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeaderCenter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.sectionKicker}>BENEFITS</span>
            <h2 className={styles.sectionTitle}>Why Learn <span className={styles.highlight}>With Us</span></h2>
          </motion.div>

          <motion.div 
            className={styles.benefitsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {benefitsList.map((benefit, index) => (
              <motion.div key={index} className={styles.benefitCard} variants={itemVariants}>
                <div className={styles.benefitIcon} aria-hidden="true">
                  {benefit.icon}
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDesc}>{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className={styles.pathSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.sectionHeaderCenter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.sectionKicker}>YOUR JOURNEY</span>
            <h2 className={styles.sectionTitle}>Learning <span className={styles.highlight}>Path</span></h2>
          </motion.div>

          <motion.ol 
            className={styles.pathGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
          >
            <div className={styles.connectorLine} aria-hidden="true"></div>
            {pathList.map((path, index) => (
              <motion.li key={index} className={styles.pathStep} variants={pathItemVariants}>
                <div className={styles.stepNumber} aria-hidden="true">{path.step}</div>
                <h3 className={styles.stepTitle}>{path.title}</h3>
                <p className={styles.stepDesc}>{path.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.ctaCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.ctaTitle}>Ready to Transform Your <span className={styles.highlight}>Career?</span></h2>
            <p className={styles.ctaText}>
              Join thousands of professionals who have advanced their careers through our comprehensive training programs.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Enroll Now &rarr;
            </Link>
            
            <div className={styles.ctaDivider} aria-hidden="true"></div>
            
            <div className={styles.ctaFeatures}>
              <div className={styles.ctaFeatureItem}>
                <h4 className={styles.ctaFeatureTitle}>Free Consultation</h4>
                <p className={styles.ctaFeatureDesc}>Discuss your career goals</p>
              </div>
              <div className={styles.ctaFeatureItem}>
                <h4 className={styles.ctaFeatureTitle}>Flexible Payment</h4>
                <p className={styles.ctaFeatureDesc}>Multiple payment options</p>
              </div>
              <div className={styles.ctaFeatureItem}>
                <h4 className={styles.ctaFeatureTitle}>Job Guarantee</h4>
                <p className={styles.ctaFeatureDesc}>Career support & placement</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default TrainingCourses;

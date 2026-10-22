import styles from './About.module.css';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';

const About = () => {
  const aboutText = "We specialize in delivering tailored Staffing Solutions, Training and HR Recruitment services. Our mission is to empower businesses by providing top-tier talent, streamlined payroll management, and advanced digital solutions. With our expert team and client-centric approach, we ensure your workforce operates efficiently and effectively. Let's build something incredible together!";

  return (
    <section className={styles.aboutSection} id="about">
      {/* 
        The decorative corner images have been omitted as per the 
        instruction to only use relevant objects. The dark background
        and bold typography hold the visual weight beautifully.
      */}
      
      <div className={styles.centerContent}>
        
        <div className={styles.leftCol}>
          <FadeIn delay={0} y={20}>
            <h2 className={styles.heroHeading}>About Us</h2>
          </FadeIn>
        </div>

        <div className={styles.rightCol}>
          <AnimatedText text={aboutText} />
          
          <FadeIn delay={0.4} y={20} className={styles.buttonWrapper}>
            <a href="#contact" className={styles.contactButton}>
              Learn More
            </a>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default About;

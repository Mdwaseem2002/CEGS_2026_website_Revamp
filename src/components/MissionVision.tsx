import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eye, Lightbulb } from 'lucide-react';
import styles from './MissionVision.module.css';

const MissionVision = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Separation (split) -> left moves left, right moves right (tighter gap)
  const leftX = useTransform(scrollYProgress, [0.15, 0.4], [0, -30]);
  const rightX = useTransform(scrollYProgress, [0.15, 0.4], [0, 30]);

  // Flipping -> rotate in 3D
  const leftRotate = useTransform(scrollYProgress, [0.4, 0.7], [0, 180]);
  const rightRotate = useTransform(scrollYProgress, [0.4, 0.7], [0, -180]); // Rotate opposite ways!

  // Fan out tilt (Z rotation). Applied before Y rotation by framer, so it inverses when flipped.
  const leftRotateZ = useTransform(scrollYProgress, [0.4, 0.7], [0, 5]); 
  const rightRotateZ = useTransform(scrollYProgress, [0.4, 0.7], [0, -5]); 

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        
        <div className={styles.sceneScaler}>
          <motion.div className={styles.scene}>
            
            {/* LEFT PANEL */}
            <motion.div 
              className={styles.panel} 
              style={{ x: leftX, rotateY: leftRotate, rotateZ: leftRotateZ }}
            >
              {/* FRONT (Image Left Half) */}
              <div className={styles.front}>
                <img src="/images/vision mission 2.png" className={styles.imageLeft} alt="Vision" />
              </div>
              
              {/* BACK (Content) */}
              <div className={styles.backLeft}>
                <div className={styles.iconWrapper}><Eye className={styles.icon} /></div>
                <h3 className={styles.title}>Our Vision</h3>
                <p className={styles.description}>
                  To be the leading provider of innovative and customized staffing and HR solutions, empowering businesses to achieve sustainable growth and operational excellence.
                </p>
              </div>
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div 
              className={styles.panel} 
              style={{ x: rightX, rotateY: rightRotate, rotateZ: rightRotateZ }}
            >
              {/* FRONT (Image Right Half) */}
              <div className={styles.front}>
                <img src="/images/vision mission 2.png" className={styles.imageRight} alt="Mission" />
              </div>
              
              {/* BACK (Content) */}
              <div className={styles.backRight}>
                <div className={styles.iconWrapper}><Lightbulb className={styles.icon} /></div>
                <h3 className={styles.title}>Our Mission</h3>
                <p className={styles.subtitle}>"Getting the Unemployed Employed in a Pan India"</p>
                <p className={styles.description}>
                  To deliver exceptional staffing, HR, and digital solutions through a client-centric approach, fostering long-term partnerships and driving business success.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;

import { TextRepel } from './TextRepel';
import FooterCTA from './FooterCTA';
import styles from './Footer.module.css';

const LinkedinIcon = () => (
// ... (I will keep the SVG icons exactly as they are)
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerWrapper}>
      
      {/* Animated Call To Action / Email Section */}
      <FooterCTA />

      {/* Huge Animated Background Text */}
      <div className={styles.bigTextContainer}>
        <TextRepel
          text="CEGS"
          className={styles.bigText}
          letterClassName={styles.bigTextLetter}
          radius={300}
          strength={70}
        />
      </div>

      <footer className={styles.footer}>
        <div className={styles.container}>

          {/* Main Footer Content */}
          <div className={styles.mainGrid}>

            {/* Brand Info */}
            <div className={styles.brandColumn}>
              <div className={styles.logo}>CEGS</div>
              <p className={styles.brandDesc}>
                Delivering top-tier recruitment and workforce solutions across multiple industries. We connect great companies with exceptional talent.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Twitter">
                  <TwitterIcon />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className={styles.linkColumnTitle}>Company</h3>
              <ul className={styles.linksList}>
                <li className={styles.linkItem}><a href="#">About Us</a></li>
                <li className={styles.linkItem}><a href="#">Our Services</a></li>
                <li className={styles.linkItem}><a href="#">Industries</a></li>
                <li className={styles.linkItem}><a href="#">Why Choose CEGS</a></li>
                <li className={styles.linkItem}><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Resources / Legal */}
            <div>
              <h3 className={styles.linkColumnTitle}>Resources</h3>
              <ul className={styles.linksList}>
                <li className={styles.linkItem}><a href="#">Case Studies</a></li>
                <li className={styles.linkItem}><a href="#">Blog & News</a></li>
                <li className={styles.linkItem}><a href="#">Career Opportunities</a></li>
                <li className={styles.linkItem}><a href="#">FAQ</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className={styles.bottomBar}>
            <div className={styles.copyright}>
              &copy; {currentYear} Career Expert Global Solution. All rights reserved.
            </div>
            <div className={styles.legalLinks}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;

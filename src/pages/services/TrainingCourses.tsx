import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Factory, Layout, Cpu, Monitor, Terminal, Cloud, Network, 
  Search, Bot, Lock, Settings, 
  Award, Wrench, Users, GraduationCap, Target, Handshake,
  CheckCircle2, Clock, Calendar, Briefcase, Phone, ArrowRight,
  ShieldCheck, Sparkles, TrendingUp, IndianRupee
} from 'lucide-react';
import styles from './TrainingCourses.module.css';

interface ProgramStep {
  step: string;
  title: string;
  desc: string;
  points?: string[];
}

interface CareerProgram {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  badge?: string;
  popular?: boolean;
  eligibility: string;
  fee: string;
  feeSubtext: string;
  compensationLabel: string;
  compensationValue: string;
  placementBadge: string;
  placementDetails: string;
  highlights: string[];
  whyChoose: string[];
  journeyTitle: string;
  journey: ProgramStep[];
}

const careerPrograms: CareerProgram[] = [
  {
    id: "1-month-starter",
    title: "1-Month Career Starter Program",
    tagline: "Build Skills. Become Job-Ready. Start Your Career!",
    duration: "1 Month",
    badge: "Fast-Track Entry",
    popular: false,
    eligibility: "2nd PUC Passed Candidates",
    fee: "₹10,000 Only",
    feeSubtext: "Complete one-time program fee",
    compensationLabel: "Monthly In-Hand Salary",
    compensationValue: "₹15,000 – ₹18,000",
    placementBadge: "Non-IT Placement Opportunity",
    placementDetails: "Guaranteed placement opportunity in a suitable corporate Non-IT role upon completing the 1-month training curriculum.",
    highlights: [
      "Rapid 30-Day Job Readiness Curriculum",
      "Comprehensive Skill & Strength Assessment",
      "Verbal Communication & Professional Confidence",
      "ATS-Compliant Resume Building Activities",
      "End-to-End Profile Management & Job Placement"
    ],
    whyChoose: [
      "Structured Learning",
      "Communication Development",
      "Resume & Profile Building",
      "Career Guidance",
      "Non-IT Placement",
      "Placement Support"
    ],
    journeyTitle: "Your 1-Month Career Journey",
    journey: [
      {
        step: "Step 01",
        title: "Skill Assessment",
        desc: "Evaluate your core strengths, aptitudes, and career interests through comprehensive baseline testing."
      },
      {
        step: "Step 02",
        title: "Communication Training",
        desc: "Improve your verbal communication, body language, tone, and professional confidence for corporate environments."
      },
      {
        step: "Step 03",
        title: "Resume Building Activities",
        desc: "Create a polished, modern, professional, and job-ready resume that passes employer screening."
      },
      {
        step: "Step 04",
        title: "Profile Management",
        desc: "Build and optimize your LinkedIn and professional profiles to stand out to hiring recruiters."
      },
      {
        step: "Step 05",
        title: "Non-IT Placement",
        desc: "Interview scheduling and direct placement opportunities in a suitable verified Non-IT corporate role."
      }
    ]
  },
  {
    id: "2-month-growth",
    title: "Freshers Growth Training Program",
    tagline: "Build Skills. Gain Experience. Kickstart Your Career.",
    duration: "2 Months",
    badge: "Accelerated Upskilling",
    popular: false,
    eligibility: "Graduates & Job-Seeking Freshers",
    fee: "₹40,000",
    feeSubtext: "No Stipend during training",
    compensationLabel: "Placement Assistance",
    compensationValue: "6 Months Continued Support",
    placementBadge: "6 Months Placement Assistance",
    placementDetails: "Continued guidance, interview pipelines, doubt resolution, and career support for 6 full months after program completion.",
    highlights: [
      "Targeted 8-Week Skill & Industry Curriculum",
      "Personalized Course of Action for Every Student",
      "Core Domain & Technical Course Training",
      "Interactive 1-on-1 Doubt Clarification Sessions",
      "6 Months Dedicated Post-Training Placement Guidance"
    ],
    whyChoose: [
      "Structured Learning",
      "Personalized Career Guidance",
      "Technical & Non-Technical Skills",
      "Practical Training",
      "Dedicated Mentorship",
      "Placement Support"
    ],
    journeyTitle: "2-Month Structured Curriculum & Placement Path",
    journey: [
      {
        step: "Month 1",
        title: "Assessment & Intensive Training",
        desc: "Comprehensive diagnostic assessment and tailored daily training sessions covering core industry competencies.",
        points: [
          "Skill assessment & diagnostic profiling",
          "Personalized course of action & roadmap",
          "Professional communication training",
          "Core domain course training",
          "Professional profile management"
        ]
      },
      {
        step: "Month 2",
        title: "Doubt Clarification & Placement",
        desc: "Practical application, personalized doubt clearing, interview simulations, and active recruiter alignment.",
        points: [
          "In-depth doubt clarification sessions",
          "Placement guidance & interview preparation",
          "Profile management & interview scheduling"
        ]
      }
    ]
  },
  {
    id: "6-month-flagship",
    title: "6-Month Freshers Growth Training Program",
    tagline: "Build Skills. Gain Experience. Get Interview Ready.",
    duration: "6 Months (24 Weeks)",
    badge: "Flagship Immersive",
    popular: true,
    eligibility: "BE / B.Tech / BCA / MCA / BSc / Any Graduate",
    fee: "Contact for Enrollment",
    feeSubtext: "Includes 24 Weeks Structured Learning • 5 Career Tracks",
    compensationLabel: "Monthly Stipend Included",
    compensationValue: "₹10K – ₹12K & ₹20K – ₹22K / mo",
    placementBadge: "12 Months Placement Assistance Guarantee",
    placementDetails: "Your journey doesn't end after 6 months! Candidates who do not secure a placement within the initial 6 months will receive an additional 12 months of placement assistance, helping them access further opportunities.",
    highlights: [
      "24 Weeks of Comprehensive Deep-Dive Learning across 5 Tracks",
      "Earn While You Learn: Up to ₹22,000/month Stipend",
      "Live Real-World Projects & Client Simulations",
      "Rigorous Mock Interviews with Senior Corporate Evaluators",
      "Extended 12 Months Placement Assistance Guarantee"
    ],
    whyChoose: [
      "Structured Learning",
      "Personalized Career Guidance",
      "Technical & Non-Technical Skills",
      "Practical Project Exposure",
      "Continuous Mentorship",
      "Extended Placement Support"
    ],
    journeyTitle: "Your 6-Month Roadmap with CEGS",
    journey: [
      {
        step: "Month 1",
        title: "Assessment & Planning",
        desc: "Evaluate baseline skills and formulate the exact customized training path and track allocation."
      },
      {
        step: "Month 2",
        title: "Communication & Training",
        desc: "Improve business communication, workplace etiquette, and build a competitive professional profile."
      },
      {
        step: "Month 3",
        title: "Personality & Image Building",
        desc: "Enhance professional confidence, corporate grooming, executive presence, and get interview-ready."
      },
      {
        step: "Month 4",
        title: "Mock Interviews & Projects",
        desc: "Practice panel mock interviews and build real-time hands-on industry project portfolios."
      },
      {
        step: "Month 5",
        title: "Placement Preparation",
        desc: "Receive intensive placement support, tailored resume distributions, and clear advanced technical doubts."
      },
      {
        step: "Month 6",
        title: "Placement Support",
        desc: "Resolve placement queries, participate in company hiring drives, and transition into your corporate career."
      }
    ]
  }
];

const TrainingCourses = () => {
  const [selectedProgramId, setSelectedProgramId] = useState("6-month-flagship");

  useEffect(() => {
    document.title = "Professional Training Courses | CEGS";
  }, []);

  const selectedProgram = careerPrograms.find(p => p.id === selectedProgramId) || careerPrograms[2];

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

      {/* Flagship Job-Ready Training Programs Section */}
      <section className={styles.programsSection} id="featured-programs">
        <div className={styles.container}>
          <motion.div 
            className={styles.programsHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.kickerBadge}>
              <span className={styles.kickerDot}></span> CAREER LAUNCHPAD
            </div>
            <h2 className={styles.heroTitle} style={{ fontSize: 'clamp(36px, 4.5vw, 52px)' }}>
              Flagship Job-Ready <span className={styles.highlight}>Training Programs</span>
            </h2>
            <p className={styles.programsSubtitle}>
              Tailored for students, freshers, and job-seekers to bridge the gap between academic qualifications and high-paying corporate roles with dedicated placement assistance.
            </p>
          </motion.div>

          {/* 3 Program Comparison Overview Cards */}
          <div className={styles.programsGrid}>
            {careerPrograms.map((prog) => {
              const isActive = prog.id === selectedProgramId;
              return (
                <div 
                  key={prog.id}
                  className={`${styles.programCard} ${isActive ? styles.programCardActive : ''}`}
                  onClick={() => setSelectedProgramId(prog.id)}
                >
                  <div className={styles.cardTopRow}>
                    <span className={styles.durationPill}>
                      <Clock size={12} /> {prog.duration}
                    </span>
                    {prog.popular && (
                      <span className={styles.flagshipBadge}>
                        <Sparkles size={11} style={{ display: 'inline', marginRight: 4 }} /> MOST POPULAR
                      </span>
                    )}
                  </div>

                  <h3 className={styles.cardProgramTitle}>{prog.title}</h3>
                  <p className={styles.cardProgramTagline}>{prog.tagline}</p>

                  <div className={styles.cardMetricsBox}>
                    <div className={styles.metricRow}>
                      <span className={styles.metricRowLabel}>Eligibility:</span>
                      <span className={styles.metricRowValue}>{prog.eligibility}</span>
                    </div>
                    <div className={styles.metricRow}>
                      <span className={styles.metricRowLabel}>Program Fee:</span>
                      <span className={`${styles.metricRowValue} ${styles.metricRowValueGold}`}>{prog.fee}</span>
                    </div>
                    <div className={styles.metricRow}>
                      <span className={styles.metricRowLabel}>{prog.compensationLabel}:</span>
                      <span className={styles.metricRowValue} style={{ color: 'var(--success)' }}>
                        {prog.compensationValue}
                      </span>
                    </div>
                    <div className={styles.eligibilityRow}>
                      <ShieldCheck size={16} color="var(--gold)" />
                      <span>{prog.placementBadge}</span>
                    </div>
                  </div>

                  <ul className={styles.bulletHighlights}>
                    {prog.highlights.slice(0, 4).map((hl, i) => (
                      <li key={i} className={styles.bulletItem}>
                        <CheckCircle2 size={15} className={styles.bulletIcon} />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={styles.selectTabBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProgramId(prog.id);
                    }}
                  >
                    <span>{isActive ? 'Viewing Full Roadmap' : 'Explore Program Roadmap'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Deep-Dive Interactive Syllabus & Journey Viewer */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedProgram.id}
              className={styles.deepDiveSection}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.deepDiveHeader}>
                <div className={styles.deepDiveTitleArea}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                    <span className={styles.durationPill}>
                      <Calendar size={13} /> {selectedProgram.duration}
                    </span>
                    <span className={styles.heroTag} style={{ padding: '4px 12px', fontSize: 11 }}>
                      {selectedProgram.badge}
                    </span>
                  </div>
                  <h3>{selectedProgram.title}</h3>
                  <p>{selectedProgram.tagline}</p>
                </div>

                <div className={styles.deepDiveActionArea}>
                  <Link 
                    to="/contact"
                    className={styles.enrollBtnPrimary}
                  >
                    <span>Enroll Now in this Program</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a 
                    href="tel:+918970997465" 
                    className={styles.counselorCallBtn}
                  >
                    <Phone size={15} />
                    <span>Talk to Counselor (+91 89709 97465)</span>
                  </a>
                </div>
              </div>

              {/* Placement Guarantee Banner */}
              <div className={styles.guaranteeBanner}>
                <div className={styles.guaranteeIconWrapper}>
                  <Briefcase size={26} />
                </div>
                <div className={styles.guaranteeContent}>
                  <h4>{selectedProgram.placementBadge}</h4>
                  <p>{selectedProgram.placementDetails}</p>
                </div>
              </div>

              {/* Detailed Journey Timeline */}
              <div className={styles.timelineSectionTitle}>
                <TrendingUp size={20} color="var(--gold)" />
                <span>{selectedProgram.journeyTitle}</span>
              </div>

              <div className={styles.timelineGrid}>
                {selectedProgram.journey.map((step, idx) => (
                  <div key={idx} className={styles.timelineCard}>
                    <span className={styles.timelineStepBadge}>{step.step}</span>
                    <h4 className={styles.timelineStepTitle}>{step.title}</h4>
                    <p className={styles.timelineStepDesc}>{step.desc}</p>
                    {step.points && (
                      <ul className={styles.timelinePointsList}>
                        {step.points.map((pt, pIdx) => (
                          <li key={pIdx} className={styles.timelinePointItem}>{pt}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Why Choose CEGS Pillars Box */}
              <div className={styles.whyChooseBox}>
                <div className={styles.whyChooseTitle}>Why Choose CEGS for this Program?</div>
                <div className={styles.whyChoosePillGrid}>
                  {selectedProgram.whyChoose.map((pillar, pIdx) => (
                    <div key={pIdx} className={styles.whyPill}>
                      <CheckCircle2 size={14} color="var(--gold)" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

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

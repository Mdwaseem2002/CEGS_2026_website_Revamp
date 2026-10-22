import React, { useState, useEffect, useRef } from 'react';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import styles from './Contact.module.css';

// Info Cards Data
const infoCards = [
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    desc: "Ready to help you anytime",
    // TODO: Replace with real phone number
    href: "tel:+910000000000",
    label: "+91 00000 00000 (PLACEHOLDER)"
  },
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    desc: "Send us a detailed message",
    href: "mailto:contact@cegs.com",
    label: "contact@cegs.com"
  },
  {
    icon: <MapPin size={24} />,
    title: "Visit Us",
    desc: "Come see us in person",
    // TODO: Replace with real Google Maps link and address
    href: "https://maps.google.com",
    label: "Bangalore, India (PLACEHOLDER)"
  }
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png'
];

// Zod Schema
const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z.string().trim().regex(/^[\d\s+\-()]{7,15}$/, "Please enter a valid phone number (7-15 digits, +, -, spaces, brackets allowed)"),
  referredBy: z.string().trim().min(2, "Please tell us who referred you"),
  message: z.string().trim().max(300, "Message cannot exceed 300 characters"),
  agree: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy policy" })
  }),
  attachment: z.any()
    .optional()
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, "Max file size is 5MB")
    .refine(
      (file) => !file || ACCEPTED_FILE_TYPES.includes(file.type),
      "Only PDF, DOC, DOCX, JPG, and PNG files are allowed"
    )
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | CEGS";
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    referredBy: '',
    message: '',
    agree: false
  });
  
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const formRef = useRef<HTMLFormElement>(null);
  const firstErrorRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // Validate form using Zod
  const validateForm = () => {
    const result = contactSchema.safeParse({
      ...formData,
      attachment: file
    });

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (!formattedErrors[path]) {
          formattedErrors[path] = issue.message;
        }
      });
      setErrors(formattedErrors);
      return false;
    }
    
    setErrors({});
    return true;
  };

  // Check if button should be disabled (basic check)
  const isFormFilled = formData.fullName && formData.email && formData.phone && formData.referredBy && formData.agree;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    // Enforce 300 char limit on message
    if (name === 'message' && typeof val === 'string' && val.length > 300) return;

    setFormData(prev => ({ ...prev, [name]: val }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    
    if (errors.attachment) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.attachment;
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setServerError('');
    
    if (!validateForm()) {
      // Small timeout to allow render, then focus first error
      setTimeout(() => {
        const firstErrorEl = document.querySelector('[aria-invalid="true"]') as HTMLElement;
        firstErrorEl?.focus();
      }, 50);
      return;
    }

    setIsSubmitting(true);

    try {
      // =========================================================================
      // NOTE ON ARCHITECTURE:
      // This project is built as a Vite SPA (Static site). Next.js API Routes 
      // (/api/*) are NOT available in this environment. 
      // To fulfill the request for a fully functional frontend, we simulate 
      // the API call here. In a real-world scenario, you will need to provision 
      // a standalone Node.js (Express/Nest) server or a Serverless function 
      // endpoint to handle database inserts, file uploads, and Nodemailer emails.
      // =========================================================================
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        referredBy: '',
        message: '',
        agree: false
      });
      setFile(null);
      if (formRef.current) formRef.current.reset();

    } catch (err) {
      setSubmitStatus('error');
      setServerError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.kickerBadge}>
            <span className={styles.kickerDot}></span> CONTACT
          </div>
          <h1 className={styles.heroTitle}>Get In <span className={styles.highlight}>Touch</span></h1>
          <p className={styles.heroSubtitle}>
            We're here to help — whether you have a question or concern, use the form below and we'll be in touch promptly.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            
            {/* Left Column: Info Cards */}
            <div className={styles.infoColumn}>
              {infoCards.map((card, idx) => (
                <a key={idx} href={card.href} className={styles.infoCard} target={card.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                  <div className={styles.infoIconWrapper} aria-hidden="true">
                    {card.icon}
                  </div>
                  <div className={styles.infoContent}>
                    <h3 className={styles.infoTitle}>{card.title}</h3>
                    <p className={styles.infoDesc}>{card.desc}</p>
                    <p className={styles.infoDesc} style={{ marginTop: '4px', color: 'rgba(255,255,255,0.9)' }}>
                      {card.label}
                    </p>
                  </div>
                </a>
              ))}

              <div className={styles.infoCard} style={{ cursor: 'default', pointerEvents: 'none' }}>
                <div className={styles.infoIconWrapper} aria-hidden="true">
                  <Clock size={24} />
                </div>
                <div className={styles.infoContent}>
                  <h3 className={`${styles.infoTitle} ${styles.highlightTitle}`}>Quick Response</h3>
                  <p className={styles.infoDesc}>
                    We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className={styles.formCard}>
              
              {submitStatus === 'success' && (
                <div className={`${styles.alert} ${styles.alertSuccess}`} role="alert" aria-live="polite">
                  Thank you! We've received your message and will get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={`${styles.alert} ${styles.alertError}`} role="alert" aria-live="polite">
                  {serverError || "Failed to submit the form. Please check your inputs and try again."}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className={styles.formGrid}>
                  
                  {/* Full Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="fullName" className={styles.label}>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName"
                      placeholder="Enter your full name..."
                      className={styles.input}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    />
                    {errors.fullName && <span id="fullName-error" className={styles.errorText}>{errors.fullName}</span>}
                  </div>

                  {/* Email */}
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address <span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="Enter your email..."
                      className={styles.input}
                      value={formData.email}
                      onChange={handleInputChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <span id="email-error" className={styles.errorText}>{errors.email}</span>}
                  </div>

                  {/* Phone Number */}
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone Number <span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      placeholder="+91 00000 00000"
                      className={styles.input}
                      value={formData.phone}
                      onChange={handleInputChange}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && <span id="phone-error" className={styles.errorText}>{errors.phone}</span>}
                  </div>

                  {/* Referred By */}
                  <div className={styles.formGroup}>
                    <label htmlFor="referredBy" className={styles.label}>
                      Referred By <span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="text" 
                      id="referredBy" 
                      name="referredBy"
                      placeholder="Who referred you..."
                      className={styles.input}
                      value={formData.referredBy}
                      onChange={handleInputChange}
                      aria-invalid={!!errors.referredBy}
                      aria-describedby={errors.referredBy ? "referredBy-error" : undefined}
                    />
                    {errors.referredBy && <span id="referredBy-error" className={styles.errorText}>{errors.referredBy}</span>}
                  </div>

                  {/* Message */}
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label htmlFor="message" className={styles.label}>
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      placeholder="Enter your message here..."
                      className={styles.textarea}
                      value={formData.message}
                      onChange={handleInputChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        {errors.message && <span id="message-error" className={styles.errorText}>{errors.message}</span>}
                      </div>
                      <span className={styles.charCount}>{formData.message.length}/300</span>
                    </div>
                  </div>

                </div>

                {/* Attachment */}
                <div className={styles.formGroup} style={{ marginBottom: '24px' }}>
                  <label className={styles.label}>Attachment</label>
                  <div className={styles.fileUploadWrapper}>
                    <label htmlFor="attachment" className={styles.fileLabel}>
                      Choose File
                    </label>
                    <input 
                      type="file" 
                      id="attachment" 
                      name="attachment"
                      className={styles.fileInput}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      aria-invalid={!!errors.attachment}
                      aria-describedby={errors.attachment ? "attachment-error" : undefined}
                    />
                    <span className={styles.fileName}>
                      {file ? file.name : "No file chosen"}
                    </span>
                  </div>
                  {errors.attachment && <span id="attachment-error" className={styles.errorText} style={{ marginTop: '-20px', marginBottom: '20px', display: 'block' }}>{errors.attachment}</span>}
                </div>

                {/* Checkbox */}
                <div className={styles.checkboxWrapper}>
                  <input 
                    type="checkbox" 
                    id="agree" 
                    name="agree"
                    className={styles.checkbox}
                    checked={formData.agree}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.agree}
                    aria-describedby={errors.agree ? "agree-error" : undefined}
                  />
                  <div className={styles.formGroup}>
                    <label htmlFor="agree" className={styles.checkboxLabel}>
                      I hereby agree to our <Link to="/privacy-policy" className={styles.privacyLink}>Privacy Policy terms</Link>. 
                      <span style={{ display: 'block', fontSize: '12px', marginTop: '4px', opacity: 0.6 }}>
                        (Data is only used to respond to your inquiry)
                      </span>
                    </label>
                    {errors.agree && <span id="agree-error" className={styles.errorText}>{errors.agree}</span>}
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={!isFormFilled || isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Form"}
                  {!isSubmitting && <Send size={18} />}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "hr-consulting",
    title: "HR Consulting",
    shortDescription: "Strategic human resource planning and talent optimization for global enterprises.",
    image: "/images/HR Consulting.png"
  },
  {
    id: "payroll-management",
    title: "Payroll Management",
    shortDescription: "Secure, compliant, and automated payroll processing systems.",
    image: "/images/Payroll Management.png"
  },
  {
    id: "staffing-solutions",
    title: "Staffing Solutions",
    shortDescription: "Agile workforce deployment connecting ambitious talent with top enterprises.",
    image: "/images/Staffing Solutions.png"
  },
  {
    id: "web-development",
    title: "Web Development Services",
    shortDescription: "Cutting-edge digital solutions, web applications, and enterprise software.",
    image: "/images/Web Development.png"
  },
  {
    id: "bpo-sales",
    title: "BPO/KPO & Inside Sales",
    shortDescription: "High-performance outsourced operations and inside sales staffing.",
    image: "/images/BPO KPO & Inside Sales.png"
  },
  {
    id: "training-courses",
    title: "Training Courses",
    shortDescription: "Certified upskilling bootcamps and advanced corporate training programs.",
    image: "/images/Training Courses.png"
  }
];

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  role: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    problem: string;
    whatIBuilt: string;
    outcome: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
}

export interface AdditionalInternship {
  role: string;
  company: string;
  dates: string;
}

export const RESUME_DATA = {
  name: "Mayank Sharma",
  title: "Generative AI and Full Stack Engineer",
  positioning: "Final year B.Tech CSE (AI and ML) student at KCC Institute of Technology and Management with hands on experience in generative AI integration and full stack development. Currently engineering AI plugins and backend APIs at MHTECHIN.",
  contact: {
    phone: "7505058317",
    email: "mayanksharmapahasu@gmail.com",
    location: "Bulandshahr, Uttar Pradesh",
    github: "https://github.com/MayankSharma-24",
    leetcode: "https://leetcode.com/u/Mayank2407",
    linkedin: "https://linkedin.com/in/[YOUR-LINKEDIN-HANDLE]",
  },
  education: {
    degree: "B.Tech in Computer Science and Engineering (AI and ML)",
    college: "KCC Institute of Technology and Management",
    expectedGraduation: "2027",
    cgpa: "7.4 / 10",
  },
  about: [
    "Final year B.Tech Computer Science and Engineering (AI and ML) student at KCC Institute of Technology and Management with an academic score of 7.4 / 10 CGPA.",
    "Currently working as a Generative AI Intern and Plugin Engineer at MHTECHIN, contributing to AI integration and performance optimization on live production pipelines.",
    "Combines university coursework in Machine Learning and OOP with industry certifications in Generative AI Studio and MERN stack engineering to build reliable software solutions."
  ],
  experience: [
    {
      role: "Generative AI Intern and Plugin Engineer",
      company: "MHTECHIN (Mhaske Technologies Pvt. Ltd.)",
      location: "Remote",
      dates: "Aug 2026 to Present",
      bullets: [
        "Interning in the Data Science and AI team, working on generative AI development and plugin engineering.",
        "Contributed AI integration and performance optimization for an internal Google Maps scraper project.",
        "Engineered reliable AI service layers with targeted throughput and latency improvements."
      ]
    }
  ] as Experience[],
  additionalInternships: [
    {
      role: "UI/UX Design Intern",
      company: "SYNTECXHUB",
      dates: "Jun to Jul 2026"
    },
    {
      role: "Full Stack Development Intern",
      company: "CodeAlpha",
      dates: "Jun to Jul 2026"
    },
    {
      role: "Web Development Intern",
      company: "Prodigy InfoTech",
      dates: "Jun to Jul 2026"
    }
  ] as AdditionalInternship[],
  projects: [
    {
      id: "google-maps-scraper",
      title: "Google Maps Scraper",
      category: "AI Integration and Performance Optimization",
      summary: "Data scraping pipeline designed to extract, enrich, and optimize Google Maps business records.",
      role: "AI Integration and Performance Engineer",
      tech: ["Python", "Generative AI", "AI Integration", "Performance Optimization"],
      githubUrl: "https://github.com/MayankSharma-24/[REPO-PLACEHOLDER]",
      caseStudy: {
        problem: "Extracting business listings at scale frequently encountered pipeline bottlenecks, noisy data, and slow throughput during enrichment.",
        whatIBuilt: "Owned the AI integration layer of a Google Maps data scraping pipeline during my Generative AI internship, designing custom AI processing workflows and queue management.",
        outcome: "Accelerated scraping speeds significantly and improved overall pipeline reliability through targeted batching and pipeline optimizations."
      }
    },
    {
      id: "jetfour-security",
      title: "JetFour Security: Admin Panel Backend",
      category: "MHTECHIN Client Project",
      summary: "Enterprise backend system supporting administrative controls, multi-role security, payroll, and reporting operations.",
      role: "Backend Engineer",
      tech: ["Node.js", "Express.js", "Sequelize ORM", "MySQL", "JWT Authentication", "RESTful APIs"],
      githubUrl: "https://github.com/MayankSharma-24/[REPO-PLACEHOLDER]",
      caseStudy: {
        problem: "Client required a centralized, secure backend to orchestrate employee records, attendance, payroll, expenses, and asset inventory across multiple offices.",
        whatIBuilt: "Developed and tested the admin side backend, constructing secure REST APIs across Employee Management, Attendance, Payroll, Expense Management, Inventory, and Reports with Sequelize associations and validation layers.",
        outcome: "Delivered JWT protected route architectures with rigorous end to end API validation, giving client operations a dependable management foundation."
      }
    },
    {
      id: "linkedin-lead-scraper",
      title: "LinkedIn Lead Scraper: Chrome Extension",
      category: "Browser Extension and Data Tool",
      summary: "Modular Chrome Extension for automated keyword-driven LinkedIn lead collection, deduplication, and CSV export.",
      role: "Sole Developer",
      tech: ["JavaScript", "HTML", "CSS", "Chrome Extension Development", "Data Normalization"],
      githubUrl: "https://github.com/MayankSharma-24/[REPO-PLACEHOLDER]",
      caseStudy: {
        problem: "Manual prospecting on LinkedIn was repetitive, slow, and prone to duplicate entries when capturing prospect contact information.",
        whatIBuilt: "Engineered a modular Chrome Extension implementing DOM extraction, real time scraping status tracking, persistent local storage, and automated duplicate detection.",
        outcome: "Streamlined outreach workflows with single click Excel compatible CSV exports and normalized lead structures."
      }
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker with Analytics Dashboard",
      category: "Full Stack Web Application",
      summary: "Personal finance web application with an interactive dashboard for visualizing spending patterns and trends.",
      role: "Full Stack Developer",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Vercel", "Render"],
      liveUrl: "https://[LIVE-URL-PLACEHOLDER]",
      githubUrl: "https://github.com/MayankSharma-24/[REPO-PLACEHOLDER]",
      caseStudy: {
        problem: "Users needed an easy way to log daily expenses and get clear, visual feedback on categorical expenditure over time.",
        whatIBuilt: "Built a complete MERN stack application featuring responsive dashboards, RESTful CRUD endpoints for expense management, and visual analytics.",
        outcome: "Deployed frontend on Vercel and backend on Render with reliable cloud-hosted MongoDB storage."
      }
    },
    {
      id: "two-good",
      title: "Two Good: Interactive Product Showcase",
      category: "Frontend and 3D Visuals",
      summary: "Product showcase site featuring custom Three.js 3D models and fluid GSAP scroll choreography.",
      role: "Frontend and Creative Developer",
      tech: ["HTML", "CSS", "JavaScript", "Three.js", "GSAP"],
      liveUrl: "https://[LIVE-URL-PLACEHOLDER]",
      githubUrl: "https://github.com/MayankSharma-24/[REPO-PLACEHOLDER]",
      caseStudy: {
        problem: "Standard product landing pages suffer from static layouts that fail to engage modern design conscious audiences.",
        whatIBuilt: "Crafted a performant product showcase using HTML, CSS, and JavaScript, integrating Three.js viewport rendering and GSAP scroll driven animation timelines.",
        outcome: "Created an interactive experience with 60fps animations and smooth spatial transitions."
      }
    },
    {
      id: "duo-studio",
      title: "Duo Studio: Product Showcase",
      category: "Frontend and 3D Elements",
      summary: "Product showcase site leveraging Three.js 3D scene elements, DOM driven interactivity, and GSAP motion.",
      role: "Frontend and Creative Developer",
      tech: ["HTML", "CSS", "JavaScript", "Three.js", "GSAP", "DOM Interactivity"],
      liveUrl: "https://[LIVE-URL-PLACEHOLDER]",
      githubUrl: "https://github.com/MayankSharma-24/[REPO-PLACEHOLDER]",
      caseStudy: {
        problem: "Showcasing digital design studio work requires rich visual presentation and dynamic cursor and scroll interactions.",
        whatIBuilt: "Built an interactive showcase site featuring DOM driven reactive elements, Three.js 3D objects, and GSAP choreographed motion typography.",
        outcome: "Delivered a portfolio showcase demonstrating technical competence in browser based creative coding."
      }
    }
  ] as Project[],
  skills: {
    "Programming Languages": ["Python", "C++", "JavaScript", "C", "HTML", "CSS"],
    "AI and Machine Learning": ["Machine Learning (coursework)", "Generative AI", "AI Integration"],
    "Web and Backend": ["Backend Development", "React.js", "Node.js", "Express.js", "Sequelize ORM", "MySQL", "MongoDB", "RESTful APIs", "JWT Authentication", "Chrome Extension Development"],
    "Frontend and Animation": ["Three.js", "GSAP"],
    "Tools and Platforms": ["Git", "GitHub", "VS Code", "Postman", "Figma"]
  },
  certifications: [
    {
      name: "Introduction to Generative AI Studio",
      issuer: "Simplilearn SkillUp",
      date: "Jul 2026"
    },
    {
      name: "Node.js, ReactJS, MEAN Stack and MERN Stack",
      issuer: "Simplilearn SkillUp",
      date: "Jul 2026"
    }
  ]
};

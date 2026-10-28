/**
 * ============================================================
 * Portfolio Data Layer (Updated per User Instructions)
 * ============================================================
 */

// Helper to ensure assets load properly on both local dev and GitHub Pages (/My_Portfolio/)
const asset = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

// 1. Personal & Professional Profile
export const studentProfile = {
  name: "Mayuresh Parab",
  title: "Full-Stack Web Developer & Computer Engineering Student",
  currentDegree: "B.E. in Computer Engineering",
  currentCollege: "Atharva College of Engineering, Mumbai",
  avatar: asset("assets/images/profile/My self.jpeg"), // 1st position (Hero pfp / 1st img box)
  profilePic: asset("assets/images/profile/my self 2.jpg"), // 2nd position (About Me / 2nd img box)
  github: "https://github.com/mayu10-cyber",
  shortBio: "Passionate computer engineering student at Atharva College of Engineering with practical internship experience from TejYash Cyber Solutions. Dedicated to engineering intuitive, secure, and user-centric web and mobile solutions.",
  detailedBio: "I am a proactive software developer with hands-on experience building production web applications, e-commerce platforms, and safety applications. With core focus in React.js, HTML5, CSS3, C, C++, and Python, I focus on writing clean, scalable code and delivering polished user experiences."
};

// 2. Contact Information & Social Channels
export const contactInfo = {
  email: "Mayureshparab10@gmail.com",
  phone: "8879130818",
  whatsapp: "8879130818",
  whatsappUrl: "https://wa.me/918879130818",
  github: "https://github.com/mayu10-cyber",
  location: "Mumbai, Maharashtra, India",
  socialMedia: [
    {
      id: "github",
      platform: "GitHub",
      icon: "bi-github",
      url: "https://github.com/mayu10-cyber",
      color: "#24292e"
    },
    {
      id: "instagram",
      platform: "Instagram",
      icon: "bi-instagram",
      url: "https://www.instagram.com/mayurreshparab?utm_source=qr&igsh=MW43NGdiaHhlb200Zg==",
      color: "#E1306C"
    },
    {
      id: "facebook",
      platform: "Facebook",
      icon: "bi-facebook",
      url: "https://www.facebook.com/",
      color: "#1877F2"
    },
    {
      id: "youtube",
      platform: "YouTube",
      icon: "bi-youtube",
      url: "https://www.youtube.com/watch?v=nHSv3GD2RSQ",
      color: "#FF0000"
    },
    {
      id: "snapchat",
      platform: "Snapchat",
      icon: "bi-snapchat",
      url: "https://www.snapchat.com/add/mayureshparab10?share_id=J4hn9DgGYrw&locale=en-IN",
      color: "#FFB800"
    },
    {
      id: "discord",
      platform: "Discord",
      icon: "bi-discord",
      url: "https://discord.com/channels/@me",
      color: "#5865F2"
    }
  ]
};

// 3. Skills & Internship Experience Data (Removed word "Industry", strictly requested skills only)
export const internshipAndSkillsData = {
  title: "Skills & Experience",
  subtitle: "Internship experience, core competencies, and project accomplishments.",
  internship: {
    company: "TejYash Cyber Solutions (TYCS)",
    role: "Web Development Intern",
    type: "Internship Experience (Team Collaboration)",
    duration: "Completed during Diploma Engineering",
    description: "Collaborated with team members to conceptualize, design, and develop responsive web applications, client solutions, and mobile web prototypes using JavaScript, HTML5, CSS3, and modern web frameworks.",
    achievements: [
      {
        title: "TejYash Cyber Solutions (TYCS) Website",
        description: "Built the official corporate web platform featuring interactive service showcases, automated appointment booking, and Google Maps integration."
      },
      {
        title: "BookNook E-Commerce Platform",
        description: "Co-developed a comprehensive bookstore web application featuring interactive book previews, real-time wishlist, and a dynamic shopping cart."
      },
      {
        title: "SheRise Women Safety App",
        description: "Engineered an urgent emergency assistance web app featuring one-tap SOS alert broadcasting, emergency contacts, and mental wellness tools."
      },
      {
        title: "Dating & Social Discovery Application",
        description: "Designed and developed an interactive dating and social discovery prototype featuring user profile cards, match filters, and responsive chat interface."
      }
    ]
  },
  // Strictly requested skills: React.js, HTML, CSS, C, C++, Python at beginner
  skills: [
    { name: "React.js", level: "Intermediate" },
    { name: "HTML5", level: "Proficient" },
    { name: "CSS3", level: "Proficient" },
    { name: "C Programming", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "Python", level: "Beginner" }
  ]
};

// 4. Featured Projects with Real Screenshots & Analyzed Features
export const projectsData = {
  title: "My Projects",
  projects: [
    {
      id: "tycs-website",
      title: "TejYash Cyber Solutions (TYCS) Official Website",
      category: "Corporate Web Platform",
      client: "TejYash Cyber Solutions",
      role: "Frontend Developer (Team Project)",
      tech: ["JavaScript", "HTML5", "CSS3", "Google Maps API", "Responsive Design"],
      summary: "Developed the corporate web platform for TejYash Cyber Solutions with team members during my internship, providing a one-stop portal for cybersecurity services, hardware sales, and IT consulting.",
      features: [
        "Interactive 'Who We Are' hero section with modern 3D isometric hardware illustrations.",
        "Comprehensive service catalog: Computer & Laptop Sales, Hardware Repairing, Refurbished Devices, and Web Development.",
        "Interactive 'Book a Service' form with automated scheduling (Date, Time Slot, Home Service vs. In-Shop).",
        "Dedicated & Experienced Team showcase displaying technical leads and credentials.",
        "Interactive Google Maps integration for Mazgaon, Mumbai location with 'Open in Maps' and 'Share Map' functionality.",
        "Direct multi-channel contact portal supporting phone lines, official email, and instant WhatsApp chat."
      ],
      screenshots: [
        { src: asset("assets/images/TYCS-1.png"), caption: "Home & Corporate Mission Showcase" },
        { src: asset("assets/images/TYCS-2.png"), caption: "Cybersecurity & IT Services Dashboard" },
        { src: asset("assets/images/TYCS-3.png"), caption: "Hardware Solutions & Sales Grid" },
        { src: asset("assets/images/TYCS-4.png"), caption: "Interactive Service Booking & Scheduling Form" },
        { src: asset("assets/images/TYCS-5.png"), caption: "Leadership & Technical Team Profile" },
        { src: asset("assets/images/TYCS-6.png"), caption: "Contact Us with Live Google Maps & Direct Messaging" }
      ]
    },
    {
      id: "booknook-ecommerce",
      title: "BookNook – E-Commerce Bookstore Platform",
      category: "E-Commerce Web Application",
      client: "Internship Project (TYCS)",
      role: "Frontend Developer (Team Project)",
      tech: ["JavaScript", "HTML5", "CSS3", "Dynamic Cart", "State Management"],
      summary: "Engineered a full-featured online literary haven and bookstore with my team during my TYCS internship, incorporating trending book carousels, wishlist management, and an interactive shopping cart with coupon support.",
      features: [
        "Trending Books Carousel with cover imagery, author credits, and INR (₹) price formatting.",
        "Multi-category top navigation (Genres, Trending, Top 20 Must-Read Books, Kids Books, Deals, and Stationery).",
        "Interactive 3D Pill Card preview with book synopsis (The Alchemist, etc.) and quick-add actions.",
        "Dedicated 'My Wishlist' table with one-click 'Add to Cart', item deletion, and instant 'Buy All' action.",
        "Real-Time 'Your Shopping Cart' with live quantity selectors, subtotal calculations, and item removal.",
        "Promo Coupon Code redemption engine and printable/downloadable PDF order receipts."
      ],
      screenshots: [
        { src: asset("assets/images/book-1.png"), caption: "Trending Books Catalog & Interactive Navigation" },
        { src: asset("assets/images/Book-2.png"), caption: "About BookNook & Community Hub Showcase" },
        { src: asset("assets/images/Book-3.png"), caption: "Interactive 3D Book Synopsis & Card Preview" },
        { src: asset("assets/images/Book-4.png"), caption: "Top 20 Must-Read Curated Collection" },
        { src: asset("assets/images/Book-5.png"), caption: "Dynamic Wishlist with Bulk 'Buy All' Feature" },
        { src: asset("assets/images/Book-6.png"), caption: "Shopping Cart with Real-Time Total & Coupon Engine" }
      ]
    },
    {
      id: "sherise-safety-app",
      title: "SheRise – Women Safety & Wellness Application",
      category: "Emergency & Wellness Platform",
      client: "Internship Project (TYCS)",
      role: "Frontend Developer (Team Project)",
      tech: ["JavaScript", "HTML5", "CSS3", "Mobile UI", "Emergency Geolocation"],
      summary: "Created an empowering women safety and mental wellness platform with my team to deliver immediate SOS distress alert broadcasting alongside comprehensive mental wellness tools.",
      features: [
        "Prominent One-Tap SOS Emergency button with instant distress signal broadcast.",
        "Live location sharing to pre-selected emergency contacts and local authorities.",
        "Fast-dial crisis helpline shortcuts: Police, Women Helpline, Ambulance, and Instant Medical Advice.",
        "Emergency video recording integration to capture evidence during distress situations.",
        "Mental Wellness Suite: Guided breathing exercises designed to alleviate acute anxiety.",
        "Curated meditation tracks and de-stressing interactive mini games (Bubble Pop, Zen Garden)."
      ],
      screenshots: [
        { src: asset("assets/images/she-1.png"), caption: "Mobile Companion Dashboard & One-Touch SOS Emergency" },
        { src: asset("assets/images/she-2.png"), caption: "Emergency Distress Dispatch & Live Location Sharing" },
        { src: asset("assets/images/she-3.png"), caption: "Comprehensive Mental Wellness & Guided Breathing Suite" }
      ]
    }
  ]
};

// 5. Education Timeline (Structured Text Only - No Images)
export const educationHistory = [
  {
    id: "degree",
    level: "Undergraduate Degree",
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    institution: "Atharva College of Engineering",
    affiliation: "Affiliated to University of Mumbai",
    location: "Malad, Mumbai",
    status: "Currently Pursuing (Direct Second Year / Sem 3)",
    duration: "2024 - Present",
    description: "Currently pursuing degree studies focusing on advanced computer engineering disciplines, data structures, algorithms, object-oriented software engineering, and full-stack software development.",
    keyHighlights: [
      "Advanced Data Structures & Algorithms",
      "Full-Stack Web Development & Modern Frameworks",
      "Software Engineering & System Architecture",
      "Computer Networks & Operating Systems"
    ]
  },
  {
    id: "diploma",
    level: "Diploma Engineering",
    degree: "Diploma in Computer Engineering",
    institution: "Vidyalankar Polytechnic",
    affiliation: "MSBTE Board",
    location: "Wadala, Mumbai",
    status: "Completed",
    duration: "2021 - 2024",
    description: "Built strong fundamentals in computer engineering principles, hardware-software interfacing, web technologies, and programming paradigms. Acquired hands-on practical skills in lab implementations and technical project exhibitions.",
    keyHighlights: [
      "Core Programming in C, C++, and Java",
      "Web Technologies: HTML5, CSS3, JavaScript",
      "Hardware Interfacing & Microcontrollers (PIC)",
      "Database Management Systems & Computer Networks"
    ]
  },
  {
    id: "school",
    level: "Secondary School Certificate (SSC)",
    degree: "10th Standard (SSC Board)",
    institution: "Cardinal Gracias High School",
    affiliation: "Maharashtra State Board",
    location: "Bandra, Mumbai",
    status: "Passed with 76%",
    duration: "Graduated",
    description: "Completed secondary education with distinction, demonstrating academic diligence and active participation in school co-curricular sports and cultural activities.",
    keyHighlights: [
      "Secured 76% in Maharashtra State Board Examinations",
      "Strong foundation in Mathematics and Physical Sciences",
      "Participated in inter-school competitions and cultural events"
    ]
  }
];

// 6. Hobbies (Sorted strictly per request: 1. Collectibles (coins & cars), 2. Sports, 3. Dance)
// Removed art & creative artwork gallery section
export const hobbiesData = {
  title: "Hobbies & Interests",
  subtitle: "Personal passions and activities outside technical development.",
  items: [
    {
      id: "collectibles",
      name: "Collectibles (Coins & Cars)",
      icon: "bi-collection",
      description: "Collecting historic, rare currency coins and detailed miniature die-cast model cars."
    },
    {
      id: "sports",
      name: "Sports & Athletics",
      icon: "bi-trophy",
      description: "Cricket, athletic sports competitions, and college tug-of-war tournaments."
    },
    {
      id: "dance",
      name: "Dance & Performing Arts",
      icon: "bi-music-note-beamed",
      description: "Expressing energy, rhythm, and choreography through live stage performances."
    }
  ],
  video: {
    src: asset("assets/videos/Dance.mp4"),
    title: "Live Dance Performance Video",
    description: "Watch stage dance performance demonstrating choreography and stage presence."
  }
};

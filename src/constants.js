// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import chartjsLogo from './assets/tech_logo/chartjs.png';
import echartLogo from './assets/tech_logo/echart.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import mantineLogo from './assets/tech_logo/mantineui.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import jQueryLogo from './assets/tech_logo/jquery.png';
import figmaLogo from './assets/tech_logo/figma.png';
import canvaLogo from './assets/tech_logo/canva.png';
import VisualStudioLogo from './assets/tech_logo/Visual-Studio.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import shipgigLogo from './assets/company_logo/shipgig-logo.png';
import jmsLogo from './assets/company_logo/logojms.webp';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import rmlLogo from './assets/education_logo/rmlu.png';
import maharishiLogo from './assets/education_logo/LogoMuit.png';
import newPublicLogo from './assets/education_logo/NPA.png';
import ssniLogo from './assets/education_logo/SSNIC.png';

// Project Section Logo's
import tripforoLogo from './assets/work_logo/tripforo-com-B2B-Travel-Portal-Travel-.png';
import evAdvantageLogo from './assets/work_logo/evadvantage.png';
import ucAdvantageLogo from './assets/work_logo/ucadvantage.png';
import powerof10Logo from './assets/work_logo/Power-of-10.png';
import buvonsLogo from './assets/work_logo/Buvons-Local-Pro.png';
import cartservicesLogo from './assets/work_logo/Solid-Waste-Recycling-Cart-Management.png';
import yamsoleLogo from './assets/work_logo/Yamsouls-Find-Your-Perfect-Healing-Crystal.png';
import sanjadityaLogo from './assets/work_logo/sanjadityadesigns.png';
import aaamLogo from './assets/work_logo/aaamuae.png'; sanmargLogo
import aaacaLogo from './assets/work_logo/aaaca.png';
import sanmargLogo from './assets/work_logo/Sanmarg-news.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Chart JS', logo: chartjsLogo },
      { name: 'Echarts', logo: echartLogo },
      { name: 'Mantine UI', logo: mantineLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'jQuery', logo: jQueryLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Canva', logo: canvaLogo },
      { name: 'Visual Studio', logo: VisualStudioLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: shipgigLogo,
    role: "Frontend Developer",
    company: "Shipgig Ventures Pvt Ltd",
    date: "August 2022 - Present",
    desc: "Developed dynamic, scalable, and responsive web interfaces using modern frontend technologies including HTML5, CSS3, JavaScript (ES6+), jQuery, Bootstrap, SCSS, and React.js. Collaborated with cross-functional teams to convert UI/UX designs into clean, functional interfaces while following best practices in responsive web design and cross-browser compatibility. Integrated RESTful APIs using Postman, and worked extensively with data visualization tools such as Chart.js, Recharts, and ngx-charts. Applied performance optimization techniques like lazy loading and code splitting to enhance speed and user experience. Maintained code versioning with Git/GitHub and debugged efficiently using Chrome DevTools. Also contributed to Angular-based modules in agile team environments.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Angular",
      "Chart JS",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "jQuery",
      "Echarts",
      "WordPress",
    ],
  },
  {
    id: 1,
    img: jmsLogo,
    role: "Junior Web Designer",
    company: "Jubilant Media Studios Pvt Ltd",
    date: "May 2022 -  July 2022",
    desc: "Assisted in designing and developing responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap. Contributed to UI enhancements, animations, and layout improvements to deliver visually appealing and user-friendly designs. Gained hands-on experience in Photoshop for image editing and worked alongside senior designers to understand design systems and cross-browser compatibility.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Animations",
      "PhotoShop",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: rmlLogo,
    school: "Dr. Ram Manohar Lohia Avadh University, Ayodhya",
    date: "Completed in June 2021",
    grade: "57% marks",
    desc: "I earned my Bachelor's degree in Science from Dr. Ram Manohar Lohia Avadh University, where I developed strong problem-solving abilities and a logical mindset. This academic journey laid the groundwork for analytical thinking and helped me transition smoothly into the tech domain. My interest in technology, combined with a disciplined scientific approach, motivated me to pursue a career in software development.",
    degree: "Bachelor of Science (B.Sc)"
  },
  {
    id: 1,
    img: maharishiLogo,
    school: "Maharishi University of Information Technology, Lucknow",
    date: "Completed in May 2016",
    grade: "70% marks",
    desc: "I pursued a diploma program from Maharishi University of Information Technology, Lucknow, where I developed a solid understanding of core technical concepts and practical problem-solving. My academic experience included working with real-world systems, learning structured design principles, and exploring the application of technology in various domains. This foundation played a vital role in shaping my logical thinking, discipline, and interest in building functional, scalable digital solutions — which eventually led me to transition into the IT field.",
    degree: "Diploma in Engineering"
  },
  {
    id: 2,
    img: ssniLogo, // Replace this with actual logo or image path
    school: "SSNI College, Allahabad",
    date: "Completed in March 2013",
    grade: "84%",
    desc: "I completed my Higher Secondary education from SSNI College, Allahabad, affiliated with the Uttar Pradesh Board. During this period, I built a strong academic foundation in the science stream and developed an early interest in analytical thinking and structured problem-solving, which later supported my transition into the tech field.",
    degree: "(XII) Intermediate - Science Stream (UP Board)"
  }
  ,
  {
    id: 3,
    img: newPublicLogo, // Replace with your actual image or logo
    school: "New Public Academy Inter College, Lucknow",
    date: "Completed in March 2011",
    grade: "57%",
    desc: "I completed my High School education from New Public Inter College, Lucknow, under the Uttar Pradesh Board with a focus on Science. This period laid the groundwork for my curiosity in technology and systems, which gradually evolved into a career in the IT domain.",
    degree: "(X) High School - Science Stream (UP Board)"
  },
];

export const projects = [
  {
    id: 0,
    title: "Tripforo B2B Travel Portal",
    description: [
      "Developed a B2B flight booking web application using Angular, implementing distinct modules for suppliers and agents.",
      "Built a responsive and intuitive user interface using Angular Material and custom CSS, ensuring seamless user experience across all device types and screen sizes.",
      "Collaborated with backend teams for efficient API integration and optimized performance."
    ],
    image: tripforoLogo,
    tags: ["Angular", "TypeScript", "HTML", "Bootstarp", "SCSS", "Angular Material", "REST API"],
    github: "https://github.com/mayanksir20",
    webapp: "https://www.tripforo.com",
  },
  {
    id: 1,
    title: "EV Advantage – Employment & Income Verification",
    description: [
      "Worked as a UI Developer on an employment and income verification platform built with .NET.",
      "Implemented responsive frontend interfaces using HTML, CSS, JavaScript, and AJAX to ensure a smooth user experience.",
      "Designed intuitive screens for job listings, candidate verification workflows, and employer dashboards.",
      "Collaborated with backend developers for seamless integration of frontend logic with server-side APIs."
    ],
    image: evAdvantageLogo,
    tags: ["HTML", "CSS", "JavaScript", "AJAX", ".NET", "Responsive Design"],
    github: "https://github.com/mayanksir20",
    webapp: "https://www.evadvantage.com"
  },
  {
    id: 2,
    title: "UCAdvantage – Admin Panel & SIDES Dashboard",
    description: [
      "Contributed to the development of UCAdvantage's .NET-based admin panel and SIDES portal for claim initiation and employee separation processes.",
      "Focused on building responsive, cross-browser compatible UI components using HTML, CSS, JavaScript, and AJAX.",
      "Collaborated with backend engineers to integrate UI with real-time data and streamline user workflows.",
      "Enhanced overall user experience by optimizing interface performance and ensuring accessibility across different platforms."
    ],
    image: ucAdvantageLogo,
    tags: ["HTML", "CSS", "JavaScript", "AJAX", "Bootstarp", ".NET", "Responsive UI"],
    github: "https://github.com/mayanksir20",
    webapp: "https://ucadvantage.net"
  },
  {
    id: 3,
    title: "BuVons Local Pro – B2B Analytics Dashboard",
    description: [
      "Developed a responsive and scalable B2B dashboard for real-time analytics and management of suppliers, distributors, and logistics operations.",
      "Implemented interactive UI components including sales charts, summary cards, and user activity indicators using React.js and Chart.js/Recharts.",
      "Designed a responsive sidebar navigation layout with multilingual support (e.g., language toggle).",
      "Integrated REST APIs to fetch and display live data, enabling seamless backend communication and data visualization."
    ],
    image: buvonsLogo, // Replace this with your actual image import
    tags: ["React.js", "JavaScript", "HTML", "CSS", "REST API", "Chart.js", "Recharts", "GitHub"],
    github: "https://github.com/mayanksir20/Buvons-Local-PRO", // Add actual repo if different
    webapp: "https://buvons-dashboard.com" // Replace with actual live site if available
  },
  {
    id: 4,
    title: "PowerOf10.biz – Influencer Analytics Platform",
    description: [
      "Developed and maintained the frontend of the PowerOf10.biz platform using HTML, CSS, JavaScript, and jQuery.",
      "Integrated REST APIs to dynamically fetch and render real-time influencer data, blog content, and performance statistics.",
      "Designed and implemented responsive UI components ensuring smooth user interaction across all devices.",
      "Collaborated with the backend team to handle API integration, error handling, and real-time data display effectively."
    ],
    image: powerof10Logo, // Replace with the actual import
    tags: ["HTML", "CSS", "JavaScript", "Bootstarp", "jQuery", "REST API", "UI Design", "Responsive Design"],
    github: "https://github.com/mayanksir20", // Add actual repo if different
    webapp: "https://www.powerof10.biz"
  },
  {
    id: 5,
    title: "National Cart Services – Cart Calculator",
    description: [
      "Developed the frontend UI for the Cart Calculator web tool, using HTML, CSS, JavaScript, and AJAX.",
      "Fetched dynamic pricing and shipping data from APIs and visualized results using Chart.js.",
      "Created responsive, intuitive charts and summary components to help users optimize their shipping decisions.",
      "Worked closely with backend developers to ensure real-time data integration, error handling, and smooth user interaction."
    ],
    image: cartservicesLogo, // replace with your actual import
    tags: ["HTML", "CSS", "JavaScript", "AJAX", "Chart.js", "REST API", "UI Design", "Responsive Design"],
    github: "https://github.com/mayanksir20",
    webapp: "https://www.nationalcartservices.com/cart-services",
    // webapp: "https://shipgigventures.com/cart-calculator/"

  },
];


export const wordpressProjects = [
  {
    id: 1,
    title: "Yamsole – WordPress eCommerce Website",
    description: [
      "Led the complete development and setup of Yamsole, a fully responsive WordPress-based eCommerce platform.",
      "Handled custom theme development, plugin integration, and secure payment gateway setup.",
      "Created custom WordPress plugins and used shortcodes to dynamically display functionality on pages.",
      "Optimized for SEO, performance, and mobile responsiveness to enhance user experience."
    ],
    image: yamsoleLogo,
    externalUrl: "https://www.yamsole.com",
    tags: ["WordPress", "WooCommerce", "Custom Plugins", "Shortcodes", "SEO", "Responsive Design"]
  },
  {
    id: 2,
    title: "Sanjaditya Designs – WordPress Website",
    description: [
      "Developed and customized Sanjaditya Designs, a clean and responsive WordPress website for a design-based business.",
      "Handled complete theme editing and styling to match brand aesthetics.",
      "Integrated and configured multiple plugins to enhance site functionality and design flow.",
      "Created and embedded custom shortcodes for dynamic content display.",
      "Optimized the website for speed, SEO, and mobile performance."
    ],
    image: sanjadityaLogo, // replace with actual imported logo/image
    externalUrl: "https://sanjadityadesigns.com/",
    tags: ["WordPress", "Theme Customization", "Plugin Integration", "Shortcodes", "SEO", "Responsive Design"]
  },
  {
    id: 3,
    title: "AAAMUAe – WordPress Consultancy Platform",
    description: [
      "Led the end-to-end WordPress build and theme customization.",
      "Developed multi-page sections (Services, Team, Blogs, FAQ, Careers) using custom templates.",
      "Integrated dynamic content loops and reusable blocks for services and team profiles.",
      "Configured plugins and custom shortcodes/widgets for CTAs, maps, and forms.",
      "Optimized performance, SEO, and mobile responsiveness.",
      "Implemented secure contact forms and RFP proposal submission workflows."
    ],
    image: aaamLogo, // import your logo/image
    externalUrl: "https://aaamuae.com",
    tags: ["WordPress", "Theme Customization", "Plugin Integration", "Shortcodes", "SEO", "Responsive Design", "Forms"]
  },
  {
    id: 4,
    title: "AAACA.in – WordPress Coaching Platform",
    description: [
      "Developed and customized the WordPress theme to showcase courses, mentors, and success stories.",
      "Configured plugins for course listings, testimonials, events, and enquiry forms.",
      "Built custom templates for Course Details, About Us, Events, and FAQ pages.",
      "Set up secure registration and enquiry workflows integrated with email notifications.",
    ],
    image: aaacaLogo, // Import actual image/logo
    externalUrl: "https://www.aaaca.in",
    tags: [
      "WordPress",
      "Theme Customization",
      "Plugin Integration",
      "Forms",
      "Responsive Design"
    ]
  },
  {
    id: 5,
    title: "Sanmarg.in – Hindi Daily News Portal",
    description: [
      "Led the full WordPress setup and customization for a high-traffic Hindi news site.",
      "Built custom templates for news feed, local updates, e-paper sections, archives, and login pages.",
      "Integrated with Quintype-powered CMS and e-paper subscription features.",
      "Configured plugins for multilingual support, category filtering, and secure subscriber login/password reset.",
    ],
    image: sanmargLogo, // replace with actual logo/image
    externalUrl: "https://www.sanmarg.in",
    tags: [
      "WordPress",
      "Theme Development",
      "Plugin Configuration",
      "Custom Templates",
      "e‑Paper Integration",
      "Responsive Design"
    ]
  }
];



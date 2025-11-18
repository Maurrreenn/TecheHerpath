// Sidebar toggle functionality
// const menuToggle = document.getElementById('menuToggle');
// const sidebar = document.getElementById('sidebar');
// const mainContent = document.getElementById('mainContent');

// menuToggle.addEventListener('click', function() {
//     sidebar.classList.toggle('open');
//     mainContent.classList.toggle('sidebar-open');
// });

// Close sidebar when clicking outside on mobile
// document.addEventListener('click', function(event) {
//     if (window.innerWidth <= 768) {
//         const isClickInsideSidebar = sidebar.contains(event.target);
//        const isClickInsideNavbar = document.querySelector('.navbar').contains(event.target);

//         if (!isClickInsideSidebar && !isClickInsideNavbar && sidebar.classList.contains('open')) {
//             sidebar.classList.remove('open');
//            mainContent.classList.remove('sidebar-open');
//         }
//     }
//  });

// Roadmap data for each specialization
const roadmaps = {
    frontend: {
        title: "Frontend Development Roadmap",
        description: "Build beautiful, interactive user interfaces and web experiences",
        steps: [
            {
                title: "Foundation Skills",
                content: "Learn HTML, CSS, and JavaScript fundamentals. Understand responsive design and accessibility principles.",
                resources: [
                    "FreeCodeCamp - Responsive Web Design",
                    "MDN Web Docs - JavaScript Guide",
                    "CSS-Tricks Complete Guide to Flexbox"
                ]
            },
            {
                title: "Frontend Frameworks",
                content: "Master popular frameworks like React, Vue, or Angular. Learn component-based architecture.",
                resources: [
                    "React Official Documentation",
                    "Vue.js Guide",
                    "Angular University Courses"
                ]
            },
            {
                title: "Build Tools & Package Managers",
                content: "Get comfortable with npm/yarn, Webpack, and version control with Git.",
                resources: [
                    "npm Documentation",
                    "Webpack Getting Started",
                    "Git Handbook"
                ]
            },
            {
                title: "Advanced Concepts",
                content: "Learn state management, testing, performance optimization, and TypeScript.",
                resources: [
                    "Redux Documentation",
                    "Jesting Testing Framework",
                    "TypeScript Handbook"
                ]
            },
            {
                title: "Portfolio & Job Ready",
                content: "Build projects, contribute to open source, prepare for technical interviews.",
                resources: [
                    "Frontend Mentor Challenges",
                    "GitHub Open Source Projects",
                    "Tech Interview Handbook"
                ]
            }
        ]
    },
    backend: {
        title: "Backend Development Roadmap",
        description: "Create robust server-side applications and APIs",
        steps: [
            {
                title: "Programming Fundamentals",
                content: "Learn a backend language like Python, Java, or Node.js. Understand basic algorithms and data structures.",
                resources: [
                    "Python for Everybody",
                    "Java Programming Masterclass",
                    "Node.js Official Guide"
                ]
            },
            {
                title: "Databases & APIs",
                content: "Master SQL and NoSQL databases. Learn REST API design and GraphQL.",
                resources: [
                    "SQLZoo Interactive Tutorial",
                    "MongoDB University",
                    "REST API Tutorial"
                ]
            },
            {
                title: "Server Management & Deployment",
                content: "Learn about cloud platforms, containerization, and DevOps practices.",
                resources: [
                    "AWS Certified Cloud Practitioner",
                    "Docker Get Started Guide",
                    "Linux Administration Basics"
                ]
            },
            {
                title: "Security & Performance",
                content: "Understand authentication, authorization, and optimizing backend performance.",
                resources: [
                    "OWASP Security Principles",
                    "JWT Authentication Guide",
                    "System Design Primer"
                ]
            }
        ]
    },
    fullstack: {
        title: "Full-Stack Development Roadmap",
        description: "Master both frontend and backend technologies",
        steps: [
            {
                title: "Foundation in Both Worlds",
                content: "Learn frontend basics (HTML, CSS, JS) and backend fundamentals (Node.js/Python, databases).",
                resources: [
                    "The Odin Project",
                    "Full Stack Open",
                    "App Brewery Web Development"
                ]
            },
            {
                title: "Full-Stack Frameworks",
                content: "Work with frameworks that span both frontend and backend like Next.js or Django.",
                resources: [
                    "Next.js Documentation",
                    "Django Official Tutorial",
                    "MERN Stack Guide"
                ]
            },
            {
                title: "Database Integration",
                content: "Connect frontend applications to various databases and handle data flow.",
                resources: [
                    "MongoDB with Node.js",
                    "PostgreSQL with Python",
                    "Firebase Real-time Database"
                ]
            }
        ]
    },
    datascience: {
        title: "Data Science Roadmap",
        description: "Extract insights and build predictive models from data",
        steps: [
            {
                title: "Mathematics & Statistics",
                content: "Learn linear algebra, calculus, probability, and statistical analysis.",
                resources: [
                    "Khan Academy - Statistics",
                    "3Blue1Brown - Linear Algebra",
                    "Probability Course"
                ]
            },
            {
                title: "Programming & Data Manipulation",
                content: "Master Python/R, pandas, numpy, and data cleaning techniques.",
                resources: [
                    "Python for Data Analysis",
                    "R for Data Science",
                    "Data Cleaning Best Practices"
                ]
            },
            {
                title: "Machine Learning & Visualization",
                content: "Learn ML algorithms, data visualization, and model deployment.",
                resources: [
                    "Scikit-learn Tutorials",
                    "TensorFlow Certification",
                    "Tableau Public Gallery"
                ]
            }
        ]
    },
    uxui: {
        title: "UX/UI Design Roadmap",
        description: "Create intuitive and beautiful user experiences",
        steps: [
            {
                title: "Design Principles & Research",
                content: "Learn design thinking, user research methods, and usability principles.",
                resources: [
                    "Interaction Design Foundation",
                    "NN/g UX Certification",
                    "Google UX Design Certificate"
                ]
            },
            {
                title: "Wireframing & Prototyping",
                content: "Master design tools like Figma, Sketch, and Adobe XD for creating prototypes.",
                resources: [
                    "Figma Tutorial for Beginners",
                    "Adobe XD Essentials",
                    "Prototyping Best Practices"
                ]
            },
            {
                title: "Visual Design & Interaction",
                content: "Learn color theory, typography, and micro-interactions for engaging designs.",
                resources: [
                    "Color Theory for Designers",
                    "Typography in UI Design",
                    "UI Animation Principles"
                ]
            }
        ]
    },
    cybersecurity: {
        title: "Cybersecurity Roadmap",
        description: "Protect systems and data from digital threats",
        steps: [
            {
                title: "Networking & Systems",
                content: "Understand networking protocols, operating systems, and system administration.",
                resources: [
                    "Cisco Networking Basics",
                    "Linux Journey",
                    "Windows Server Administration"
                ]
            },
            {
                title: "Security Fundamentals",
                content: "Learn cryptography, vulnerability assessment, and security frameworks.",
                resources: [
                    "Cryptography I - Stanford Online",
                    "NIST Cybersecurity Framework",
                    "OWASP Top 10"
                ]
            },
            {
                title: "Ethical Hacking & Defense",
                content: "Practice penetration testing and learn defensive security strategies.",
                resources: [
                    "TryHackMe Learning Paths",
                    "HackTheBox Challenges",
                    "Cybersecurity Defense Strategies"
                ]
            }
        ]
    },
    mobile: {
        title: "Mobile Development Roadmap",
        description: "Build applications for iOS and Android platforms",
        steps: [
            {
                title: "Choose Your Platform",
                content: "Start with either iOS (Swift) or Android (Kotlin/Java), or learn cross-platform frameworks.",
                resources: [
                    "Apple Swift Tutorials",
                    "Android Developer Guides",
                    "React Native Documentation"
                ]
            },
            {
                title: "Mobile UI/UX Patterns",
                content: "Learn mobile-specific design patterns, navigation, and user interface best practices.",
                resources: [
                    "Material Design Guidelines",
                    "Human Interface Guidelines",
                    "Mobile Design Patterns"
                ]
            },
            {
                title: "Advanced Mobile Features",
                content: "Implement APIs, offline functionality, push notifications, and app store deployment.",
                resources: [
                    "Mobile API Integration",
                    "Offline-First Development",
                    "App Store Submission Guide"
                ]
            }
        ]
    },
    product: {
        title: "Product Management Roadmap",
        description: "Lead product strategy and development from idea to launch",
        steps: [
            {
                title: "Product Fundamentals",
                content: "Understand product lifecycle, market research, and customer discovery methods.",
                resources: [
                    "Inspired: How to Create Tech Products Customers Love",
                    "Product School Fundamentals",
                    "Lean Product Playbook"
                ]
            },
            {
                title: "Strategy & Roadmapping",
                content: "Learn to create product vision, strategy, and actionable roadmaps.",
                resources: [
                    "Product Strategy Framework",
                    "Roadmapping Best Practices",
                    "OKR Planning Guide"
                ]
            },
            {
                title: "Agile & Development Process",
                content: "Master agile methodologies, sprint planning, and working with development teams.",
                resources: [
                    "Scrum Alliance Certification",
                    "Agile Manifesto Principles",
                    "Jira for Product Managers"
                ]
            },
            {
                title: "Metrics & Analytics",
                content: "Learn to define and track key product metrics, A/B testing, and data-driven decisions.",
                resources: [
                    "Product Analytics Guide",
                    "A/B Testing Mastery",
                    "Metrics That Matter"
                ]
            },
            {
                title: "Leadership & Stakeholder Management",
                content: "Develop communication skills, stakeholder alignment, and product leadership.",
                resources: [
                    "Stakeholder Management Guide",
                    "Product Leadership Books",
                    "Executive Communication Skills"
                ]
            }
        ]
    }
};

// Function to show selected roadmap
function showRoadmap(specialization) {
    // Update active button
    document.querySelectorAll('.spec-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Get roadmap data
    const roadmap = roadmaps[specialization];

    // Update header
    document.getElementById('roadmap-title').textContent = roadmap.title;
    document.getElementById('roadmap-description').textContent = roadmap.description;

    // Update content
    const roadmapContent = document.getElementById('roadmap-content');
    roadmapContent.innerHTML = '';

    roadmap.steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'step';
        stepElement.innerHTML = `
                    <div class="step-header">
                        <div class="step-number">${index + 1}</div>
                        <h3 class="step-title">${step.title}</h3>
                    </div>
                    <div class="step-content">
                        <p>${step.content}</p>
                        <div class="resources">
                            <h4>Recommended Resources:</h4>
                            <ul class="resource-list">
                                ${step.resources.map(resource => `<li><a href="#">${resource}</a></li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
        roadmapContent.appendChild(stepElement);
    });
}

// Initialize with frontend roadmap
document.addEventListener('DOMContentLoaded', function () {
    showRoadmap('frontend');
});


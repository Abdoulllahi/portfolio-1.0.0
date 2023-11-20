import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
} from "../assets";
import myriad from "../assets/company/myriad.svg"
import orange from "../assets/company/orange.png";
import ept from "../assets/ept.png";
import miu from "../assets/miu.jpg";
import java from "../assets/tech/java.png";
import mysql from "../assets/tech/mysql.png";
import postgresql from "../assets/tech/postgresql.png";
import python from "../assets/tech/python.png";
import spring from "../assets/tech/spring.png";
import confidential from "../assets/confidential.png";
import library from "../assets/library.png";
import pmp from "../assets/pmp.png";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "education",
        title: "Education"
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Software Engineer",
        icon: creator,
    },
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Data Science Enthusiast",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Spring Framework",
        icon: spring,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Software Engineer/Backend",
        company_name: "MYRIAD CONNECT",
        icon: myriad,
        iconBg: "#E6DEDD",
        date: "January 2022 - July 2022",
        points: [
            "Collaborating with the mobile operators and the project manager to validate, finalize, and estimate the workload needed.",
            "Developing services following a specification document or a JIRA ticket.",
            "Creating useful plugins using Erlang to reduce the development process.",
            "Supporting deliveries using CI/CD to provide the best possible quality of service for many clients around the world.",
        ],
        technologies: [
            { name: "Erlang", color: "purple-500" },
            { name: "Python", color: "blue-500" },
            { name: "Docker", color: "teal-500" },
            { name: "SOAP", color: "yellow-500" },
            { name: "REST API", color: "green-500" },
            { name: "SQL", color: "indigo-500" },
            { name: "JIRA", color: "pink-500" },
            { name: "Confluence", color: "red-500" },
        ],
    },
    {
        title: "Software Developer",
        company_name: "Orange SN",
        icon: orange,
        iconBg: "#383E56",
        date: "July 2019 - September 2021",
        points: [
            "Creating end-to-end applications workflow diagrams using UML and across functional and application architectures.",
            "Developing backend as well as frontend applications using Spring Boot, Angular, and PostgreSQL.",
            "Using Scrum methodology for the development process",
            " Documenting and submitting reports related to projects and work.",
        ],
        technologies: [
            { name: "Python", color: "blue-500" },
            { name: "Java", color: "orange-500" },
            { name: "HTML", color: "yellow-500" },
            { name: "CSS", color: "indigo-500" },
            { name: "JavaScript", color: "green-500" },
            { name: "Spring Boot", color: "teal-500" },
            { name: "Express", color: "purple-500" },
            { name: "NodeJS", color: "pink-500" },
            { name: "Ionic", color: "red-500" },
            { name: "Angular", color: "blue-500" },
            { name: "Firebase", color: "yellow-500" },
            { name: "Docker", color: "orange-500",},
            { name: "MySQL", color: "green-500" },
            { name: "Keras", color: "teal-500" },
            { name: "TensorFlow", color: "indigo-500" },
            { name: "Scikit-learn", color: "pink-500" },
        ],
    },
    // Add more experiences as needed
];

const educations = [
    {
        university: "Maharishi International University",
        diploma: "Master of Science in Computer Science",
        duration: "January 2023 - Present",
        iconBg: "#F3F3F3",
        icon: miu,
        courses: [
            "Modern Programming Practices",
            "Web Application Programming",
            "Web Application Architecture",
            "Modern Web Applications",
            "Algorithms"
        ]
    },
    {
        university: "Thies Polytechnic School",
        diploma: "Master's Degree - Diploma in Computer and Telecommunication Design Engineering",
        duration: "January 2017 - September 2021",
        iconBg: "#fff",
        icon: ept,
        courses: [
            "Differential and Integral Calculus",
            "Linear Algebra",
            "Mechanics",
            "Physics",
            "Mechanical Engineering",
            "Chemistry",
            "Differential Equations",
            "Probabilities",
            "Statistics",
            "Numerical Analysis",
            "Vector Analysis",
            "Operational Research",
            "Algorithmic Complexity",
            "Stochastic Modeling",
            "Mathematical and Numerical Modeling",
            "IT",
            "Algorithm and Programming",
            "Web Development",
            "Database Management System",
            "Computer Architecture and Operating Systems",
            "Data Analysis",
            "Object-Oriented Programming",
            "IS Analysis and Design",
            "Advanced Database",
            "NoSQL Database",
            "IT Project Management",
            "Computer Networks",
            "Data Transmission",
            "Signal Processing",
            "Embedded Systems",
            "Stochastic Modeling",
            "Operational Research",
            "Algorithmic Complexity",
            "Web Services",
            "Image Processing and Computer Vision",
            "JEE",
            "Cryptography and Computer Security",
            "Design Patterns",
            "Advanced Databases: Distributed",
            "Security and Database Administration",
            "Big Data",
            "Mobile Networks and Services",
            "IS Governance",
            "Advanced Software Architecture (Native Cloud Application",
            "ERP technology (Containerization and Orchestration",
            "Data Warehouse",
            "Business Intelligence",
            "Machine Learning",
            "Deep Learning",
            "Blockchain",
            "Virtualization and Cloud",
            "Computer Network Services",
            "Research Methodology",
            "Communication Skills - English/French"
        ],
    },
]

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Contextual APP",
        description:
            "Implementation of a mobile application for the Orange group, whose display changes according to previous interactions with the user.",
        tags: [
            {
                name: "Ionic",
                color: "blue-text-gradient",
            },
            {
                name: "Spring Boot",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "Docker",
                color: "pink-text-gradient",
            },
            {
                name: "Kubernetes",
                color: "blue-text-gradient",
            },
        ],
        image: confidential,
        source_code_link: "https://github.com/Abdoulllahi/portfolio-1.0.0",
    },
    {
        name: "Library Management",
        description:
            "Library management software is designed to simplify the process of organizing, cataloging and circulating books in a library. It keeps track of books, patrons and circulation history, as well as managing overdue fines, reservations and much more. With the help of this software, librarians can concentrate more on excellent customer service and less on administrative tasks.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "JavaFX",
                color: "green-text-gradient",
            },
        ],
        image: library,
        source_code_link: "https://github.com/Abdoulllahi/LibraryProjectMpp.git",
    },
    {
        name: "Property Management Portal",
        description:
            "A web-based project that facilitates efficient and cost-effective information exchange between house owners and customers. With a user-friendly interface, this system is designed to meet the needs of consumers effectively.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "PostgreSQL",
                color: "green-text-gradient",
            },
            {
                name: "Spring",
                color: "pink-text-gradient",
            },
        ],
        image: pmp,
        source_code_link: "https://github.com/Abdoulllahi/property-management-frontend.git",
    },
];

export { services, technologies, experiences, testimonials, projects, educations };
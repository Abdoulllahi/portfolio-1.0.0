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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";
import myriad from "../assets/company/myriad.svg"
import orange from "../assets/company/orange.png";

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
        name: "Redux Toolkit",
        icon: redux,
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
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
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
        technologies: ["Erlang", "Python","Docker", "SOAP", "REST API", "SQL", "JIRA", "Confluence"],
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
        technologies: ["Python", "Java", "HTML", "CSS", "JavaScript", "Spring Boot",
            "Express", "NodeJS", "Ionic", "Angular", "Firebase", "MySQL", "Keras", "TensorFlow", "Scikit-learn"],
    },
];

const educations = [
    {
        university: "Thies Polytechnic School",
        diploma: "Master's Degree - Diploma in Computer and Telecommunication Design Engineering",
        duration: "January 2017 - September 2021",
        courses: []
    },
    {
        university: "Thies Polytechnic School",
        diploma: "Master's Degree - Diploma in Computer and Telecommunication Design Engineering",
        duration: "January 2022 - Present",
        courses:[]
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects, educations };
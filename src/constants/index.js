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
    // tailwind,
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
// import mysql from "../assets/tech/mysql.png";
import postgresql from "../assets/tech/postgresql.png";
import python from "../assets/tech/python.png";
import spring from "../assets/tech/spring.png";
import confidential from "../assets/confidential.png";
import library from "../assets/library.png";
import pmp from "../assets/pmp.png";
import prediction from "../assets/disease-prediction.png";

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
    // {
    //     name: "Tailwind CSS",
    //     icon: tailwind,
    // },
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
    // {
    //     name: "MySQL",
    //     icon: mysql,
    // },
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
            { name: "Erlang", color: "blue-text-gradient" },
            { name: "Python", color: "green-text-gradient" },
            { name: "Docker", color: "pink-text-gradient" },
            { name: "SOAP", color: "blue-text-gradient" },
            { name: "REST API", color: "green-text-gradient" },
            { name: "SQL", color: "pink-text-gradient" },
            { name: "JIRA", color: "blue-text-gradient" },
            { name: "Confluence", color: "green-text-gradient" },
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
            { name: "Python", color: "blue-text-gradient" },
            { name: "Java", color: "green-text-gradient" },
            { name: "HTML", color: "pink-text-gradient" },
            { name: "CSS", color: "blue-text-gradient" },
            { name: "JavaScript", color: "green-text-gradient" },
            { name: "Spring Boot", color: "pink-text-gradient" },
            { name: "Express", color: "blue-text-gradient" },
            { name: "NodeJS", color: "green-text-gradient" },
            { name: "Ionic", color: "pink-text-gradient" },
            { name: "Angular", color: "blue-text-gradient" },
            { name: "Firebase", color: "green-text-gradient" },
            { name: "Docker", color: "pink-text-gradient",},
            { name: "MySQL", color: "blue-text-gradient" },
            { name: "Keras", color: "green-text-gradient" },
            { name: "TensorFlow", color: "pink-text-gradient" },
            { name: "Scikit-learn", color: "blue-text-gradient" },
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
        name: "Disease Prediction",
        description: "This project involves leveraging artificial intelligence (AI) and machine learning to predict various diseases based on symptoms. The main objective is to develop predictive models that can aid early diagnosis in the first instance (personalized treatment planning and proactive healthcare interventions in the future). This field encompasses a wide range of diseases, symptoms and conditions.",
        tags: [],
        image: prediction,
        source_code_link: "https://github.com/Abdoulllahi/disease-prediction-with-ML",
    },
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

const certifications = [
    {
        title: "Python for Everybody Specialization",
        provider: "University of Michigan",
        issue_date: "May 2022",
        expiration_date: "This certification does not expire",
        credential_id: "RUBJUECDNCS7",
        credential_url: "https://www.coursera.org/account/accomplishments/specialization/certificate/RUBJUECDNCS7",
        type: "specialization",
    },
    {
        name: "Core Java Specialization",
        issuing_organization: "Coursera",
        issue_date: "November 2023",
        expiration_date: "This certification does not expire",
        credential_id: "8BHWYH4TKMMR",
        credential_url: "https://www.coursera.org/account/accomplishments/specialization/certificate/8BHWYH4TKMMR",
        type: "specialization",
    },      
    {
        title: "Machine Learning",
        provider: "Stanford University",
        issue_date: "July 2022",
        expiration_date: "This certification does not expire",
        credential_id: "KLNTT8QS2MH5",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/KLNTT8QS2MH5",
        type: "certification",
    },
    {
        title: "Introduction to Object-Oriented Programming with Java",
        provider: "Coursera",
        issue_date: "November 2023",
        expiration_date: "This certification does not expire",
        credential_id: "8ZMFC4UEUUE4",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/8ZMFC4UEUUE4",
        type: "certification",
    },
    {
        title: "Object-Oriented Hierarchies in Java",
        provider: "Coursera",
        issue_date: "November 2023",
        expiration_date: "This certification does not expire",
        credential_id: "XA2KKSJDM4DJ",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/XA2KKSJDM4DJ",
        type: "certification",
    },
    {
        title: "Introduction to Java",
        provider: "Coursera",
        issue_date: "November 2023",
        expiration_date: "This certification does not expire",
        credential_id: "D9592WC6PGVL",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/D9592WC6PGVL",
        type: "certification",
    },
    {
        title: "Introduction to Java",
        provider: "Coursera",
        issue_date: "November 2023",
        expiration_date: "This certification does not expire",
        credential_id: "D9592WC6PGVL",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/D9592WC6PGVL",
        type: "certification",
    },
    {
        title: "Version Control",
        provider: "Meta",
        issue_date: "September 2023",
        expiration_date: "This certification does not expire",
        credential_id: "NG5V83TD875B",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/NG5V83TD875B",
        type: "certification",
    },
    {
        title: "Advanced React",
        provider: "Meta",
        issue_date: "November 2023",
        expiration_date: "This certification does not expire",
        credential_id: "5GCBFDXNVZ6C",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/5GCBFDXNVZ6C",
        type: "certification",
    },
    {
        title: "Spring - Ecosystem and Core",
        provider: "LearnQuest",
        issue_date: "September 2023",
        expiration_date: "This certification does not expire",
        credential_id: "7F68QNEGLP49",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/7F68QNEGLP49",
        type: "certification",
    },
    {
        title: "Supervised Machine Learning: Regression and Classification",
        provider: "DeepLearning.AI, Stanford University",
        issue_date: "July 2022",
        expiration_date: "This certification does not expire",
        credential_id: "9LNP7BPYDUM7",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/9LNP7BPYDUM7",
        type: "certification",
    },
    {
        title: "React Basics",
        provider: "Meta",
        issue_date: "November 2023",
        expiration_date: "This certification does not expire",
        credential_id: "AL7XLJ4JJYJ3",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/AL7XLJ4JJYJ3",
        type: "certification",
    },
    {
        title: "Programming with JavaScript",
        provider: "Meta",
        issue_date: "September 2023",
        expiration_date: "This certification does not expire",
        credential_id: "NB8ZZ4WSQTWX",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/NB8ZZ4WSQTWX",
        type: "certification",
    },
    {
        title: "HTML and CSS in depth",
        provider: "Meta",
        issue_date: "September 2023",
        expiration_date: "This certification does not expire",
        credential_id: "BPH4A64NSPEK",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/BPH4A64NSPEK",
        type: "certification",
    },
    {
        title: "Architecting with Google Kubernetes Engine: Production",
        provider: "Google Cloud",
        issue_date: "July 2022",
        expiration_date: "This certification does not expire",
        credential_id: "XKSY2BVND22J",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/XKSY2BVND22J",
        type: "certification",
    },
    {
        title: "Introduction to Front-End Development",
        provider: "Meta",
        issue_date: "September 2023",
        expiration_date: "This certification does not expire",
        credential_id: "GK5C8HGVV3RA",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/GK5C8HGVV3RA",
        type: "certification",
    },

    {
        title: "Programming Fundamentals",
        provider: "Duke University",
        issue_date: "November 2020",
        expiration_date: "This certification does not expire",
        credential_id: "H5PYFX6DBQKV",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/H5PYFX6DBQKV",
        type: "certification",
    },
    {
        title: "Foundations of Project Management",
        provider: "Google",
        issue_date: "January 2022",
        expiration_date: "This certification does not expire",
        credential_id: "VU8UM928Z46Z",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/VU8UM928Z46Z",
        type: "certification",
    },
    {
        title: "Using Python to Access Web Data",
        provider: "University of Michigan",
        issue_date: "April 2022",
        expiration_date: "This certification does not expire",
        credential_id: "Y642RFLFF3EV",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/Y642RFLFF3EV",
        type: "certification",
    },
    {
        title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
        provider: "University of Michigan",
        issue_date: "May 2022",
        expiration_date: "This certification does not expire",
        credential_id: "9BWCWBQWQP97",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/9BWCWBQWQP97",
        type: "certification",
    },
    {
        title: "Python Basics",
        provider: "University of Michigan",
        issue_date: "June 2022",
        expiration_date: "This certification does not expire",
        credential_id: "QZNZZSYTMBSS",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/QZNZZSYTMBSS",
        type: "certification",
    },
    {
        title: "Writing, Running, and Fixing Code in C",
        provider: "Duke University",
        issue_date: "November 2020",
        expiration_date: "This certification does not expire",
        credential_id: "2M4B9PHM2VTV",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/2M4B9PHM2VTV",
        type: "certification",
    },
    {
        title: "Using Databases with Python",
        provider: "University of Michigan",
        issue_date: "May 2022",
        expiration_date: "This certification does not expire",
        credential_id: "NUWSGMEE9NA2",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/NUWSGMEE9NA2",
        type: "certification",
    },
    {
        title: "Python Data Structures",
        provider: "University of Michigan",
        issue_date: "August 2020",
        expiration_date: "This certification does not expire",
        credential_id: "6BY537KQEF5K",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/6BY537KQEF5K",
        type: "certification",
    },
    {
        title: "Architecting with Google Kubernetes Engine: Workloads",
        provider: "Google Cloud",
        issue_date: "July 2022",
        expiration_date: "This certification does not expire",
        credential_id: "8W42Q9GX3VS8",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/8W42Q9GX3VS8",
        type: "certification",
    },
    {
        title: "Architecting with Google Kubernetes Engine: Foundations",
        provider: "Google Cloud",
        issue_date: "July 2022",
        expiration_date: "This certification does not expire",
        credential_id: "6H6X8TBQRPGV",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/6H6X8TBQRPGV",
        type: "certification",
    },
    {
        title: "Introduction to Big Data",
        provider: "University of California San Diego",
        issue_date: "March 2020",
        expiration_date: "This certification does not expire",
        credential_id: "AATGGV9LWUWA",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/AATGGV9LWUWA",
        type: "certification",
    },
    {
        title: "Sequence Models",
        provider: "DeepLearning.AI",
        issue_date: "July 2020",
        expiration_date: "This certification does not expire",
        credential_id: "X4RZYNLTY3NB",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/X4RZYNLTY3NB",
        type: "certification",
    },
    {
        title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
        provider: "DeepLearning.AI",
        issue_date: "May 2020",
        expiration_date: "This certification does not expire",
        credential_id: "F7XHS7LVKLRA",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/F7XHS7LVKLRA",
        type: "certification",
    },
    {
        title: "Neural Networks and Deep Learning",
        provider: "DeepLearning.AI",
        issue_date: "July 2020",
        expiration_date: "This certification does not expire",
        credential_id: "4UACC2X8TTWW",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/4UACC2X8TTWW",
        type: "certification",
    },
    {
        title: "Server-side Development with NodeJS, Express and MongoDB",
        provider: "The Hong Kong University of Science and Technology",
        issue_date: "June 2020",
        expiration_date: "This certification does not expire",
        credential_id: "Z7AMGE8H927J",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/Z7AMGE8H927J",
        type: "certification",
    },
    {
        title: "Cryptography and Information Theory",
        provider: "University of Colorado System",
        issue_date: "November 2019",
        expiration_date: "This certification does not expire",
        credential_id: "4Y8HT8A8TZPV",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/4Y8HT8A8TZPV",
        type: "certification",
    },
    {
        title: "Programming for Everybody (Getting Started with Python)",
        provider: "University of Michigan",
        issue_date: "November 2019",
        expiration_date: "This certification does not expire",
        credential_id: "CTVMPD4TZ555",
        credential_url: "https://www.coursera.org/account/accomplishments/certificate/CTVMPD4TZ555",
        type: "certification",
    },
    {
        title: "The Web Developer Bootcamp 2023",
        provider: "Udemy",
        issue_date: "February 2021",
        expiration_date: "This certification does not expire",
        credential_id: "UC-496b3d93-cb6c-4fa9-a7e9-0c620e2944c7",
        credential_url: "https://www.udemy.com/certificate/UC-496b3d93-cb6c-4fa9-a7e9-0c620e2944c7/",
        type: "certification"
    },
];


export { services, technologies, experiences, testimonials, projects, educations, certifications };
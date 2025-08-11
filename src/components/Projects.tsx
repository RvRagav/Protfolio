import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
    title: string
    description: string
    technologies: string[]
    githubLink: string
    liveLink?: string
    image: string
}

const projects: Project[] = [
    {
        title: "GAN Based Image steganography",
        description: "A project that uses Generative Adversarial Networks (GANs) for secure image steganography, embedding secret messages within images and extracting them from gray-scale images.",
        technologies: ["Python", "TensorFlow", "Google Colab", "Streamlit"],
        githubLink: "https://github.com/RvRagav/GAN-Based-Image-Steganography",
        liveLink: "",
        image: "/src/assets/steg.png"
    },
    {
        title: "Environmental factor driven crop recommendation system",
        description: "A machine learning-based system that recommends suitable crops based on environmental factors like soil type, weather conditions, and geographical location.",
        technologies: ["Python", "Scikit-learn", "Pandas"],
        githubLink: "https://github.com/RvRagav/Crop_Recommendation_System",
        liveLink: "",
        image: "/src/assets/crop.png"
    },
    {
        title: "Agriculture Information and Advisory System",
        description: "Developing a comprehensive platform providing real-time weather updates, price trends, expert advice, and government schemes for farmers.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        githubLink: "https://github.com/RvRagav/Agriculture-Information-System",
        liveLink: "",
        image: "/src/assets/agri.png"
    },
    {
        title:"Airport Management System",
        description: "A web application for managing airport operations, including flight schedules, passenger check-in,cabin crew assignment and more.",
        technologies: ["HTML", "CSS", "JavaScript", "Django", "SQLite"],
        githubLink: "https://github.com/RvRagav/DBMS-project",
        liveLink: "",
        image: "/src/assets/airport.jpg"
    },
    {
        title: "Bus Reservation System",
        description: "A web application for booking bus tickets, managing routes, and handling passenger information.",
        technologies: ["HTML", "CSS", "JavaScript", "Java Servlets", "MySQL"],
        githubLink: "https://github.com/RvRagav/Bus_booking_system",
        liveLink: "",
        image: "/src/assets/bus.png"
    },
    {
        title: "Expence Tracker",
        description: "A personal finance management tool that helps users track their expenses for different categories, set budgets, and visualize their spending habits.",
        technologies: ["React", "TypeScript", "Bootstrap", "Chart.js"],
        githubLink: "https://github.com/RvRagav/Expense_Tracker",
        liveLink: "https://expense-tracker-demo.com",
        image: "/src/assets/expense.jpg"
    },
    {
        title: "Dental Care Pro",
        description: "A web application for managing dental appointments, patient records, and treatment plans, providing a user-friendly interface for both patients and dentists.",
        technologies: ["React", "TypeScript", "Bootstrap", "React Icons"],
        githubLink: "https://github.com/RvRagav/DentalCare_Pro",
        liveLink: "https://dental-care-pro-demo.com",
        image: "/src/assets/dental.jpg"
        
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my skills, projects, and experiences as a full stack developer.",
        technologies: ["React","TypeScript", "Tailwind CSS", "Framer Motion"],
        githubLink: "https://github.com/RvRagav/Portfolio",
        image: "/src/assets/portfolio.png"
    },
    // Add more projects here
]

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">My Projects</h2>
                    <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-white-600 dark:text-gray-100 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <SiGithub className="text-xl" />
                                        <span>Code</span>
                                    </a>
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <FaExternalLinkAlt />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
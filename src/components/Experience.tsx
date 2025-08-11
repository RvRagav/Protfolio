import { motion } from 'framer-motion'
import { BsBriefcase } from 'react-icons/bs'

interface TimelineItem {
    title: string
    organization: string
    duration: string
    description: string[]
}

const timelineItems: TimelineItem[] = [
    {
        title: "Software Engineer Intern",
        organization: "CitiCorp",
        duration: "June 2025 - July 2025",
        description: [
            "Prediction of risk of a customer using Machine Learning",
            "Developed a user friendly application for creating Autosys JIL files using Streamlit and FastAPI",
            "Collaborated with cross-functional teams to deliver projects on time"
        ]
    },
    {
        title: "Backend Developer",
        organization: "SklyIt",
        duration: "Dec 2024 - May 2025",
        description: [
            "Developed Backend APIs for Medium level Business using NestJS, PostgreSQL and MongoDB",
            "Worked in Integration with Flutter frontend",
            "Implemented authentication using JWT, Push Notifications using FCM and WebSockets for real-time updates"
        ]
    },
    // Add more experiences here
]

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Experience</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

                    <div className="space-y-12">
                        {timelineItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'} gap-8`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 z-10"></div>

                                {/* Content card */}
                                <div className="w-full">
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                        <div className="flex items-center gap-2 mb-2">
                                            
                                            <BsBriefcase className="text-blue-600 text-xl" />
                                            
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">{item.title}</h3>
                                        </div>
                                        <h4 className="text-lg font-semibold dark:text-blue-200 text-blue-600 mb-2">{item.organization}</h4>
                                        <p className="text-gray-600 dark:text-gray-100 mb-4">{item.duration}</p>
                                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-100 space-y-2">
                                            {item.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
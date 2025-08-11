import { motion } from 'framer-motion'
import { BsBook, BsAward } from 'react-icons/bs'

interface Education {
    degree: string
    institution: string
    duration: string
    location: string
    grade: string
    achievements: string[]
}

interface Certification {
    name: string
    issuer: string
    date: string
    credentialLink?: string
}

const educationDetails: Education[] = [
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Madras Institute of Technology, Anna University",
        duration: "2022 - 2026",
        location: "Chromepet, Chennai, India",
        grade: "CGPA: 9.5/10",
        achievements: [
            "Specialized in Full Stack Web Development",
            "Developed multiple projects with diverse tech stacks",
            "Active member of National Service Scheme (NSS) and Google Developer Group Club (GDG) at University",
        ]
    },
    {
        degree: "Higher Secondary School",
        institution: "Muthamizhl Matriculation Higher Secondary School",
        duration: "2020 - 2022",
        location: "Thalaivasal, Salem, India",
        grade: "Percentage: 96.33%",
        achievements: [
            "Marks: 584/600 Cutoff: 199/200",
            "Computer Science Stream with Physics, Chemistry, and Mathematics",
            "School Topper in Computer Science ,Chemistry, and Mathematics with 100% in all subjects",
        ]
    },
    {
        degree: "Secondary School",
        institution: "Bharathi Vidhya Mandir Matriculation Higher Secondary School",
        duration: "2018 - 2020",
        location: "Aragalur, Salem, India",
        grade: "Percentage: 98.6%",
        achievements: [
            "Achieved 493/500 in Class 10 Board Exams",
            "School First in Class 10",
        ]
    }
    // Add more education details here
]

const certifications: Certification[] = [
    {
        name: "Data Fundamentals",
        issuer: "IBM SkillBuild",
        date: "December 2023",
        credentialLink: "https://www.credly.com/badges/e33f1b6a-9ab9-4d2d-8039-0d05e00a289a/public_url"
    },
    {
        name: "Cybersecurity Fundamentals",
        issuer: "IBM SkillBuild",
        date: "December 2023",
        credentialLink: "https://www.credly.com/badges/22d8466d-c37c-4df6-be3f-53665b22d643/public_url"
    },
    {
        name: "Project Management Fundamentals",
        issuer: "IBM SkillBuild",
        date: "December 2023",
        credentialLink: "https://www.credly.com/badges/8a97f285-0e65-4faf-924a-58859c1bc220/public_url"
    },
    {
        name: "AWS Knowledge: Cloud Essentials",
        issuer: "Amazon Web Services",
        date: "May 2024",
        credentialLink: "https://www.credly.com/badges/fc310b45-d0e5-4469-9ed8-ca1aa1df2df4/public_url"
    }

    // Add more certifications here
]

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Education</h2>
                    <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
                </motion.div>

                {/* Tree-style Education Timeline */}
                <div className="relative">
                    <div className="flex items-center gap-2 mb-8">
                        <BsBook className="text-2xl text-blue-600 dark:text-blue-500" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Academic Journey</h3>
                    </div>

                    {/* Main vertical line */}
                    <div className="absolute left-8 top-20 bottom-0 w-1 bg-blue-200 dark:bg-gray-700"></div>

                    <div className="space-y-12">
                        {educationDetails.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative pl-16"
                            >
                                {/* Branch line */}
                                <div className="absolute left-8 top-6 w-8 h-0.5 bg-blue-200 dark:bg-gray-700"></div>
                                {/* Node */}
                                <div className="absolute left-7 top-4 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-800 shadow-md"></div>

                                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100 dark:border-gray-700">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50">{edu.degree}</h4>
                                            <p className="text-blue-600 dark:text-blue-500 font-semibold">{edu.institution}</p>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-300 text-right">
                                            <p className="font-medium">{edu.duration}</p>
                                            <p>{edu.location}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">{edu.grade}</p>
                                    <div className="space-y-3">
                                        {edu.achievements.map((achievement, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex items-start gap-3 group"
                                            >
                                                <BsAward className="text-blue-600 dark:text-blue-500 mt-1 group-hover:scale-110 transition-transform" />
                                                <p className="text-gray-600 dark:text-gray-300">{achievement}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="mt-20 ">
                    <div className="flex items-center gap-2 mb-8">
                        <BsBook className="text-2xl text-blue-600 dark:text-blue-500" />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Certifications</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100 dark:border-gray-700"
                            >
                                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50">{cert.name}</h4>
                                <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                                <p className="text-gray-600 dark:text-gray-300">{cert.date}</p>
                                {cert.credentialLink && (
                                    <a
                                        href={cert.credentialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-500 hover:underline mt-2 inline-block"
                                    >
                                        View Credential
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Education
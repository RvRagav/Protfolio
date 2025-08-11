import { motion } from 'framer-motion'
import {
    SiC, SiCplusplus, SiPython,
    SiHtml5, SiCss3, SiJavascript, SiTypescript,
    SiReact, SiExpress, SiNodedotjs, SiNestjs,
    SiFastapi, SiSpringboot, SiMongodb, SiMysql,
    SiOracle, SiBootstrap, SiFirebase, SiGit, SiPostgresql,
    SiPostman, SiTailwindcss, SiInsomnia, SiGithub, SiVite
} from 'react-icons/si'
import { DiJava,DiVisualstudio,DiIntellij } from 'react-icons/di'

const skills = [
    { name: 'C', icon: SiC, category: 'Languages' },
    { name: 'C++', icon: SiCplusplus, category: 'Languages' },
    { name: 'Python', icon: SiPython, category: 'Languages' },
    { name: 'Java', icon: DiJava, category: 'Languages' },
    { name: 'HTML5', icon: SiHtml5, category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, category: 'Frontend' },
    { name: 'Vite', icon: SiVite, category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
    { name: 'React', icon: SiReact, category: 'Frontend' },
    { name: 'Express.js', icon: SiExpress, category: 'Backend' },
    { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
    { name: 'NestJS', icon: SiNestjs, category: 'Backend' },
    { name: 'FastAPI', icon: SiFastapi, category: 'Backend' },
    { name: 'Spring Boot', icon: SiSpringboot, category: 'Backend' },
    { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
    { name: 'MySQL', icon: SiMysql, category: 'Database' },
    { name: 'Oracle', icon: SiOracle, category: 'Database' },
    { name: 'Bootstrap', icon: SiBootstrap, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
    { name: 'Firebase', icon: SiFirebase, category: 'Backend' },
    { name: 'Git', icon: SiGit, category: 'Tools' },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
    { name: 'Postman', icon: SiPostman, category: 'Tools' },
    { name: 'Insomnia', icon: SiInsomnia, category: 'Tools' },
    { name: 'GitHub', icon: SiGithub, category: 'Tools' },
    { name: 'VS Code', icon: DiVisualstudio, category: 'Tools' },
    { name: 'IntelliJ IDEA', icon: DiIntellij, category: 'Tools' }
]

const categories = ['Languages', 'Frontend', 'Backend', 'Database', 'Tools']

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-700">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Skills</h2>
                    <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
                </motion.div>

                <div className="space-y-12">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="dark:text-gray-300"
                        >
                            <h3 className="text-2xl font-semibold mb-6 dark:text-gray-100 ">{category}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {skills
                                    .filter(skill => skill.category === category)
                                    .map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
                                        >
                                            <skill.icon className="text-4xl text-blue-600 dark:text-blue-500 mb-2" />
                                            <span className="text-sm font-bold">{skill.name}</span>
                                        </motion.div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
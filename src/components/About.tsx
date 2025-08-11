import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="aspect-square rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-blue-400 dark:shadow-gray-700 shadow-lg">
              {/* Add your image here */}
              <img src="/assets/ragavan_image.jpg" alt="Ragavan" className="w-full h-full object-cover" />
              <div className="w-full h-full bg-gray-200 dark:bg-gray-800"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">Who I Am</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate student at Anna University MIT campus, driven by curiosity and a desire to create meaningful solutions through technology.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in software development started with a fascination for building things that make a difference. I believe in continuous learning and pushing my boundaries to grow both personally and professionally.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside of academics, I'm actively involved in NSS (National Service Scheme) and other extracurricular activities which helps me develop a well-rounded perspective in everything I do.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
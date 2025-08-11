import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center dark:text-gray-50"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
          Say <img src="/assets/text.png" alt="" className="inline object-cover align-middle h-20" /> to Ragavan
        </h1>
        <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto dark:text-gray-400">
          Student at Anna University MIT campus
        </p>
        <p className="mt-4 text-lg dark:text-gray-300">
          Aspiring Full Stack Developer | Tech Enthusiast
        </p>

        <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 dark:bg-gray-100 text-gray-50 dark:text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition shadow-lg"
            onClick={() => {
              // Replace with your resume URL
              const resumeUrl = '';
              window.open(resumeUrl, '_blank');
            }}
          >
            Download Resume
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-600 dark:border-blue-400 text-gray-800 dark:text-gray-300 px-8 py-3 rounded-lg  hover:text-blue-600 dark:hover:bg-blue-100 transition"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
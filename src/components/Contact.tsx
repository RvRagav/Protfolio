import { motion } from "framer-motion";
import React from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(form.current) {
      emailjs.sendForm(
        import.meta.env.VITE_MAIL_SERVICE_ID,
        import.meta.env.VITE_MAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_MAIL_USER_ID
      )
        .then((result) => {
          console.log('Message sent successfully:', result.text);
          form.current?.reset();
        }, (error) => {
          console.error('Error sending message:', error.text);
        });
    }
  };
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Contact Me</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col gap-4" ref={form} onSubmit={sendMessage}>
            <input type="text" name="name" placeholder="Your Name" required className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500" />
            <input type="email" name="email" placeholder="Your Email" required className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500" />
            <textarea name="message" placeholder="Your Message" rows={5} required className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-2 px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ragavan-raja-aa7460286", label: "LinkedIn" },
  { icon: <FaGithub />, url: "https://github.com/RvRagav", label: "GitHub" },
  { icon: <FaInstagram />, url: "https://instagram.com/ragavanr_005", label: "Instagram" },
  { icon: <FaWhatsapp />, url: "https://wa.me/+918667282882", label: "WhatsApp" },
  { icon: <SiLeetcode />, url: "https://leetcode.com/RagavanRV/", label: "LeetCode" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-700 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-100 dark:text-gray-300"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm"
          >
            &copy; {new Date().getFullYear()} Ragavan. All rights reserved.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#2563eb' }}
                className="text-xl transition"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
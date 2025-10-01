// src/components/AnimatedSection.jsx
import { motion } from 'framer-motion';

function AnimatedSection({ children, id }) {
  // Define the animation properties
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and 50px down
    visible: { 
      opacity: 1, 
      y: 0, // End visible and at original position
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    // Change this from <div> to <motion.div>
    <motion.div
      id={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
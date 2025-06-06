 
import { motion } from 'framer-motion';

export default function TypingIndicator() {
  const bounceTransition = {
    y: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut'
    }
  };

  return (
    <div className="flex items-center space-x-1">
      <span className="text-sm text-gray-500 dark:text-gray-300"></span>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-gray-500 dark:bg-gray-300 rounded-full"
          animate={{ y: ['0%', '-50%', '0%'] }}
          transition={{ ...bounceTransition, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

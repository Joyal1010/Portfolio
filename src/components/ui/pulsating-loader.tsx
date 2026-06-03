import { motion } from 'framer-motion';

export default function PulsatingDots() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500">
      <div className="flex space-x-3">
        <motion.div
          className="h-4 w-4 rounded-full bg-neutral-900 dark:bg-neutral-100"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-neutral-900 dark:bg-neutral-100"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 0.3,
          }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-neutral-900 dark:bg-neutral-100"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 0.6,
          }}
        />
      </div>
    </div>
  );
}

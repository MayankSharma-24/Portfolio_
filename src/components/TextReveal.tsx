import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  wordClassName?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  wordClassName = '',
}) => {
  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.24em] gap-y-1 overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: '100%', opacity: 0, rotateZ: 2 }}
            whileInView={{ y: '0%', opacity: 1, rotateZ: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.03,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block will-change-transform ${wordClassName}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

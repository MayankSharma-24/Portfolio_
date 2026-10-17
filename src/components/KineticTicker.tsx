import React from 'react';
import { motion } from 'framer-motion';

interface KineticTickerProps {
  items: Array<{ text: string; sub?: string }>;
  direction?: 'left' | 'right';
}

export const KineticTicker: React.FC<KineticTickerProps> = ({ items }) => {
  const tripleItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-[#242424] text-white py-4 border-y border-[#ACACAC]/40 select-none">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
        className="flex gap-10 whitespace-nowrap will-change-transform"
      >
        {tripleItems.map((item, index) => (
          <div key={index} className="flex items-center gap-6 text-sm font-mono uppercase tracking-widest text-neutral-300">
            <span className="font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFE862]" />
              {item.text}
            </span>
            {item.sub && (
              <span className="text-[#FFE862]/80 font-normal">
                / {item.sub}
              </span>
            )}
            <span className="text-neutral-500 font-mono select-none">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

import { motion } from 'motion/react';
import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface EditorialHeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  delay?: number;
}

export function EditorialHeading({ 
  children, 
  as: Tag = 'h1', 
  className,
  delay = 0 
}: EditorialHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Tag className={cn(
        Tag === 'h1' ? "text-6xl md:text-8xl lg:text-9xl" : "text-4xl md:text-6xl lg:text-7xl",
        "font-display uppercase tracking-tighter leading-[0.9]",
        className
      )}>
        {children}
      </Tag>
    </motion.div>
  );
}

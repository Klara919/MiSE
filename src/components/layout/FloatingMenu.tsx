import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import { cn } from '@/utils/cn';

const navLinks = [
  { name: 'Hjem', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Cases', path: '/cases' },
  { name: 'Om os', path: '/about' },
  { name: 'Kontakt', path: '/contact' },
];

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-12 left-1/2 -translate-x-1/2 z-50",
          "w-16 h-16 rounded-full bg-accent text-white shadow-2xl flex items-center justify-center",
          "hover:scale-110 transition-transform duration-300"
        )}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-sm flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-4xl md:text-6xl font-display uppercase tracking-tighter transition-colors",
                    location.pathname === link.path ? "text-accent" : "text-accent/40 hover:text-accent"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

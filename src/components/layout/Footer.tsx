import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '@/utils/cn';

export function Footer() {
  return (
    <footer className="relative pt-32 pb-24 px-6 md:px-12 bg-bg overflow-hidden">
      <div className="watermark opacity-[0.02] select-none pointer-events-none">
        MiSE
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-display uppercase tracking-tighter text-accent mb-8 block">
            MiSE
          </Link>
          <p className="text-xl text-accent/60 max-w-md">
            Vi skaber digitale løsninger, der kombinerer æstetik med funktionalitet. 
            Baseret i Aarhus, men med hele verden som legeplads.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-accent/40 mb-6 font-semibold">Sider</h4>
          <ul className="space-y-4">
            {['Hjem', 'Services', 'Cases', 'Om os', 'Kontakt'].map((item) => (
              <li key={item}>
                <Link to={`/${item === 'Hjem' ? '' : item.toLowerCase().replace(' ', '-')}`} 
                  className="text-lg text-accent hover:text-accent/60 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-accent/40 mb-6 font-semibold">Kontakt</h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:hello@mise.dk" className="text-lg text-accent hover:text-accent/60 transition-colors">
                hello@mise.dk
              </a>
            </li>
            <li>
              <p className="text-lg text-accent">
                Mejlgade 12, 1. sal<br />
                8000 Aarhus C
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-accent/10 flex flex-col md:row items-center justify-between gap-4">
        <p className="text-xs text-accent/40 uppercase tracking-widest">
          © {new Date().getFullYear()} MiSE Studio. Alle rettigheder forbeholdes.
        </p>
        <div className="flex gap-8">
          {['LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
            <a key={social} href="#" className="text-xs text-accent/40 uppercase tracking-widest hover:text-accent transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

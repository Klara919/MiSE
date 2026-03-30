import { motion } from 'motion/react';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { cases } from '@/data/cases';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cases() {
  return (
    <div className="bg-dark min-h-screen text-bg pt-24 px-6 md:px-12 pb-24">
      <section className="max-w-7xl mx-auto mb-48">
        <div className="editorial-grid items-end mb-16">
          <div className="col-span-1 md:col-span-6">
            <EditorialHeading as="h1" className="mb-4 text-bg">
              Udvalgte<br />cases
            </EditorialHeading>
          </div>
          <div className="col-span-1 md:col-start-8 md:col-span-5">
            <p className="text-xl text-bg/60 leading-relaxed">
              Vi er stolte af de projekter, vi har skabt sammen med vores kunder. 
              Her er et udpluk af vores seneste arbejde, hvor vi har forenet 
              design og teknologi.
            </p>
          </div>
        </div>

        <div className="space-y-48">
          {cases.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="editorial-grid"
            >
              <div className="col-span-1 md:col-span-1 flex items-start">
                <span className="text-6xl font-display text-bg/10 leading-none">{project.number}</span>
              </div>
              
              <div className="col-span-1 md:col-span-5">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-8 group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="col-span-1 md:col-start-8 md:col-span-5 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-bg/40 mb-4 block">{project.category}</span>
                <h2 className="text-4xl md:text-6xl font-display uppercase mb-8">{project.title}</h2>
                <p className="text-xl text-bg/60 mb-12 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-bg/40 mb-4 font-bold">Farvepalette</h4>
                    <div className="flex gap-2">
                      <div 
                        className="w-8 h-8 rounded-full border border-bg/10"
                        style={{ backgroundColor: project.color }}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-bg/40 mb-4 font-bold">Resultat</h4>
                    <p className="text-sm text-bg/80">{project.outcome}</p>
                  </div>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-4 text-bg uppercase tracking-widest font-semibold group">
                  Se projektet <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <div className="bg-bg/5 p-12 md:p-24 rounded-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-display uppercase mb-8">Skal vi skabe noget sammen?</h2>
          <p className="text-xl text-bg/60 mb-12 max-w-2xl mx-auto">
            Vi er altid på udkig efter nye spændende projekter og samarbejdspartnere. 
            Lad os tage en uforpligtende snak om jeres næste digitale eventyr.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-4 bg-bg text-dark px-10 py-5 rounded-full font-display uppercase tracking-widest hover:scale-105 transition-transform">
            Kontakt os <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

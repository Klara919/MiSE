import { motion } from 'motion/react';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-24 px-6 md:px-12 pb-24">
      <section className="max-w-7xl mx-auto mb-48">
        <div className="editorial-grid items-end mb-16">
          <div className="col-span-1 md:col-span-6">
            <EditorialHeading as="h1" className="mb-4">
              Hvad kan vi<br />gøre for jer?
            </EditorialHeading>
          </div>
          <div className="col-span-1 md:col-start-8 md:col-span-5">
            <p className="text-xl text-muted leading-relaxed">
              Hos MiSE tilbyder vi fleksible løsninger, der tilpasses jeres behov. 
              Uanset om I har brug for en helt ny hjemmeside eller blot en 
              videreudvikling af en eksisterende, hjælper vi jer med at skabe 
              en digital tilstedeværelse, der gør en forskel.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 md:p-16 rounded-3xl shadow-sm flex flex-col items-center text-center group"
            >
              <h2 className="text-4xl md:text-5xl font-display uppercase text-accent mb-2">{service.title}</h2>
              <span className="text-xs uppercase tracking-widest text-accent/40 mb-12 font-bold">{service.subtitle}</span>
              
              <div className="w-48 h-48 mb-12 flex items-center justify-center border border-accent/10 rounded-full relative">
                {/* Plate/Cutlery Illustration Placeholder */}
                <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">🍽️</div>
                <div className="absolute inset-0 border border-accent/5 rounded-full scale-110" />
              </div>

              <p className="text-lg text-accent/80 mb-12 max-w-sm leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest border border-accent/20 px-4 py-2 rounded-full text-accent/60">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <p className="text-xs uppercase tracking-widest text-accent/40 mb-4 font-bold">Pris</p>
                <p className="text-2xl font-display uppercase text-accent mb-8">{service.price}</p>
                <Link to="/contact" className="inline-flex items-center gap-4 bg-accent text-bg px-10 py-5 rounded-full font-display uppercase tracking-widest hover:scale-105 transition-transform">
                  Bestil nu <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Teaser Section */}
      <section className="max-w-7xl mx-auto mb-48">
        <div className="bg-dark p-12 md:p-24 text-bg rounded-3xl relative overflow-hidden">
          <div className="editorial-grid items-center relative z-10">
            <div className="col-span-1 md:col-span-6">
              <span className="text-xs uppercase tracking-widest text-bg/40 mb-4 block">Vores proces</span>
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-8">Sådan bygger vi din hjemmeside</h2>
              <p className="text-xl text-bg/60 mb-12 max-w-md">
                Vi har udviklet en fast proces, der sikrer, at vi kommer hele vejen rundt om jeres projekt og leverer et resultat, vi alle kan være stolte af.
              </p>
              <Link to="/" className="inline-flex items-center gap-4 text-bg uppercase tracking-widest font-semibold group">
                Læs om processen <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="col-span-1 md:col-start-8 md:col-span-5 flex justify-center">
              <div className="text-[120px] opacity-20">👨‍🍳</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

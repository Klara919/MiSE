import { motion } from 'motion/react';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { team } from '@/data/team';
import { Instagram, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 px-6 md:px-12 pb-24">
      <section className="max-w-7xl mx-auto mb-48">
        <div className="editorial-grid items-end mb-16">
          <div className="col-span-1 md:col-span-6">
            <EditorialHeading as="h1" className="mb-4">
              Vi er MiSE
            </EditorialHeading>
          </div>
          <div className="col-span-1 md:col-start-8 md:col-span-5">
            <p className="text-xl text-muted leading-relaxed">
              Et kreativt digitalt bureau med base i hjertet af København. 
              Vi er et lille, dedikeret team, der brænder for at skabe 
              meningsfulde digitale oplevelser.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                  <p className="text-bg italic text-lg leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-display uppercase text-accent mb-1">{member.name}</h3>
              <p className="text-xs uppercase tracking-widest text-accent/40 mb-4 font-bold">{member.role}</p>
              <div className="flex gap-4">
                <a href={member.socials.instagram} className="text-accent/40 hover:text-accent transition-colors">
                  <Instagram size={18} />
                </a>
                <a href={member.socials.linkedin} className="text-accent/40 hover:text-accent transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-48">
        <div className="bg-white p-12 md:p-24 rounded-3xl shadow-sm">
          <div className="editorial-grid">
            <div className="col-span-1 md:col-span-4">
              <h2 className="text-4xl font-display uppercase text-accent mb-8">Vores<br />Filosofi</h2>
            </div>
            <div className="col-span-1 md:col-start-6 md:col-span-7 space-y-8">
              <p className="text-2xl text-accent leading-snug font-light">
                Vi tror på, at godt design er ærligt, funktionelt og langtidsholdbart. 
                Vi jagter ikke trends, men fokuserer på at skabe løsninger, 
                der giver mening for både afsender og modtager.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-accent/10">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-accent/40 mb-4 font-bold">Ansvarlighed</h4>
                  <p className="text-accent/70 leading-relaxed">
                    Vi tager ansvar for de projekter, vi bygger. Det betyder fokus på performance, 
                    tilgængelighed og bæredygtig kode.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-accent/40 mb-4 font-bold">Nærvær</h4>
                  <p className="text-accent/70 leading-relaxed">
                    Vi er et lille bureau, og det især vores styrke. I får direkte adgang til 
                    dem, der rent faktisk bygger jeres løsning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

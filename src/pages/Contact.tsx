import { motion } from 'motion/react';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 px-6 md:px-12 pb-24">
      <section className="max-w-7xl mx-auto mb-48">
        <div className="editorial-grid items-end mb-16">
          <div className="col-span-1 md:col-span-6">
            <EditorialHeading as="h1" className="mb-4">
              Lad os tage<br />en snak
            </EditorialHeading>
          </div>
          <div className="col-span-1 md:col-start-8 md:col-span-5">
            <p className="text-xl text-muted leading-relaxed">
              Vi er altid klar på en kop kaffe og en uforpligtende snak om 
              jeres næste projekt. Udfyld formularen, eller kontakt os direkte.
            </p>
          </div>
        </div>

        <div className="editorial-grid gap-24">
          <div className="col-span-1 md:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-accent/40 mb-6 font-bold">Kontakt os</h3>
              <div className="space-y-4">
                <a href="mailto:hello@mise.dk" className="flex items-center gap-4 text-xl text-accent hover:text-accent/60 transition-colors">
                  <Mail size={20} /> hello@mise.dk
                </a>
                <a href="tel:+4512345678" className="flex items-center gap-4 text-xl text-accent hover:text-accent/60 transition-colors">
                  <Phone size={20} /> +45 12 34 56 78
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-accent/40 mb-6 font-bold">Find os</h3>
              <div className="flex items-start gap-4 text-xl text-accent">
                <MapPin size={20} className="mt-1" />
                <address className="not-italic">
                  Vesterbrogade 123<br />
                  1620 København V<br />
                  Danmark
                </address>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-start-6 md:col-span-7">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-accent/40 font-bold">Navn</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Jeres navn"
                    className="w-full bg-transparent border-b border-accent/20 py-4 focus:outline-none focus:border-accent transition-colors text-accent placeholder:text-accent/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-accent/40 font-bold">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="jeres@email.dk"
                    className="w-full bg-transparent border-b border-accent/20 py-4 focus:outline-none focus:border-accent transition-colors text-accent placeholder:text-accent/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-accent/40 font-bold">Besked</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Hvad har I i tankerne?"
                  className="w-full bg-transparent border-b border-accent/20 py-4 focus:outline-none focus:border-accent transition-colors text-accent placeholder:text-accent/20 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="inline-flex items-center gap-4 bg-accent text-bg px-12 py-6 rounded-full font-display uppercase tracking-widest hover:scale-105 transition-transform">
                Send besked <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <div className="aspect-[21/9] bg-accent/5 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-accent/10 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-accent/20 mx-auto mb-4" />
            <p className="text-accent/40 uppercase tracking-widest text-xs font-bold">Kort over Vesterbrogade</p>
          </div>
        </div>
      </section>
    </div>
  );
}

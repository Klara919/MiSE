import { motion } from 'motion/react';
import { EditorialHeading } from '@/components/ui/EditorialHeading';
import { cases } from '@/data/cases';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Home() {
  return (
    <div className="pt-24 px-6 md:px-12 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-48">
        <div className="relative mb-12">
          <EditorialHeading as="h1" className="mb-4 text-text leading-[0.8] mix-blend-difference">
            we create.
          </EditorialHeading>
          <span className="absolute top-0 right-0 text-xs uppercase tracking-widest font-semibold opacity-60">Responsible webdesign</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[60vh]">
          <div className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
              alt="Chef plating" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000" 
              alt="Table setting" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto mb-48">
        <div className="editorial-grid">
          <div className="col-span-1 md:col-span-6">
            <p className="text-3xl md:text-4xl text-text font-medium leading-tight mb-12">
              MiSE er et webbureau i Aarhus, der fokuserer på at udvikle ressourceeffektive websites med stærke visuelle designs.
            </p>
          </div>
          <div className="col-span-1 md:col-start-8 md:col-span-5">
            <div className="flex gap-8 items-start mb-8">
              <img 
                src="https://picsum.photos/seed/team-teaser/400/250?grayscale" 
                alt="Team" 
                className="w-1/2 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <p className="text-sm text-muted mb-6">
                  Vi er et passioneret team med en fælles ambition om at skabe digitale løsninger, der gør en forskel.
                </p>
                <Link to="/about" className="text-xs uppercase tracking-widest font-bold border-b border-accent pb-1">Læs mere om os</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Section */}
      <section className="max-w-7xl mx-auto mb-48">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-accent/40 mb-2 block">Vores proces</span>
          <EditorialHeading as="h2" className="text-4xl md:text-6xl">Sådan bygger vi din hjemmeside</EditorialHeading>
        </div>

        <div className="editorial-grid items-center">
          <div className="col-span-1 md:col-span-5">
            <p className="text-xl text-muted mb-12">
              Vi skaber hjemmesider, der ikke bare ser godt ud og fungerer effektivt, men som også er udviklet med omtanke for miljøet.
            </p>
            
            <div className="space-y-4">
              {[
                { id: '01', title: 'Forberedelse', active: true },
                { id: '02', title: 'Klargøring' },
                { id: '03', title: 'Tilberedning' },
                { id: '04', title: 'Finish' },
                { id: '05', title: 'Servering' }
              ].map((step) => (
                <div key={step.id} className={cn(
                  "flex justify-between items-center py-4 border-b border-accent/10 transition-colors cursor-pointer group",
                  step.active ? "text-accent" : "text-muted hover:text-accent"
                )}>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold">{step.id}</span>
                    <span className="text-lg font-display uppercase tracking-tight">{step.title}</span>
                  </div>
                  <ArrowRight size={16} className={cn("transition-transform", step.active ? "translate-x-0" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")} />
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-start-7 md:col-span-6">
            <div className="bg-dark p-12 md:p-24 text-bg relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-2xl font-display uppercase">Forberedelse</h3>
                  <span className="text-xs font-bold opacity-40">01</span>
                </div>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-48 h-48 flex items-center justify-center border border-bg/20 p-4">
                    {/* Placeholder for Flour Bag Illustration */}
                    <div className="text-center">
                      <div className="text-4xl mb-2">🌾</div>
                      <div className="text-[10px] uppercase tracking-widest">MEL</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed opacity-80">
                      Når vi starter en ny tur til køkkenbordet, starter vi med at finde ud af, hvilke råvarer vi skal bruge. 
                      <br /><br />
                      På samme måde begynder vi processen med research og behovsafklaring, hvor vi i tæt samarbejde kortlægger jeres mål og ønsker.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="max-w-7xl mx-auto mb-48">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-accent/40 mb-2 block">Vores arbejde</span>
          <EditorialHeading as="h2" className="text-4xl md:text-6xl">Tidligere cases</EditorialHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-1 md:col-span-8">
            <div className="relative group cursor-pointer overflow-hidden aspect-[16/10]">
              <img src={cases[0].image} alt={cases[0].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-bg font-display uppercase text-2xl tracking-widest">{cases[0].title}</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 flex flex-col gap-8">
            <div className="flex-1 relative group cursor-pointer overflow-hidden">
              <img src={cases[1].image} alt={cases[1].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-bg font-display uppercase text-lg tracking-widest">{cases[1].title}</span>
              </div>
            </div>
            <div className="flex-1 relative group cursor-pointer overflow-hidden">
              <img src={cases[2].image} alt={cases[2].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-bg font-display uppercase text-lg tracking-widest">{cases[2].title}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link to="/cases" className="text-xs uppercase tracking-widest font-bold border-b border-accent pb-1">Udforsk alle vores kreationer</Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-7xl mx-auto mb-48">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-accent/40 mb-2 block">Anmeldelser</span>
          <EditorialHeading as="h2" className="text-4xl md:text-6xl">Hvad siger vores kunder?</EditorialHeading>
        </div>

        <div className="editorial-grid">
          <div className="col-span-1 md:col-span-4">
            <div className="flex gap-4 mb-12">
              <button className="w-12 h-12 rounded-full border border-accent/10 flex items-center justify-center hover:bg-accent hover:text-bg transition-all">
                <ChevronLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-accent/10 flex items-center justify-center hover:bg-accent hover:text-bg transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
            <span className="text-xs font-bold opacity-40">1/3</span>
          </div>
          <div className="col-span-1 md:col-start-6 md:col-span-7">
            <blockquote className="text-2xl md:text-3xl italic text-accent font-light leading-relaxed mb-12">
              "MiSE har hjulpet os med at skabe en hjemmeside, der matcher vores identitet og gør det nemt for gæster at finde den vigtigste information. Det var også en klar bonus for os, at de arbejder med fokus på bæredygtighed, da vi selv prioriterer ansvarlige valg i vores madproduktion."
            </blockquote>
            <div className="flex items-center gap-6">
              <img 
                src="https://picsum.photos/seed/jeanne/100/100?grayscale" 
                alt="Jeanne" 
                className="w-16 h-16 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-xl font-display uppercase text-accent">Jeanne</h4>
                <p className="text-xs uppercase tracking-widest text-accent/40">Margrethegaarden</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto mb-48 bg-dark text-bg p-12 md:p-24 relative overflow-hidden">
        <div className="editorial-grid items-center relative z-10">
          <div className="col-span-1 md:col-span-6">
            <h2 className="text-4xl md:text-6xl font-display uppercase mb-8">Lad os bygge noget sammen</h2>
            <p className="text-xl text-bg/60 mb-12 max-w-md">
              Skal vi gøre din hjemmeside klar til servering? En god hjemmeside er som en god ret - den skal friste, fungere og få gæsterne til at vende tilbage.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-bg text-dark px-12 py-6 rounded-full font-display uppercase tracking-widest hover:scale-105 transition-transform">
              Kontakt os <ArrowRight size={20} />
            </Link>
          </div>
          <div className="col-span-1 md:col-start-8 md:col-span-5 flex justify-center">
            {/* Cloche Illustration Placeholder */}
            <div className="text-[120px] opacity-20 animate-float">🍽️</div>
          </div>
        </div>
        <div className="watermark opacity-[0.03] text-bg absolute -bottom-1/4 left-1/2 -translate-x-1/2">MiSE</div>
      </section>
    </div>
  );
}

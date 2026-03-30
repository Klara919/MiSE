export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  price?: string;
}

export const services: Service[] = [
  {
    id: 'menu1',
    title: 'MENU1',
    subtitle: 'From Scratch',
    description: 'Vi skaber din hjemmeside helt fra bunden med fokus på performance, æstetik og effektivitet. Gennem tæt dialog designer vi en løsning, der passer præcis til jeres behov.',
    tags: ['UI/UX', 'Branding', 'Prototyping'],
    price: 'Fra 20.000 kr.'
  },
  {
    id: 'menu2',
    title: 'MENU2',
    subtitle: 'Customize',
    description: 'Vi tager udgangspunkt i jeres eksisterende brand og optimerer jeres digitale tilstedeværelse. Vi fokuserer på at forbedre brugeroplevelsen og øge konverteringen.',
    tags: ['Analyse', 'Strategi', 'Optimering'],
    price: 'Fra 10.000 kr.'
  }
];

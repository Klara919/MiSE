export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Emil Beyer',
    role: 'Creative Director',
    image: 'https://picsum.photos/seed/emil/800/800?grayscale',
    quote: 'Jeg arbejder med den kreative retning og det visuelle udtryk. For mig handler det om at skabe en rød tråd gennem hele oplevelsen.',
    socials: { linkedin: '#', instagram: '#', email: 'emil@mise.dk' }
  },
  {
    id: '2',
    name: 'Klara Bjørn',
    role: 'Frontend developer / Web Design',
    image: 'https://picsum.photos/seed/klara/800/800?grayscale',
    quote: 'Vores fokus på bæredygtighed går hånd i hånd med et effektivt website - det er derfor både til gavn for din virksomhed, men også fremtiden.',
    socials: { linkedin: '#', instagram: '#', email: 'klara@mise.dk' }
  },
  {
    id: '3',
    name: 'Julie Smid',
    role: 'Digital Strategist',
    image: 'https://picsum.photos/seed/julie/800/800?grayscale',
    quote: 'Jeg hjælper med at skabe en strategi, der gør en forskel. Vi arbejder med fokus på bæredygtighed, da vi selv prioriterer ansvarlige valg.',
    socials: { linkedin: '#', instagram: '#', email: 'julie@mise.dk' }
  },
  {
    id: '4',
    name: 'Helena Lindholt',
    role: 'UX/UI Designer',
    image: 'https://picsum.photos/seed/helena/800/800?grayscale',
    quote: 'Gennem tæt dialog får vi afklaret jeres ønsker, behov og udfordringer, så vi sammen kan skabe en løsning, der passer til jeres virksomhed.',
    socials: { linkedin: '#', instagram: '#', email: 'helena@mise.dk' }
  }
];

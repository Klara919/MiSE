export interface Case {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  color: string;
  outcome: string;
}

export const cases: Case[] = [
  {
    id: 'margrethegaarden',
    number: '01',
    title: 'Margrethegaarden',
    category: 'Webdesign & Branding',
    image: 'https://picsum.photos/seed/margrethe/1200/800',
    description: 'En moderne og indbydende hjemmeside for Margrethegaarden, der afspejler deres unikke atmosfære og kvalitet.',
    color: '#5D0E11',
    outcome: 'Nyt visuelt univers'
  },
  {
    id: 'manon',
    number: '02',
    title: 'Manon',
    category: 'Digital Platform',
    image: 'https://picsum.photos/seed/manon/1200/800',
    description: 'En elegant og funktionel platform for Manon, der gør det nemt for gæster at finde information.',
    color: '#333330',
    outcome: 'Øget konvertering'
  },
  {
    id: 'osteria98',
    number: '03',
    title: 'Osteria98',
    category: 'Brand Identity',
    image: 'https://picsum.photos/seed/osteria/1200/800',
    description: 'Et stærkt visuelt koncept og website for Osteria98, der understøtter deres gastronomiske ambitioner.',
    color: '#5D0E11',
    outcome: 'Gennemført brand'
  },
  {
    id: 'juhls-spisehus',
    number: '04',
    title: 'JUHLs spisehus',
    category: 'Webbureau, Aarhus',
    image: 'https://picsum.photos/seed/juhls/1200/800',
    description: 'En brugervenlig løsning for JUHLs spisehus, der prioriterer ansvarlige valg i deres madproduktion.',
    color: '#333330',
    outcome: 'Bæredygtig profil'
  }
];

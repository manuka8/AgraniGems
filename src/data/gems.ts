export interface Gemstone {
  id: string;
  name: string;
  category: string;
  description: string;
  origin: string;
  rarity: 'Common' | 'Rare' | 'Very Rare' | 'Exquisite';
  color: string;
  characteristics: string[];
  image: string;
}

export const gems: Gemstone[] = [
  {
    id: 'blue-sapphire-1',
    name: 'Royal Blue Sapphire',
    category: 'Sapphire',
    description: 'A magnificent oval-cut royal blue sapphire with exceptional clarity and brilliance.',
    origin: 'Ratnapura, Sri Lanka',
    rarity: 'Exquisite',
    color: 'Royal Blue',
    characteristics: ['Oval Cut', 'Natural', 'Unheated'],
    image: '/images/blue_sapphire.png'
  },
  {
    id: 'ruby-1',
    name: 'Pigeon Blood Ruby',
    category: 'Ruby',
    description: 'Deep red ruby with intense saturation and traditional Sri Lankan craftsmanship.',
    origin: 'Elahera, Sri Lanka',
    rarity: 'Very Rare',
    color: 'Deep Red',
    characteristics: ['Cushion Cut', 'Eye Clean', 'Vivid'],
    image: '/images/ruby.png'
  },
  {
    id: 'cats-eye-1',
    name: 'Chrysoberyl Cat\'s Eye',
    category: 'Cat\'s Eye',
    description: 'A stunning honey-yellow chrysoberyl with a perfectly centered, sharp eye.',
    origin: 'Pelmadulla, Sri Lanka',
    rarity: 'Very Rare',
    color: 'Honey Yellow',
    characteristics: ['Cabochon', 'Chatoyancy', 'Untreated'],
    image: '/images/hero_gems_background.png'
  },
  {
    id: 'alexandrite-1',
    name: 'Ceylon Alexandrite',
    category: 'Alexandrite',
    description: 'A legendary color-changing gemstone, shifting from emerald green in daylight to purplish-red under incandescent light.',
    origin: 'Balangoda, Sri Lanka',
    rarity: 'Exquisite',
    color: 'Color Changing',
    characteristics: ['Color Change', 'Mixed Cut', 'Natural'],
    image: '/images/blue_sapphire.png'
  },
  {
    id: 'padparadscha-1',
    name: 'Padparadscha Sapphire',
    category: 'Sapphire',
    description: 'A delicate blend of pink and orange, mirroring the color of a lotus blossom at sunset.',
    origin: 'Ratnapura, Sri Lanka',
    rarity: 'Exquisite',
    color: 'Pink-Orange',
    characteristics: ['Oval Cut', 'VVS', 'Unheated'],
    image: '/images/ruby.png'
  },
  {
    id: 'moonstone-1',
    name: 'Blue Sheen Moonstone',
    category: 'Moonstone',
    description: 'A mystical gemstone displaying a captivating blue adularescence over a milky background.',
    origin: 'Meetiyagoda, Sri Lanka',
    rarity: 'Rare',
    color: 'Colorless with Blue Sheen',
    characteristics: ['Cabochon', 'Adularescence', 'Translucent'],
    image: '/images/hero_gems_background.png'
  },
  {
    id: 'spinel-1',
    name: 'Cobalt Blue Spinel',
    category: 'Spinel',
    description: 'An exceptionally bright and vibrant blue spinel, known for its high refractive index and brilliance.',
    origin: 'Okkampitiya, Sri Lanka',
    rarity: 'Very Rare',
    color: 'Cobalt Blue',
    characteristics: ['Cushion Cut', 'Eye Clean', 'Vibrant'],
    image: '/images/blue_sapphire.png'
  },
  {
    id: 'yellow-sapphire-1',
    name: 'Golden Yellow Sapphire',
    category: 'Sapphire',
    description: 'A brilliant and bright yellow sapphire radiating warmth and positive energy.',
    origin: 'Elahera, Sri Lanka',
    rarity: 'Rare',
    color: 'Golden Yellow',
    characteristics: ['Round Brilliant', 'VS', 'Heated'],
    image: '/images/hero_gems_background.png'
  }
];

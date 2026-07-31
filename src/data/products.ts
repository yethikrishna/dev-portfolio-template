/**
 * Sample product data for the Uses page.
 * Replace these with your own hardware and gear.
 *
 * Template by Mynd Labs — https://myndlabs.tech
 */
export interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  amazonLink: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'AMD Ryzen 7 7800X3D Desktop Processor',
    description: 'The best gaming CPU on the market. 8 cores, 16 threads, and 3D V-Cache for unbeatable performance.',
    imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=ryzen+7+7800x3d',
    category: 'PC Components',
    featured: true,
  },
  {
    id: '2',
    title: 'NZXT Kraken 360 RGB AIO Liquid Cooler',
    description: 'Premium liquid cooling with a customizable LCD display. Keeps temps low even under heavy load.',
    imageUrl: 'https://images.unsplash.com/photo-1587202372614-32705e3bf49c?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=nzxt+kraken+360',
    category: 'PC Components',
    featured: false,
  },
  {
    id: '3',
    title: 'ASUS ROG Strix B650-A Gaming WiFi',
    description: 'Feature-packed motherboard with excellent VRM, WiFi 6E, and great I/O for the price.',
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=asus+rog+strix+b650',
    category: 'PC Components',
    featured: true,
  },
  {
    id: '4',
    title: 'G.Skill Trident Z5 RGB 32GB DDR5 6000MHz',
    description: 'Fast, reliable RAM with beautiful RGB. 6000MHz is the sweet spot for AM5 builds.',
    imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=gskill+trident+z5+32gb+ddr5',
    category: 'PC Components',
    featured: false,
  },
  {
    id: '5',
    title: 'NVIDIA RTX 4070 Super Founders Edition',
    description: 'Excellent 1440p gaming GPU with DLSS 3. Great value for performance in 2026.',
    imageUrl: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=rtx+4070+super',
    category: 'PC Components',
    featured: true,
  },
  {
    id: '6',
    title: 'Samsung 990 Pro 2TB NVMe SSD',
    description: 'Blazing fast PCIe 4.0 storage. Worth every penny for reduced load times and snappy builds.',
    imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=samsung+990+pro+2tb',
    category: 'PC Components',
    featured: false,
  },
  {
    id: '7',
    title: 'Corsair RM850e 850W 80+ Gold PSU',
    description: 'Reliable, efficient power supply with fully modular cables. Quiet under load.',
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=corsair+rm850e',
    category: 'PC Components',
    featured: false,
  },
  {
    id: '8',
    title: 'Lian Li O11 Dynamic EVO Mid-Tower Case',
    description: 'Stunning tempered glass case with excellent airflow and cable management.',
    imageUrl: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=lian+li+o11+dynamic+evo',
    category: 'PC Components',
    featured: true,
  },
  {
    id: '9',
    title: 'iPhone 15 Pro (Natural Titanium)',
    description: 'My daily driver — incredible camera system, titanium build, and USB-C. Perfect for mobile dev testing.',
    imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=iphone+15+pro',
    category: 'Mobile',
    featured: false,
  },
  {
    id: '10',
    title: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Best-in-class noise cancellation with excellent sound quality. Essential for deep work sessions.',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=sony+wh-1000xm5',
    category: 'Peripherals',
    featured: false,
  },
  {
    id: '11',
    title: 'Shure MV7+ Podcast Microphone',
    description: 'Professional USB/XLR microphone with great sound quality. Perfect for calls and recordings.',
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=shure+mv7',
    category: 'Peripherals',
    featured: false,
  },
  {
    id: '12',
    title: 'Keychron Q1 Pro Mechanical Keyboard',
    description: 'Premium wireless mechanical keyboard with hot-swappable switches. A joy to type on.',
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=keychron+q1+pro',
    category: 'Peripherals',
    featured: true,
  },
  {
    id: '13',
    title: 'Logitech MX Master 3S Wireless Mouse',
    description: 'The best productivity mouse. Smooth scrolling, ergonomic design, and multi-device support.',
    imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop',
    amazonLink: 'https://www.amazon.com/s?k=logitech+mx+master+3s',
    category: 'Peripherals',
    featured: true,
  },
];

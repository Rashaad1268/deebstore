/**
 * DEEBSTORE CATALOGUE
 * This file is the single source of truth for every product on the site.
 * Add an image to /static/art, then add one Product object to `products` below.
 * `slug` must be unique and URL-safe. `image` must begin with /art/.
 * Set status to "sold" to keep an artwork in the archive without accepting orders.
 */
export type Category = 'Canvas' | 'Drawing' | 'Object';
export type ProductStatus = 'available' | 'sold';

export type Product = {
  slug: string;
  title: string;
  category: Category;
  year: number;
  price: number;
  currency: 'USD';
  status: ProductStatus;
  dimensions: string;
  medium: string;
  image: string;
  alt: string;
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  { slug: 'after-the-rain', title: 'After the Rain', category: 'Canvas', year: 2026, price: 480, currency: 'USD', status: 'available', dimensions: '24 × 30 in', medium: 'Acrylic and oil pastel on canvas', image: '/art/after-the-rain.svg', alt: 'Abstract blue and russet shapes on a warm cream field', description: 'A quiet study of weather passing through a remembered landscape. Layered marks leave room for the surface to breathe.', featured: true },
  { slug: 'soft-architecture', title: 'Soft Architecture', category: 'Canvas', year: 2026, price: 620, currency: 'USD', status: 'available', dimensions: '30 × 40 in', medium: 'Acrylic, charcoal, and gesso on canvas', image: '/art/soft-architecture.svg', alt: 'Geometric ochre and black forms balanced on pale linen', description: 'Structure without rigidity. Chalky planes and hand-drawn edges turn an imagined room into a loose, tactile arrangement.', featured: true },
  { slug: 'three-figures', title: 'Three Figures, Waiting', category: 'Drawing', year: 2025, price: 190, currency: 'USD', status: 'sold', dimensions: '11 × 14 in', medium: 'Graphite and conté on cotton paper', image: '/art/three-figures.svg', alt: 'Three gestural charcoal figures on warm paper', description: 'Three quick observations held together by the space between them. Unframed, signed on the reverse.' },
  { slug: 'night-window', title: 'Night Window', category: 'Canvas', year: 2025, price: 540, currency: 'USD', status: 'available', dimensions: '28 × 36 in', medium: 'Oil and cold wax on canvas', image: '/art/night-window.svg', alt: 'Deep indigo painting with a luminous green central window', description: 'Built from translucent dark layers, this work catches differently as the room changes from daylight to evening.', featured: true },
  { slug: 'small-sun', title: 'Small Sun', category: 'Object', year: 2026, price: 95, currency: 'USD', status: 'available', dimensions: '7 × 7 in', medium: 'Hand-painted wood panel', image: '/art/small-sun.svg', alt: 'Ochre circle and tiny red marks on a square wood panel', description: 'A compact painted object made for shelves, desks, and small walls. Ready to hang or stand.' },
  { slug: 'field-notes-i', title: 'Field Notes I', category: 'Drawing', year: 2026, price: 160, currency: 'USD', status: 'available', dimensions: '12 × 16 in', medium: 'Ink, graphite, and wash on paper', image: '/art/field-notes.svg', alt: 'Loose botanical ink marks with a terracotta wash', description: 'Drawn from gathered shapes rather than specific plants. Ships flat, unframed, in archival packaging.' },
  { slug: 'red-chair', title: 'The Red Chair', category: 'Drawing', year: 2025, price: 210, currency: 'USD', status: 'available', dimensions: '14 × 18 in', medium: 'Oil stick and graphite on paper', image: '/art/red-chair.svg', alt: 'Expressive red chair drawn over cream and blue marks', description: 'An everyday object turned into a small stage. The visible revisions are part of the finished drawing.' },
  { slug: 'low-tide', title: 'Low Tide', category: 'Canvas', year: 2025, price: 450, currency: 'USD', status: 'sold', dimensions: '24 × 24 in', medium: 'Acrylic and sand on canvas', image: '/art/low-tide.svg', alt: 'Textured horizontal bands of sand, grey, and sea green', description: 'Mineral texture and softened color record the edge where water has just receded.' }
];

export const categories: Category[] = ['Canvas', 'Drawing', 'Object'];
export const formatPrice = (product: Product) => new Intl.NumberFormat('en-US', { style: 'currency', currency: product.currency, maximumFractionDigits: 0 }).format(product.price);
export const orderEmail = 'hello@deebstore.art';

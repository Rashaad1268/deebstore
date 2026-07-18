import { error } from '@sveltejs/kit';
import { products } from '$lib/data';
export const entries = () => products.map(({ slug }) => ({ slug }));
export function load({ params }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) error(404, 'Artwork not found');
  return { product, related: products.filter((item) => item.slug !== product.slug && item.category === product.category).slice(0, 3) };
}

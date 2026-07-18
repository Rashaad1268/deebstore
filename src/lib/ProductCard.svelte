<script lang="ts">
  import type { Product } from './data';
  import { formatPrice } from './data';
  let { product }: { product: Product } = $props();
</script>
<article class="card">
  <a class="image-wrap" href={`/art/${product.slug}/`} aria-label={`View ${product.title}`}>
    <img src={product.image} alt={product.alt} loading="lazy" width="800" height="1000" />
    {#if product.status === 'sold'}<span class="badge">Sold</span>{/if}
  </a>
  <div class="details">
    <div><h3><a href={`/art/${product.slug}/`}>{product.title}</a></h3><p>{product.medium}</p></div>
    <div class="right"><span>{product.year}</span><strong class:sold={product.status === 'sold'}>{product.status === 'sold' ? 'Sold' : formatPrice(product)}</strong></div>
  </div>
</article>
<style>
  .card{min-width:0}.image-wrap{position:relative;display:block;overflow:hidden;background:#ddd8cb}.image-wrap img{display:block;width:100%;aspect-ratio:4/5;object-fit:cover;transition:transform .7s cubic-bezier(.2,.7,.2,1)}.image-wrap:hover img{transform:scale(1.018)}.badge{position:absolute;right:12px;top:12px;background:#171713;color:#fff;padding:7px 11px;font-size:.7rem;letter-spacing:.12em;text-transform:uppercase}.details{display:flex;justify-content:space-between;gap:16px;padding-top:13px}.details h3{font:500 1.08rem/1.2 var(--serif);margin:0 0 5px}.details h3 a{text-decoration:none}.details p,.right span{color:var(--muted);font-size:.75rem;margin:0}.right{text-align:right;display:flex;flex-direction:column;gap:5px;font-size:.78rem;white-space:nowrap}.right strong{font-weight:500}.right .sold{color:var(--muted);font-weight:400}
</style>

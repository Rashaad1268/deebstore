<script lang="ts">
  import '../styles.css';
  let { children } = $props();
  let open = $state(false);
</script>
<svelte:head><link rel="icon" href="/favicon.svg" /></svelte:head>
<a class="skip" href="#main">Skip to content</a>
<header>
  <a class="brand" href="/" aria-label="deebstore home">deeb<span>store</span></a>
  <button class="menu" onclick={() => open = !open} aria-expanded={open} aria-controls="nav">{open ? 'Close' : 'Menu'}</button>
  <nav id="nav" class:open aria-label="Main navigation">
    <a href="/#shop" onclick={() => open=false}>Shop</a><a href="/#about" onclick={() => open=false}>About</a><a href="mailto:hello@deebstore.art">Contact</a>
  </nav>
</header>
<main id="main">{@render children()}</main>
<footer>
  <div><a class="brand inverse" href="/">deeb<span>store</span></a><p>Original art, made slowly<br />by two friends</p></div>
  <div><p class="eyebrow">Inquiries</p><a href="mailto:hello@deebstore.art">hello@deebstore.art</a></div>
  <div><p class="eyebrow">Follow the work</p><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></div>
  <small>© {new Date().getFullYear()} deebstore</small>
</footer>
<style>
 header{height:84px;display:flex;align-items:center;justify-content:space-between;padding:0 var(--pad);position:relative;z-index:10;background:var(--paper)}.brand{font:600 1.4rem/1 var(--sans);letter-spacing:-.07em;text-decoration:none}.brand span{font-weight:300}.menu{display:none;background:none;border:0;padding:8px;font:inherit}.skip{position:absolute;left:12px;top:-100px;background:#fff;padding:10px;z-index:99}.skip:focus{top:12px}nav{display:flex;gap:35px}nav a{font-size:.76rem;text-transform:uppercase;letter-spacing:.12em;text-decoration:none}footer{background:#171713;color:#f2f0e9;padding:70px var(--pad) 32px;display:grid;grid-template-columns:2fr 1fr 1fr;gap:40px;position:relative}footer a{color:inherit}.inverse{font-size:1.7rem}.eyebrow{font-size:.66rem;text-transform:uppercase;letter-spacing:.16em;color:#aaa99f}footer div>p:not(.eyebrow){color:#aaa99f;line-height:1.5;font-size:.85rem}footer small{grid-column:1/-1;color:#77776f;margin-top:55px;font-size:.68rem}
 @media(max-width:700px){header{height:68px}.menu{display:block}nav{display:none;position:absolute;left:0;right:0;top:68px;background:var(--paper);padding:24px var(--pad) 30px;flex-direction:column;border-top:1px solid var(--line)}nav.open{display:flex}footer{grid-template-columns:1fr;padding-top:50px}footer small{margin-top:20px}}
</style>

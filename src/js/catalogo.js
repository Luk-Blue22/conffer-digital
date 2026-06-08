const WA = '52XXXXXXXXXX';
const waLink = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

const STOCK = [
  {id:1,  n:'Blusa Floral Verano',      p:'$320 MXN',       bg:'linear-gradient(135deg,#2a0a18,#4a1830)', cat:'Blusas'},
  {id:2,  n:'Blusa Satinada Elegante',  p:'$380 MXN',       bg:'linear-gradient(135deg,#1a1600,#302800)', cat:'Blusas'},
  {id:3,  n:'Blusa Campesina Bordada',  p:'$420 MXN',       bg:'linear-gradient(135deg,#0a1a0a,#183018)', cat:'Blusas'},
  {id:4,  n:'Top Romántico Volantes',   p:'$290 MXN',       bg:'linear-gradient(135deg,#280a18,#401828)', cat:'Tops'},
  {id:5,  n:'Blusa Oversize Premium',   p:'$350 MXN',       bg:'linear-gradient(135deg,#0a0a0a,#201810)', cat:'Blusas'},
  {id:6,  n:'Blusa Manga Larga Lisa',   p:'$280 MXN',       bg:'linear-gradient(135deg,#120a1a,#281830)', cat:'Blusas'},
  {id:7,  n:'Blusa Casual Algodón',     p:'$240 MXN',       bg:'linear-gradient(135deg,#0a0a14,#141828)', cat:'Blusas'},
  {id:8,  n:'Blusa Cropped Moderna',    p:'$300 MXN',       bg:'linear-gradient(135deg,#0a180a,#182810)', cat:'Tops'},
  {id:9,  n:'Blusa Estampado Tropical', p:'$360 MXN',       bg:'linear-gradient(135deg,#1a1200,#302000)', cat:'Blusas'},
  {id:10, n:'Blusa Formal Cuello V',    p:'$410 MXN',       bg:'linear-gradient(135deg,#1a0a00,#301808)', cat:'Blusas'},
];

const ENCARGO = [
  {id:11, n:'Blusa Bardot Trending',     p:'Desde $350 MXN', bg:'linear-gradient(135deg,#0a1018,#182030)', cat:'Blusas'},
  {id:12, n:'Blusa Lino Primavera',      p:'Desde $320 MXN', bg:'linear-gradient(135deg,#101a0a,#202a10)', cat:'Blusas'},
  {id:13, n:'Top Asimétrico Fashion',    p:'Desde $380 MXN', bg:'linear-gradient(135deg,#180a18,#281828)', cat:'Tops'},
  {id:14, n:'Blusa Manga Globo',         p:'Desde $400 MXN', bg:'linear-gradient(135deg,#0a0a18,#101828)', cat:'Blusas'},
  {id:15, n:'Blusa Crochet Verano',      p:'Desde $450 MXN', bg:'linear-gradient(135deg,#181000,#281800)', cat:'Blusas'},
  {id:16, n:'Vestido Casual Midi',       p:'Desde $650 MXN', bg:'linear-gradient(135deg,#0a1818,#102828)', cat:'Vestidos'},
  {id:17, n:'Blusa Custom Estampada',    p:'Desde $360 MXN', bg:'linear-gradient(135deg,#180818,#281228)', cat:'Blusas'},
  {id:18, n:'Camisa Femenina Oversized', p:'Desde $380 MXN', bg:'linear-gradient(135deg,#0a0818,#101218)', cat:'Camisas'},
  {id:19, n:'Blusa Off-Shoulder',        p:'Desde $340 MXN', bg:'linear-gradient(135deg,#180010,#280018)', cat:'Blusas'},
  {id:20, n:'Top Elegante Con Lazo',     p:'Desde $310 MXN', bg:'linear-gradient(135deg,#101800,#182800)', cat:'Tops'},
];

const GARMENT_SVG = `<svg viewBox="0 0 64 64" fill="none" stroke="rgba(255,255,255,.3)" stroke-width=".8"><path d="M16 12Q32 4 48 12L52 24Q32 20 12 24Z"/><rect x="12" y="24" width="40" height="32" rx="3"/><circle cx="32" cy="16" r="7"/></svg>`;

function tarjeta(p, esStock) {
  const badge = esStock
    ? `<span class="prod-badge badge-stock">En Stock</span>`
    : `<span class="prod-badge badge-order">Por Encargo</span>`;
  const btnWaText = esStock ? 'Pedir' : 'Cotizar';
  const waMsg = esStock
    ? `Hola! Me interesa la ${p.n} (En Stock) que vi en su página de CONFFER`
    : `Hola! Quisiera cotizar la ${p.n} del catálogo de CONFFER`;
  return `<div class="prod-card">
    <div class="prod-img" style="background:${p.bg}">${GARMENT_SVG}${badge}</div>
    <div class="prod-info">
      <div class="prod-cat">${p.cat}</div>
      <div class="prod-name">${p.n}</div>
      <div class="prod-price">${p.p}</div>
      <div class="prod-btns">
        <button class="btn-tryon" onclick="abrirModal(${p.id})">Probar IA</button>
        <a class="btn-wa-s" href="${waLink(waMsg)}" target="_blank">${btnWaText}</a>
      </div>
    </div>
  </div>`;
}

document.getElementById('grid-stock').innerHTML   = STOCK.map(p => tarjeta(p, true)).join('');
document.getElementById('grid-encargo').innerHTML = ENCARGO.map(p => tarjeta(p, false)).join('');

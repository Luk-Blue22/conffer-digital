const WA = '526677379095';
const waLink = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

const STOCK = [
  {id:1,  n:'Blusa Verde Bolitas',           p:'$120 MXN', talla:'M',       img:'public/images/productos/CON-001.png', cat:'Blusas'},
  {id:2,  n:'Pijama Blanca Detalles Negros', p:'$120 MXN', talla:'M',       img:'public/images/productos/CON-002.png', cat:'Pijamas'},
  {id:3,  n:'Vestido Rayas',                 p:'$200 MXN', talla:'M',       img:'public/images/productos/CON-003.png', cat:'Vestidos'},
  {id:4,  n:'Blusa Naranja Floreada',        p:'$250 MXN', talla:'G',       img:'public/images/productos/CON-004.png', cat:'Blusas'},
  {id:5,  n:'Traje Blanco con Negro',        p:'$200 MXN', talla:'CH',      img:'public/images/productos/CON-005.png', cat:'Trajes'},
  {id:6,  n:'Traje Verde Detalles Blancos',  p:'$200 MXN', talla:'G',       img:'public/images/productos/CON-006.png', cat:'Trajes'},
  {id:7,  n:'Traje Blanco con Rosa',         p:'$200 MXN', talla:'G',       img:'public/images/productos/CON-007.png', cat:'Trajes'},
  {id:8,  n:'Pantalón Blanco con Negro',     p:'$150 MXN', talla:'M / G',   img:'public/images/productos/CON-008.png', cat:'Pantalones'},
  {id:9,  n:'Traje Blanco Flores Azules',    p:'$180 MXN', talla:'CH',      img:'public/images/productos/CON-009.png', cat:'Trajes'},
  {id:10, n:'Pantalón Blanco Flores Rosas',  p:'$150 MXN', talla:'Única',   img:'public/images/productos/CON-010.png', cat:'Pantalones'},
  {id:11, n:'Traje Blanco Floreado',         p:'$180 MXN', talla:'M',       img:'public/images/productos/CON-011.png', cat:'Trajes'},
  {id:12, n:'Vestido Rojo',                  p:'$400 MXN', talla:'CH',      img:'public/images/productos/CON-012.png', cat:'Vestidos'},
  {id:13, n:'Vestido Rosa',                  p:'$300 MXN', talla:'CH',      img:'public/images/productos/CON-013.png', cat:'Vestidos'},
  {id:14, n:'Vestido Lila',                  p:'$550 MXN', talla:'M',       img:'public/images/productos/CON-014.png', cat:'Vestidos'},
  {id:15, n:'Vestido Azul',                  p:'$550 MXN', talla:'G',       img:'public/images/productos/CON-015.png', cat:'Vestidos'},
  {id:16, n:'Vestido Tinto Detalles Blancos',p:'$350 MXN', talla:'CH',      img:'public/images/productos/CON-016.png', cat:'Vestidos'},
  {id:17, n:'Vestido Rosa para Niña',        p:'$200 MXN', talla:'Infantil',img:'public/images/productos/CON-017.png', cat:'Infantil'},
  {id:18, n:'Vestido Rojo Terciopelo',       p:'$500 MXN', talla:'G',       img:'public/images/productos/CON-018.png', cat:'Vestidos'},
  {id:19, n:'Vestido Negro Flores Negras',   p:'$550 MXN', talla:'G',       img:'public/images/productos/CON-019.png', cat:'Vestidos'},
  {id:20, n:'Vestido Tinto con Encaje',      p:'$450 MXN', talla:'M',       img:'public/images/productos/CON-020.png', cat:'Vestidos'},
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
  const imagen = p.img
    ? `<div class="prod-img" style="background:#F5EDE0;overflow:hidden">
        <img src="${p.img}" alt="${p.n}" style="width:100%;height:100%;object-fit:contain;padding:6px;">
        ${badge}
      </div>`
    : `<div class="prod-img" style="background:${p.bg}">${GARMENT_SVG}${badge}</div>`;
  const talla = p.talla
    ? `<div class="prod-talla" style="font-size:.72rem;color:rgba(255,255,255,.45);margin-bottom:.6rem">Talla: ${p.talla}</div>`
    : '';
  return `<div class="prod-card">
    ${imagen}
    <div class="prod-info">
      <div class="prod-cat">${p.cat}</div>
      <div class="prod-name">${p.n}</div>
      <div class="prod-price">${p.p}</div>
      ${talla}
      <div class="prod-btns">
        <button class="btn-tryon" onclick="abrirModal(${p.id})">Probar IA</button>
        <a class="btn-wa-s" href="${waLink(waMsg)}" target="_blank">${btnWaText}</a>
      </div>
    </div>
  </div>`;
}

document.getElementById('grid-stock').innerHTML   = STOCK.map(p => tarjeta(p, true)).join('');
document.getElementById('grid-encargo').innerHTML = ENCARGO.map(p => tarjeta(p, false)).join('');

# CONFFER — Proyecto Web

Sitio web de la tienda de confección CONFFER (Culiacán, Sinaloa).

## Estructura

```
index.html                  # Página principal (sin CSS ni JS inline)
src/
  styles/main.css           # Todos los estilos
  js/
    catalogo.js             # Arrays STOCK/ENCARGO, función tarjeta(), render de grids
    animaciones.js          # IntersectionObserver para animación de cards
    main.js                 # Navbar, modal probador, tabs, WhatsApp, idea
  datos/
    productos.json          # Los 20 productos en formato JSON
public/
  images/productos/         # Fotos reales CON-001..CON-020
```

## Orden de carga de scripts

1. `productos.json` (referencia de datos)
2. `catalogo.js` — define `WA`, `waLink`, `STOCK`, `ENCARGO`, `tarjeta()` y renderiza grids
3. `animaciones.js` — observa `.prod-card` generadas por catalogo.js
4. `main.js` — usa `STOCK`, `ENCARGO` y `waLink` definidos en catalogo.js

## Pendiente

- Integrar Fashn.ai para el probador virtual real

# CONFFER — Ropa de Mujer Hecha en Culiacán

Sitio web de la tienda/taller de confección CONFFER, Aguaruto, Culiacán, Sinaloa.

## Funcionalidades

- **Catálogo con tabs**: En Stock / Lo Hacemos Para Ti / Trae Tu Idea
- **Probador Virtual IA**: sube tu foto y visualiza la prenda (integración con Fashn.ai próxima)
- **WhatsApp directo**: botones de cotización y pedido en cada prenda
- **Bordado profesional**: gorras, playeras, uniformes
- **Responsive**: adaptado a móvil, tablet y escritorio

## Uso

Abrir `index.html` en un navegador (o servir con cualquier servidor estático).

## Configuración

1. Reemplazar `52XXXXXXXXXX` en [src/js/catalogo.js](src/js/catalogo.js) con el número de WhatsApp real.
2. Agregar fotos de productos en `public/images/productos/`.

## Estructura de archivos

| Archivo | Contenido |
|---|---|
| `index.html` | HTML sin CSS ni JS inline |
| `src/styles/main.css` | Todos los estilos |
| `src/js/catalogo.js` | Datos de productos y render del catálogo |
| `src/js/animaciones.js` | Animación de cards al hacer scroll |
| `src/js/main.js` | Navbar, modal, tabs, funciones WhatsApp |
| `src/datos/productos.json` | Los 20 productos en JSON limpio |

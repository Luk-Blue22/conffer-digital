// Navbar scroll
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('s', window.scrollY > 50);
});

// Tabs
function cambiarTab(id, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + id).classList.add('active');
}

// Probador virtual — modal
const TODOS = [...STOCK, ...ENCARGO];
let productoActivo = null;

function mostrarEstado(estado) {
  document.getElementById('stateUpload').style.display  = 'none';
  document.getElementById('stateLoading').style.display = 'none';
  document.getElementById('stateResult').style.display  = 'none';
  document.getElementById('state' + estado).style.display = 'block';
}

function abrirModal(id) {
  productoActivo = TODOS.find(p => p.id === id);
  document.getElementById('modalProdName').textContent  = productoActivo.n;
  document.getElementById('modalProdPrice').textContent = productoActivo.p;
  document.getElementById('modalProdDot').style.background = productoActivo.bg;
  document.getElementById('resultName').textContent = productoActivo.n;
  document.getElementById('photoInput').value = '';
  document.getElementById('uploadPreview').style.display = 'none';
  document.getElementById('btnProcess').disabled = true;
  mostrarEstado('Upload');
  document.getElementById('tryonModal').classList.add('open');
}

function cerrarModal() {
  document.getElementById('tryonModal').classList.remove('open');
}

function reiniciarModal() {
  document.getElementById('photoInput').value = '';
  document.getElementById('uploadPreview').style.display = 'none';
  document.getElementById('btnProcess').disabled = true;
  mostrarEstado('Upload');
}

function manejarFoto(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      document.getElementById('previewImg').src = e.target.result;
      document.getElementById('uploadPreview').style.display = 'block';
      document.getElementById('btnProcess').disabled = false;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function procesarPrueba() {
  mostrarEstado('Loading');
  setTimeout(() => {
    document.getElementById('resultImg').src = document.getElementById('previewImg').src;
    const waMsg = `Hola! Me probé virtualmente la ${productoActivo.n} en CONFFER y me encantó. ¿Cómo la puedo pedir?`;
    document.getElementById('btnResultWa').href = waLink(waMsg);
    mostrarEstado('Result');
  }, 2500);
}

// Trae Tu Idea
function previewIdea(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      const preview = document.getElementById('ideaPreview');
      preview.src = e.target.result;
      preview.style.display = 'block';
      document.getElementById('ideaDrop').style.display = 'none';
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function enviarIdea() {
  const desc = document.getElementById('ideaTa').value.trim();
  const msg = desc
    ? `Hola! Tengo una idea de prenda para CONFFER: ${desc}`
    : `Hola! Quiero que fabriquen una prenda a mi medida en CONFFER. ¿Me pueden ayudar?`;
  window.open(waLink(msg), '_blank');
}

function abrirLightbox(src, nombre, precio) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-nombre').textContent = nombre;
  document.getElementById('lb-precio').textContent = precio;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function cerrarLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarLightbox();
});

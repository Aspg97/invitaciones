const modelViewer = document.querySelector('#modelo3d');

  // Función para reemplazar el modelo ligero por el completo
  function cargarModeloCompleto() {
    const modeloCompleto = 'https://raw.githubusercontent.com/Aspg97/invitaciones/master/IMG/prueba.glb';
    
    // Creamos un nuevo elemento para la transición
    const nuevoModelo = document.createElement('model-viewer');
    nuevoModelo.src = modeloCompleto;
    nuevoModelo.alt = "Modelo 3D completo";
    nuevoModelo.cameraControls = true;
    nuevoModelo.autoRotate = true;
    nuevoModelo.shadowIntensity = 0;
    nuevoModelo.preload = "auto";
    nuevoModelo.loading = "lazy";
    nuevoModelo.interactionPrompt = "none";
    nuevoModelo.style.width = "100%";
    nuevoModelo.style.height = "100%";
    nuevoModelo.style.background = "transparent";

    // Reemplaza el modelo anterior cuando el nuevo esté cargado
    nuevoModelo.addEventListener('load', () => {
      const contenedor = document.querySelector('#modelo-3d-container');
      contenedor.replaceChild(nuevoModelo, modelViewer);
    });
  }

  // Carga el modelo completo después de unos segundos o cuando quieras
  setTimeout(cargarModeloCompleto, 1500); // Ajusta tiempo según tu necesidad

// ACCION DE ABRIR SOBRE

const btn = document.querySelector('.btn-abrir');
const latIzq = document.querySelector('.lat-izq');
const latDer = document.querySelector('.lat-der');
const lazo = document.querySelector('.lazo');

btn.addEventListener('click', () => {
    lazo.classList.add('deslizar-lazo');
});
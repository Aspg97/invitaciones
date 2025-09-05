//Leyenda inicial de saludo
const leyenda = document.getElementById('txtSaludo');
leyenda.innerHTML = "Con especial cariño para:";

//Funcion para cortina abrir
const cortinaV = document.getElementById('cortina');
function contenidoCortina (rutaImagenBtn){
  let contenido = `
    <div class="lazo"></div>
    <div class="lat-izq"></div>
    <div class="lat-der"></div>
    <div class="cont-btn">
        <button class="btn-abrir">
            <img src=${rutaImagenBtn} alt="" width="80px">
        </button>
    </div>
  `;
  return contenido;
}
cortinaV.innerHTML = contenidoCortina('../../IMG/imgBtnAbrir.png');

//Funcion modelo 3D
const contenedorModelo = document.getElementById('contenedor-ar');
function modelo (rutaModelo){
    let contenido = `
    <model-viewer 
        src=${rutaModelo}
        alt="Modelo 3D"
        camera-controls
        auto-rotate
        shadow-intensity="0"
        preload="auto"
        exposure="1"
        interaction-prompt="none"
        loading="lazy">
    </model-viewer>
    `;
    return contenido;
}
contenedorModelo.innerHTML = modelo('https://raw.githubusercontent.com/Aspg97/invitaciones/master/IMG/prueba.glb');

//Función mostrar video
const contVideo = document.getElementById('video');
function cVideo (rutaVideo){
 let contenido = `
    <video width="100%" controls loop>
        <source src=${rutaVideo} type="video/mp4" />
    </video>
 `;
 return contenido;
}
contVideo.innerHTML = cVideo('../../IMG/invitacion.mp4');

//Funcion contenido link
const contLink = document.getElementById('linkConfirmacion');
function link (leyenda, link){
    let contenido = `
        <p class="leyenda">${leyenda}</p>
    `;
    return contenido;
}
contLink.innerHTML = link("Confirma tu asistencia",);
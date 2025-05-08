let indiceActual = 0;

function cambiarImagen(direccion) {
    const imagenes = document.querySelectorAll('.imagenes img');
    imagenes[indiceActual].classList.remove('activo');

    indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;
    imagenes[indiceActual].classList.add('activo');
}

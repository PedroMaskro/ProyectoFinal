let currentIndex = 0;    /* variable que almacena el índice de la imagen actualmente visible */
const images = document.querySelectorAll('.gallery img');    /* lista de todos los elementos img dentro de la clase .gallery. */
const totalImages = images.length;   /* Numero total de imagenes en la galeria */

document.getElementById('prevBtn').addEventListener('click', () => changeImage(-1));
document.getElementById('nextBtn').addEventListener('click', () => changeImage(1));

function changeImage(direction) {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    images[currentIndex].classList.add('active');
}

function showImage(index) {
    images[currentIndex].classList.remove('active');
    currentIndex = index;
    images[currentIndex].classList.add('active');
}

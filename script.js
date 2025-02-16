let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;

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

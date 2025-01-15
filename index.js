let currentIndex = 0;
let images = document.querySelectorAll('.carousel-images img');
let dots = document.querySelectorAll('.dot');
let isPlaying = true;
let interval;

function showImage(index) {
    if (index >= images.length) currentIndex = 0;
    else if (index < 0) currentIndex = images.length - 1;
    else currentIndex = index;

    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

function togglePlayPause() {
    if (isPlaying) {
        clearInterval(interval);
        document.querySelector('.play-pause').textContent = "Play";
    } else {
        interval = setInterval(nextImage, 3000);
        document.querySelector('.play-pause').textContent = "Pause";
    }
    isPlaying = !isPlaying;
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

function goToSlide(index) {
    showImage(index);
}

interval = setInterval(nextImage, 3000);

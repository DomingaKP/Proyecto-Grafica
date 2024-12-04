const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = '1s'
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
        image.style.transition = '1s'
    });
});
const lightbox = document.querySelector('#lightbox');
const images = document.querySelectorAll('.grid img');

images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');

        img.src = image.src;

        if (lightbox.firstChild) {
            lightbox.firstChild.remove();
        }
        lightbox.append(img);


    })
})


lightbox.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        lightbox.classList.remove('active');
        /* lightbox.firstChild.remove(); */
    }
})
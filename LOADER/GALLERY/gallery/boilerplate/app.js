/* verificar a troca entre imagens grandes e pequenas através da alteração da string do url */


const highlightImageElement = document.querySelector('.room-gallery img');
const previewsImageElement = document.querySelectorAll('.room-preview img');

previewsImageElement.forEach((img) => {
    img.addEventListener('click', event => {
        const smallSrc = event.target.src;
        const bigSrc = smallSrc.replace('small', 'big');


        previewsImageElement.forEach(i => {
            i.classList.remove('room-active');
        });

        highlightImageElement.src = bigSrc;

        img.classList.add('room-active');
    })
})


const highlight = document.querySelector('.room-gallery img');
const previews = document.querySelectorAll('.room-preview img');

previews.forEach(preview => {
	preview.addEventListener('click', event => {
		const smallSrc = event.target.src;
		/* const smallSrc = this.src; podemos usar o this ou event.target*/
		const bigSrc = smallSrc.replace('small', 'big');

		previews.forEach(preview => preview.classList.remove('room-active'));

		highlight.src = bigSrc;

		preview.classList.add('room-active');
	});
});

/* verificar a troca entre imagens grandes e pequenas através da alteração da string do url */

const lightbox = document.querySelector('#lightbox');
const imagesGallery = document.querySelectorAll('.grid img');
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const span = document.querySelector('.slider-wrapper span');
let currentSlide = 0;

imagesGallery.forEach((img, index) => {
	const clonedImg = img.cloneNode(true);
	slider.append(clonedImg);

	img.addEventListener('click', event => {
		lightbox.classList.add('active');
		currentSlide = index;
		showSlide();
	});
});

const showSlide = () => {
	const sliderImgs = Array.from(slider.children);

	/* console.log(sliderImgs); */

	sliderImgs.forEach((img, index) => {
		index === currentSlide ? (img.style.display = 'block') : (img.style.display = 'none');
		/* 	if (index === currentSlide) {
			img.style.display = 'block';
		} else {
			img.style.display = 'none';
		} */
	});
	span.innerHTML = `image ${currentSlide + 1} of ${slider.children.length} images`;
};

//! event listeners for slider buttons and remove slider

prevBtn.addEventListener('click', event => {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slider.children.length - 1;
	}
	showSlide();
});

nextBtn.addEventListener('click', event => {
	currentSlide++;
	if (currentSlide >= slider.children.length) {
		currentSlide = 0;
	}
	showSlide();
});

lightbox.addEventListener('click', event => {
	if (event.target.tagName === 'IMG') {
		lightbox.classList.remove('active');
	}
});

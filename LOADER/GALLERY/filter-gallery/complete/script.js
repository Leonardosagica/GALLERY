// Select HTML elements
const filterButtons = document.querySelectorAll('#filter-buttons button');
const filterableCards = document.querySelectorAll('#filterable-cards .card');

filterButtons.forEach(button =>
	button.addEventListener('click', e => {
		document.querySelector('#filter-buttons .active').classList.remove('active');
		e.target.classList.add('active');
		filterableCards.forEach(card => {
			// show the card if it matches the clicked filter or show all cards if "all" filter is clicked
			if (card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === 'all') {
				card.classList.replace('hide', 'show');
			} else {
				card.classList.add('hide');
			}
		});
	}),
);

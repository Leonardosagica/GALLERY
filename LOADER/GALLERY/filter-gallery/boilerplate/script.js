//variables and HTML elements
const filterButtons = document.querySelectorAll('#filter-buttons button');
const filterCards = document.querySelectorAll('#filterable-cards article');

filterButtons.forEach(btn => {
    btn.addEventListener("click", event => {
        /* console.log(event.target.dataset.filter); */

        const filterBtn = document.querySelector('#filter-buttons .active');
        filterBtn.classList.remove("active");
            
        event.target.classList.add("active");
            
        /*  document.querySelector("#filter-buttons .active").classList.remove("active"); */
        
        filterCards.forEach(card => {
            
            
            if (card.dataset.name === event.target.dataset.filter || event.target.dataset.filter === 'all') {
                card.classList.replace('hide', 'show');
            } else {
                card.classList.add('hide');
            }
        })
    })
})
const carousel = [...document.querySelectorAll('.images')];
const next = [...document.querySelectorAll('.next')]
const prev = [...document.querySelectorAll('.previous')]

carousel.forEach((item, i) => {
    let carouselDimensions = item.getBoundingClientRect();
    let carouselWidth = carouselDimensions.width;

    next[i].addEventListener('click', () => {
        item.scrollLeft += carouselWidth;
    })

    prev[i].addEventListener('click', () => {
        item.scrollLeft -= carouselWidth;
    })
})
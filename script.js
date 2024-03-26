const brandsButton = document.querySelector('.brands__button')
const brandsList = document.querySelector('.brands__brand-list');
const container = document.querySelector('.brands-container');
const clientWidth = document.body.clientWidth;

brandsButton.addEventListener('click',  () => {
    if (brandsButton.classList.contains('brands__button--close')) {
        brandsButton.classList.remove('brands__button--close');
        brandsButton.classList.add('brands__button--open');
        brandsList.classList.remove('brand-list--opened');
        container.classList.remove('brands-container--opened')
        brandsButton.textContent = 'Показать все';
    } else {
        brandsButton.classList.remove('brands__button--open');
        brandsButton.classList.add('brands__button--close');
        brandsButton.textContent = 'Скрыть';
        brandsList.classList.add('brand-list--opened');
        container.classList.add('brands-container--opened');
    }
})



if (clientWidth < 768) {
    new Swiper('.brands-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 'auto',
        spaceBetween: 20,
    });

}
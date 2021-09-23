const burgerMenu = () => {
    const menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu_link'),
    burgerElem = document.querySelector('.hamburger');

    burgerElem.addEventListener('click', () => {
        burgerElem.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
    }); 

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            burgerElem.classList.toggle('hamburger__active');
            menu.classList.toggle('menu__active');
        });
    });
}
export default burgerMenu;
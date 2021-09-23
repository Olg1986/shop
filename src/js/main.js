import burgerMenu from './modules/burger';
import cards from './modules/cards';
import showImg from './modules/showImg';
import sliders  from './modules/slider';
import form from './modules/form';
import checkTextInputs from './modules/checkTextInput';
import modal from './modules/modals';
import scrolling from './modules/scroll';

window.addEventListener('DOMContentLoaded' , () => {
    'use strict';

    burgerMenu();
    cards();
    showImg();
    sliders('.slider__item', '.next', '.prev');
    form();
    checkTextInputs('[name="username"]');
    checkTextInputs('[name="email" ]');
    checkTextInputs('[name="username"]');
    modal('[data-modal="consultation"]','.overlay');
    scrolling('.pageup');
    
});
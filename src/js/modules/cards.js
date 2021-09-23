import {getResourse} from '../services/servises';

const cards = () => {
    const btnTrigger = document.querySelector('.more-btn');

    btnTrigger.addEventListener('click', function() {
        getResourse('assets/db.json')
        .then(res => createCard(res.cards))
        .catch((error) => console.log(error))
        this.remove(); 
    });

    function createCard(response) {
        response.forEach(({src}) => {
            const card = document.createElement('div');
            card.classList.add('col-md-3');
            card.innerHTML = `
            <div class="card__item">
                <img class="card__img" src=${src} alt="cardImg">
                <div class="card__icon">
                    <img src="./assets/img/white__icon/eye.png" alt="cardImgWhite">
                </div>
            </div>
                `;

           document.querySelector('.card-row').append(card); 
        });
    }
}
export default cards;
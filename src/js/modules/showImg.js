const showImg = () => {
    const imgModal = document.createElement('div'),
        workSection = document.querySelector('.card'),
        bigImg = document.createElement('img');

    imgModal.classList.add('modalImg');
    workSection.append(imgModal);
    imgModal.style.justifyContent = 'center';
    imgModal.style.alignItems = 'center';
    imgModal.append(bigImg);

    workSection.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('card__img')) {
            imgModal.style.display = 'flex';
            bigImg.style.width = '600px';
            bigImg.style.height = '600px';
            bigImg.src = target.src;
            document.body.overflow = 'hidden';
        }

        if (target && target.matches('div.modalImg')) {
            imgModal.style.display = 'none';
            document.body.overflow = '';
        }
    });


}
export default showImg;
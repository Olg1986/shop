function openModal(modalSeector) {
    const modal = document.querySelector(modalSeector);
    modal.style.display = 'block';
    document.body.overflow = 'hidden';
}

function closeModal(modalSeector) {
    const modal = document.querySelector(modalSeector);
    modal.style.display = 'none';
    document.body.overflow = '';
}

const modal = (triggerSelector, modalSeector) => {
    const modal = document.querySelector(modalSeector),
        btnTrigger = document.querySelectorAll(triggerSelector);

    btnTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal(modalSeector);
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '' ) {
            closeModal(modalSeector);
        };
    });
        
}

export default modal;
export {openModal, closeModal};
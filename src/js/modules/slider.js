const sliders = (slidesSelector, next, prev) => {
    const items = document.querySelectorAll(slidesSelector);
        
    let slideIndex = 1,
        paused = true;
    
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });
        items[slideIndex - 1].style.display = 'block';
        
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n)
    }

    try {
        const nextBtn = document.querySelector(next),
            prevBtn = document.querySelector(prev);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        }); 
        
        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.add('slideInLeft');
            items[slideIndex - 1].classList.remove('slideInRight');
        }); 
    } catch (error) {}

    function actionAnimation() {
        paused = setInterval(() => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        }, 3000)
    }

    actionAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        actionAnimation();
    });

}
export default sliders;
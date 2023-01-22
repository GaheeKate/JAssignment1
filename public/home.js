window.onload = function () {
    document.querySelector('.btn__1').addEventListener('click', () => {
        document.querySelector('.swiper__container').style.transform =
            'translate(0vw)';
    })
    document.querySelector('.btn__2').addEventListener('click', () => {
        document.querySelector('.swiper__container').style.transform =
            'translate(-100vw)';
    })
    document.querySelector('.btn__3').addEventListener('click', () => {
        document.querySelector('.swiper__container').style.transform =
            'translate(-200vw)';
    })
}